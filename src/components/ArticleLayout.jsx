import Head from 'next/head'
import Link from 'next/link'

import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { formatDate } from '@/lib/formatDate'
import { siteConfig } from '@/lib/siteConfig'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 8H3m0 0 3.5-3.5M3 8l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({ children, meta, isRssFeed = false }) {
  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} — Traskas Consulting`}</title>
        <meta name="description" content={meta.description} />
        {/* A draft is already kept out of every listing; this also keeps it
            out of search results while its page remains reachable by URL. */}
        {meta.draft && <meta name="robots" content="noindex, nofollow" />}
      </Head>

      <Container className="pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-prose">
          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-navy outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          >
            <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All insights
          </Link>

          <article className="mt-10">
            <header>
              <time
                dateTime={meta.date}
                className="text-sm font-semibold uppercase tracking-[0.14em] text-navy"
              >
                {formatDate(meta.date)}
              </time>
              <h1 className="mt-4 font-serif text-6xl font-semibold tracking-tight text-navy lg:text-7xl">
                {meta.title}
              </h1>
              {meta.standfirst && (
                <p className="mt-6 text-xl text-ink">{meta.standfirst}</p>
              )}
              <p className="mt-6 border-t border-hairline pt-6 text-base text-ink">
                By {meta.author ?? siteConfig.name}
              </p>
            </header>

            <Prose className="mt-10">{children}</Prose>
          </article>
        </div>
      </Container>

      <CallToAction />
    </>
  )
}
