import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  // The site's primary button: gold with navy text, per the brief.
  primary: 'bg-gold text-navy hover:bg-gold-dark',
  // For use on top of the gold call-to-action band, where a gold button
  // would disappear.
  onGold: 'bg-navy text-paper hover:bg-navy-800',
  // For use on top of a navy panel.
  onNavy: 'bg-gold text-navy hover:bg-gold-dark',
  secondary:
    'bg-transparent text-navy ring-1 ring-inset ring-navy/25 hover:bg-sand hover:ring-navy/40',
}

/** Anything not starting with "/" leaves the site and skips the router. */
const isExternal = (href) => /^https?:/.test(href)

export function Button({
  variant = 'primary',
  className,
  href,
  children,
  ...props
}) {
  className = clsx(
    'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold',
    'outline-none transition focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
    variantStyles[variant],
    className
  )

  if (!href) {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    )
  }

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        {...props}
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 8h10m0 0-3.5-3.5M13 8l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * The secondary route through the site: navy text, gold underline, arrow.
 * `tone="light"` inverts it for use on the navy panels.
 */
export function TextLink({ href, children, className, tone = 'dark' }) {
  const classes = clsx(
    'group inline-flex items-center gap-2 text-base font-semibold',
    'underline decoration-2 underline-offset-4 outline-none',
    'focus-visible:ring-2 focus-visible:ring-offset-2',
    tone === 'light'
      ? 'text-paper decoration-gold focus-visible:ring-gold focus-visible:ring-offset-navy'
      : 'text-navy decoration-gold focus-visible:ring-navy focus-visible:ring-offset-paper',
    className
  )

  const content = (
    <>
      {children}
      <ArrowRightIcon className="h-4 w-4 flex-none transition-transform group-hover:translate-x-1" />
    </>
  )

  return isExternal(href) ? (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {content}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}
