import clsx from 'clsx'

import { Container } from '@/components/Container'

/**
 * The opening block of an inner page: one h1 and an optional standfirst.
 */
export function PageHeader({ title, standfirst, children, className }) {
  return (
    <div className={clsx('bg-paper pt-16 sm:pt-24', className)}>
      <Container>
        <div className="max-w-3xl">
          <h1 className="font-serif text-6xl font-semibold tracking-tight text-navy lg:text-7xl">
            {title}
          </h1>
          {standfirst && (
            <p className="mt-6 max-w-2xl text-xl text-ink">{standfirst}</p>
          )}
          {children}
        </div>
      </Container>
    </div>
  )
}
