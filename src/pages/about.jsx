import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { HeroImage } from '@/components/HeroImage'
import { Section, SectionHeading } from '@/components/Section'
import { siteConfig } from '@/lib/siteConfig'

export default function About() {
  const { about } = siteConfig
  const [firstParagraph, secondParagraph, ...restOfBiography] = about.biography

  return (
    <>
      <Head>
        <title>{`About Julia Traskas — Traskas Consulting`}</title>
        <meta
          name="description"
          content="Julia Traskas on how a career in writing, business development and consulting marketing came together into senior marketing support for consulting firms."
        />
      </Head>

      {/* Opening section: two-column hero with the portrait beside the first
          two paragraphs on a laptop, stacked on a phone. */}
      <Container className="pt-16 pb-16 sm:pt-24 sm:pb-24">
        <h1 className="max-w-3xl font-serif text-6xl font-semibold tracking-tight text-navy lg:text-7xl">
          {about.title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-ink">{about.standfirst}</p>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 text-lg text-ink lg:order-first lg:col-span-7">
            <p>{firstParagraph}</p>
            <p>{secondParagraph}</p>
          </div>

          <div className="lg:col-span-5">
            <HeroImage
              alt={about.portraitAlt}
              aspect="aspect-[5/6]"
              offset="left"
              priority
              className="mx-auto max-w-md lg:max-w-none"
            />
          </div>
        </div>

        {/* Pull quote lifted from the opening paragraph. */}
        <blockquote className="mt-16 max-w-2xl border-l-[3px] border-gold pl-6 font-serif text-2xl text-navy">
          {about.pullQuote}
        </blockquote>

        <div className="mt-16 max-w-2xl space-y-6 text-lg text-ink">
          {restOfBiography.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Container>

      {/* Selected experience */}
      <Section tone="sand">
        <SectionHeading as="h2">{about.experienceHeading}</SectionHeading>
        <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {about.experience.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-hairline bg-paper p-6 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="block h-1 w-10 rounded-full bg-gold"
              />
              <dt className="mt-5 font-serif text-xl font-semibold text-navy">
                {item.title}
              </dt>
              <dd className="mt-3 text-base text-ink">{item.description}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CallToAction />
    </>
  )
}
