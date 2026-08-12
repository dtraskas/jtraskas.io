import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/insights/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/insights'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // Unpublished drafts stay out of every listing.
  return articles
    .filter((article) => article.draft !== true)
    .sort((a, z) => new Date(z.date) - new Date(a.date))
}
