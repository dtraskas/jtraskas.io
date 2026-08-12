import { Button } from '@/components/Button'
import { Section, SectionHeading } from '@/components/Section'
import { siteConfig } from '@/lib/siteConfig'

/**
 * The closing call to action. It appears at the foot of every page so there is
 * always a visible route to email, and always with the same wording.
 */
export function CallToAction({
  heading = siteConfig.contactBlock.heading,
  body = siteConfig.contactBlock.body,
}) {
  return (
    <Section tone="gold">
      <div className="max-w-2xl">
        <SectionHeading as="h2">{heading}</SectionHeading>
        <p className="mt-5 text-lg text-navy">{body}</p>
        <Button
          variant="onGold"
          href={siteConfig.contact.ctaHref}
          className="mt-8"
        >
          {siteConfig.contact.ctaLabel}
        </Button>
      </div>
    </Section>
  )
}
