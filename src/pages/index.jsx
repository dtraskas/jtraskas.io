import Head from 'next/head'

import { ArticleCard } from '@/components/ArticleCard'
import { HeroImage } from '@/components/HeroImage'
import { Button, TextLink } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { Section, SectionHeading } from '@/components/Section'
import { ValueCards } from '@/components/ValueCards'
import { getAllArticles } from '@/lib/getAllArticles'
import { siteConfig } from '@/lib/siteConfig'

export default function Home({ articles }) {
  const { home, services, contact } = siteConfig
  const [featured] = articles

  return (
    <>
      <Head>
        <title>{`Traskas Consulting — ${home.hero.title}`}</title>
        <meta
          name="description"
          content="Senior marketing support for consulting firms: thought leadership, marketing strategy and content that supports business development."
        />
      </Head>

      {/* 1. Hero */}
      <Container className="pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-6xl font-semibold tracking-tight text-navy lg:text-7xl">
              {home.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-xl text-ink">
              {home.hero.standfirst}
            </p>
            <Button href={contact.ctaHref} className="mt-9">
              {contact.ctaLabel}
            </Button>
          </div>

          <div className="lg:col-span-5">
            <HeroImage
              showPortrait={siteConfig.portrait.home}
              alt={home.hero.portraitAlt}
              aspect="aspect-[4/5]"
              offset="right"
              priority
              className="mx-auto max-w-sm lg:max-w-none"
            />
          </div>
        </div>
      </Container>

      {/* 2. The problem */}
      <Section>
        <div className="max-w-2xl">
          <SectionHeading as="h2">{home.problem.heading}</SectionHeading>
          <div className="mt-8 space-y-6 text-lg text-ink">
            {home.problem.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <TextLink href={home.problem.link.href} className="mt-8">
            {home.problem.link.label}
          </TextLink>
        </div>
      </Section>

      {/* 3. Where I add value */}
      <Section tone="sand">
        <SectionHeading as="h2">{services.valueHeading}</SectionHeading>
        <ValueCards items={services.value} className="mt-10" />
        <TextLink href="/services" className="mt-10">
          View services
        </TextLink>
      </Section>

      {/* 4. Experience */}
      <Section tone="navy">
        <div className="max-w-2xl">
          <SectionHeading as="h2" tone="light">
            {home.experience.heading}
          </SectionHeading>
          <p className="mt-8 text-lg text-paper/90">
            {home.experience.paragraph}
          </p>
          <TextLink
            href={home.experience.link.href}
            tone="light"
            className="mt-8"
          >
            {home.experience.link.label}
          </TextLink>
        </div>
      </Section>

      {/* 5. Latest thinking */}
      {featured && (
        <Section>
          <SectionHeading as="h2">{home.latestThinking.heading}</SectionHeading>
          <ArticleCard article={featured} featured as="h3" className="mt-10" />
          {articles.length > 1 && (
            <TextLink href="/insights" className="mt-10">
              Read more insights
            </TextLink>
          )}
        </Section>
      )}

      {/* 6. Final call to action */}
      <CallToAction heading={home.cta.heading} body={home.cta.body} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      // All articles are passed so the page can show the most recent one and
      // decide whether a "read more" link into Insights is worth showing.
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
