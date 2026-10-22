import { createHash } from 'node:crypto'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const output = new URL('../docs/', import.meta.url)
const files = (await readdir(output, { recursive: true, withFileTypes: true }))
  .filter(entry => entry.isFile() && entry.name !== 'sw.js')
  .map(entry => relative(fileURLToPath(output), resolve(entry.parentPath, entry.name)).replaceAll('\\', '/'))
  .sort()
const hash = createHash('sha256')
for (const file of files) {
  hash.update(file)
  hash.update(await readFile(new URL(file, output)))
}
const template = await readFile(new URL('./service-worker.js', import.meta.url), 'utf8')
hash.update(template)
const source = template
  .replace('__BUILD_VERSION__', hash.digest('hex').slice(0, 16))
  .replace('__PRECACHE_ASSETS__', JSON.stringify(files))
await writeFile(new URL('sw.js', output), source)
console.log(`Service worker generated with ${files.length} offline assets.`)
