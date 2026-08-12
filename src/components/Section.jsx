import clsx from 'clsx'

import { Container } from '@/components/Container'

const toneStyles = {
  paper: 'bg-paper text-ink',
  sand: 'bg-sand text-ink',
  navy: 'bg-navy text-paper',
  gold: 'bg-gold text-navy',
}

/**
 * A full-width horizontal band. The homepage alternates tones to give the page
 * its rhythm; inner pages mostly use `paper` with the occasional accent.
 */
export function Section({ tone = 'paper', className, children, ...props }) {
  return (
    <section
      className={clsx(toneStyles[tone], 'py-16 sm:py-24', className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  )
}

/**
 * The standard section heading: 28px on a phone, 38px on a laptop, with an
 * optional short eyebrow above it.
 */
export function SectionHeading({
  as: Component = 'h2',
  eyebrow,
  tone = 'dark',
  className,
  children,
  ...props
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p
          className={clsx(
            'mb-4 text-sm font-semibold uppercase tracking-[0.14em]',
            // Gold reads well on navy, but not on the soft-white background.
            tone === 'light' ? 'text-gold' : 'text-navy'
          )}
        >
          {eyebrow}
        </p>
      )}
      <Component
        className={clsx(
          'font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl',
          tone === 'light' ? 'text-paper' : 'text-navy'
        )}
        {...props}
      >
        {children}
      </Component>
    </div>
  )
}
