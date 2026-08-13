/**
 * Writes out/sitemap.xml after the static export.
 *
 * The list is derived from the exported HTML rather than from a hand-kept
 * array, so new pages and articles appear automatically and the sitemap can
 * never drift from what was actually published.
 *
 * Pages carrying a `noindex` robots tag (unpublished drafts) and the 404 page
 * are left out.
 */
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import glob from 'fast-glob'

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://traskas-consulting.com'
)
  .trim()
  .replace(/\/$/, '')
const OUT_DIR = path.join(process.cwd(), 'out')

function routeFor(file) {
  const dir = path.dirname(file)
  return dir === '.' ? '/' : `/${dir}/`
}

const files = await glob('**/index.html', { cwd: OUT_DIR })
const pages = []

for (const file of files) {
  const route = routeFor(file)
  if (route.startsWith('/404')) continue

  const html = await readFile(path.join(OUT_DIR, file), 'utf8')
  if (/<meta[^>]+name="robots"[^>]+noindex/i.test(html)) {
    console.log(`sitemap: skipping ${route} (noindex)`)
    continue
  }

  // Articles carry a publication date; use it as the last-modified hint.
  const published = html.match(/<time[^>]+datetime="(\d{4}-\d{2}-\d{2})"/i)
  pages.push({ route, lastmod: published?.[1] })
}

pages.sort((a, b) => a.route.localeCompare(b.route))

const body = pages
  .map(({ route, lastmod }) =>
    [
      '  <url>',
      `    <loc>${SITE_URL}${route}</loc>`,
      lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n')
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

await writeFile(path.join(OUT_DIR, 'sitemap.xml'), xml)
console.log(`sitemap: wrote ${pages.length} URLs to out/sitemap.xml`)
