const CACHE_PREFIX = `gtscale:${self.registration.scope}:`
const CACHE_NAME = `${CACHE_PREFIX}__BUILD_VERSION__`
const ASSETS = __PRECACHE_ASSETS__
const assetURLs = ASSETS.map(path => new URL(path, self.registration.scope).href)
const appURL = new URL('index.html', self.registration.scope).href

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(
    assetURLs.map(url => new Request(url, { cache: 'reload' })),
  )))
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key)))
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)
  if (event.request.method !== 'GET' || !url.href.startsWith(self.registration.scope)) return

  if (event.request.mode === 'navigate') {
    event.respondWith(caches.open(CACHE_NAME).then(cache => cache.match(appURL))
      .then(response => response || fetch(event.request)))
  } else if (assetURLs.includes(url.href)) {
    event.respondWith(caches.open(CACHE_NAME).then(cache => cache.match(event.request))
      .then(response => response || fetch(event.request)))
  }
})
