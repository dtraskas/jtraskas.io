import Link from 'next/link'
import clsx from 'clsx'

import { formatDate } from '@/lib/formatDate'

/**
 * A typographic card for one article — no stock photography, per the brief.
 * `featured` gives the first article a slightly larger, full-width treatment.
 */
export function ArticleCard({
  article,
  featured = false,
  // h2 by default; the homepage nests these under a "Latest thinking" h2.
  as: Heading = 'h2',
  className,
}) {
  return (
    <article
      className={clsx(
        'group relative rounded-lg border border-hairline bg-paper transition hover:border-navy/25',
        featured ? 'p-8 sm:p-10' : 'p-6 sm:p-8',
        className
      )}
    >
      <div className="relative">
        <time
          dateTime={article.date}
          className="text-sm font-semibold uppercase tracking-[0.14em] text-navy"
        >
          {formatDate(article.date)}
        </time>

        <Heading
          className={clsx(
            'mt-3 font-serif font-semibold tracking-tight text-navy',
            featured ? 'text-3xl sm:text-4xl' : 'text-2xl'
          )}
        >
          <Link
            href={`/insights/${article.slug}`}
            className="outline-none after:absolute after:inset-0 after:rounded-lg focus-visible:after:ring-2 focus-visible:after:ring-navy"
          >
            {article.title}
          </Link>
        </Heading>

        {/* The standfirst is the article's own summary; `description` is the
            SEO fallback for articles that don't have one. */}
        <p className="mt-4 max-w-2xl text-lg text-ink">
          {article.standfirst ?? article.description}
        </p>

        <span
          aria-hidden="true"
          className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
        >
          Read the article
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          >
            <path
              d="M3 8h10m0 0-3.5-3.5M13 8l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </article>
  )
}
