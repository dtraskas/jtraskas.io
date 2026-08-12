import Head from 'next/head'

import { ArticleCard } from '@/components/ArticleCard'
import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { getAllArticles } from '@/lib/getAllArticles'
import { siteConfig } from '@/lib/siteConfig'

export default function InsightsIndex({ articles }) {
  return (
    <>
      <Head>
        <title>{`Insights — Traskas Consulting`}</title>
        <meta name="description" content={siteConfig.insights.standfirst} />
      </Head>

      <PageHeader
        title={siteConfig.insights.title}
        standfirst={siteConfig.insights.standfirst}
      />

      {/* A single feed, newest first. It grows on its own as articles are
          added — no empty slots or promised future articles are shown. */}
      <Container className="pb-16 pt-14 sm:pb-24 sm:pt-16">
        <div className="flex flex-col gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>

      <CallToAction />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
