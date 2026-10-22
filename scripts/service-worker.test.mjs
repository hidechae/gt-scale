import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { test } from 'node:test'
import { runInNewContext } from 'node:vm'

const output = new URL('../docs/', import.meta.url)
const source = await readFile(new URL('sw.js', output), 'utf8')

for (const path of ['/', '/gt-scale/']) {
  test(`offline lifecycle and cache isolation at ${path}`, async () => {
    const scope = `https://example.com${path}`
    const prefix = `gtscale:${scope}:`
    const stores = new Map([
      [`${prefix}old-version`, new Map()],
      ['gtscale:https://example.com/another-app/:v1', new Map()],
      ['unrelated-cache', new Map()],
    ])
    const handlers = new Map()
    let claimed = false
    const caches = {
      keys: async () => [...stores.keys()],
      delete: async key => stores.delete(key),
      open: async key => {
        if (!stores.has(key)) stores.set(key, new Map())
        const entries = stores.get(key)
        return {
          addAll: async requests => {
            for (const request of requests) {
              assert.ok(request.url.startsWith(scope))
              assert.equal(request.cache, 'reload')
              const file = request.url.slice(scope.length)
              const body = await readFile(new URL(file, output), 'utf8')
              entries.set(request.url, new Response(body))
            }
          },
          match: async request => entries.get(typeof request === 'string' ? request : request.url)?.clone(),
        }
      },
    }
    runInNewContext(source, {
      self: {
        registration: { scope },
        clients: { claim: async () => { claimed = true } },
        addEventListener: (type, handler) => handlers.set(type, handler),
      },
      caches, URL, Request,
      fetch: async () => { throw new Error('Network is offline') },
    })
    async function lifecycle(type) {
      let pending
      handlers.get(type)({ waitUntil: promise => { pending = promise } })
      await pending
    }
    await lifecycle('install')
    await lifecycle('activate')
    assert.equal(claimed, true)
    assert.equal(stores.has(`${prefix}old-version`), false)
    assert.ok(stores.has('gtscale:https://example.com/another-app/:v1'))
    assert.ok(stores.has('unrelated-cache'))

    function request(url, mode = 'cors', method = 'GET') {
      let response
      handlers.get('fetch')({
        request: { url, mode, method },
        respondWith: promise => { response = promise },
      })
      return response
    }
    const home = await request(`${scope}?source=homescreen`, 'navigate')
    const html = await home.text()
    assert.ok(html.includes('<div id="root"></div>'))
    const assets = [...html.matchAll(/(?:src|href)="\.\/(assets\/[^" ]+)"/g)]
    assert.ok(assets.length >= 3)
    for (const [, asset] of assets) {
      assert.equal((await request(`${scope}${asset}`)).status, 200)
    }
    assert.equal(request('https://other.example/asset.js'), undefined)
    assert.equal(request(`${scope}missing.js`), undefined)
    assert.equal(request(`${scope}index.html`, 'cors', 'POST'), undefined)
    if (path !== '/') assert.equal(request('https://example.com/another-app/', 'navigate'), undefined)
  })
}

test('install manifest and home-screen icons exist in the production output', async () => {
  const manifest = JSON.parse(await readFile(new URL('manifest.webmanifest', output), 'utf8'))
  assert.equal(manifest.start_url, './')
  assert.equal(manifest.scope, './')
  assert.equal(manifest.display, 'standalone')
  for (const path of ['/', '/gt-scale/']) {
    const manifestURL = new URL(`https://example.com${path}manifest.webmanifest`)
    const startURL = new URL(manifest.start_url, manifestURL)
    // Explicit IDs resolve against the origin, unlike start_url and scope.
    const identity = new URL(manifest.id ?? startURL.href, startURL.origin)
    assert.equal(identity.href, startURL.href)
  }
  for (const icon of manifest.icons) {
    const data = await readFile(new URL(icon.src, output))
    const size = Number(icon.sizes.split('x')[0])
    assert.equal(data.readUInt32BE(16), size)
    assert.equal(data.readUInt32BE(20), size)
  }
  await access(new URL('icons/apple-touch-icon.png', output))
})
