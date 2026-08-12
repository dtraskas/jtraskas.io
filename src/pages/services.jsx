import Head from 'next/head'

import { TextLink } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'
import { CampaignGraphic } from '@/components/CampaignGraphic'
import { PageHeader } from '@/components/PageHeader'
import { ProcessSteps } from '@/components/ProcessSteps'
import { Section, SectionHeading } from '@/components/Section'
import { ValueCards } from '@/components/ValueCards'
import { siteConfig } from '@/lib/siteConfig'

export default function Services() {
  const { services } = siteConfig

  return (
    <>
      <Head>
        <title>{`Services — Traskas Consulting`}</title>
        <meta
          name="description"
          content="Thought leadership, campaign development, expert-led content and consistent delivery for consulting firms — and how we work together."
        />
      </Head>

      {/* 1. Short introductory hero */}
      <PageHeader title={services.title} standfirst={services.standfirst} />

      {/* 2. Where I add value */}
      <Section>
        <SectionHeading as="h2">{services.valueHeading}</SectionHeading>
        <p className="mt-6 max-w-2xl text-lg text-ink">{services.valueIntro}</p>
        <ValueCards items={services.value} className="mt-10" />
        <CampaignGraphic className="mt-14 max-w-3xl" />
      </Section>

      {/* 3. How we work together */}
      <Section tone="sand">
        <SectionHeading as="h2">{services.processHeading}</SectionHeading>
        <p className="mt-6 max-w-2xl text-lg text-ink">
          {services.processIntro}
        </p>
        <div className="mt-12">
          <ProcessSteps steps={services.process} />
        </div>
      </Section>

      {/* 4. Intelligent use of AI */}
      <Section>
        <div className="max-w-2xl">
          <SectionHeading as="h2">{services.ai.heading}</SectionHeading>
          <div className="mt-8 space-y-6 text-lg text-ink">
            {services.ai.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <TextLink href={services.ai.link.href} className="mt-8">
            {services.ai.link.label}
          </TextLink>
        </div>
      </Section>

      {/* 5. Final call to action */}
      <CallToAction />
    </>
  )
}
