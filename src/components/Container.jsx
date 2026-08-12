import { forwardRef } from 'react'
import clsx from 'clsx'

/**
 * The single horizontal rhythm for the site. Everything sits inside this so
 * the wordmark, headings and body copy all line up down the left edge.
 */
export const Container = forwardRef(function Container(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx('px-5 sm:px-8', className)} {...props}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  )
})

/**
 * A narrower column for running text. The brief asks that paragraphs are not
 * stretched across the full width of the screen.
 */
export function TextColumn({ className, children }) {
  return <div className={clsx('max-w-2xl', className)}>{children}</div>
}
