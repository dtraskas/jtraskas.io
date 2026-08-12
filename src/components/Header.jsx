import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { siteConfig } from '@/lib/siteConfig'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Wordmark({ className }) {
  const { lead, rest } = siteConfig.wordmark

  return (
    <Link
      href="/"
      aria-label={`${lead} ${rest} — home`}
      className={clsx(
        'inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em] text-navy outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-4 focus-visible:ring-offset-paper sm:text-base',
        className
      )}
    >
      {/* Gold carries the brand here as a mark rather than as text — gold
          type on the soft-white background fails contrast. */}
      <span aria-hidden="true" className="h-3.5 w-1.5 rounded-sm bg-gold" />
      <span>
        {lead} <span className="font-medium">{rest}</span>
      </span>
    </Link>
  )
}

function isCurrent(pathname, href) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

function NavItem({ href, children }) {
  const active = isCurrent(useRouter().pathname, href)

  return (
    <li>
      <Link
        href={href}
        aria-current={active ? 'page' : undefined}
        className={clsx(
          'relative block px-1 py-2 text-base font-medium outline-none transition',
          'focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-4 focus-visible:ring-offset-paper',
          active ? 'text-navy' : 'text-ink hover:text-navy'
        )}
      >
        {children}
        <span
          aria-hidden="true"
          className={clsx(
            'absolute inset-x-0 -bottom-0.5 h-0.5 bg-gold transition-opacity',
            active ? 'opacity-100' : 'opacity-0'
          )}
        />
      </Link>
    </li>
  )
}

function MobileNavigation({ className }) {
  const pathname = useRouter().pathname

  return (
    <Popover className={className}>
      <Popover.Button
        aria-label="Open navigation menu"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-navy outline-none ring-1 ring-inset ring-navy/20 transition hover:bg-sand focus-visible:ring-2 focus-visible:ring-navy"
      >
        Menu
        <MenuIcon className="h-5 w-5" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-navy/40" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-4 z-50 origin-top rounded-lg bg-paper p-6 ring-1 ring-navy/10"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                Navigation
              </h2>
              <Popover.Button
                aria-label="Close navigation menu"
                className="-m-2 rounded-md p-2 text-navy outline-none focus-visible:ring-2 focus-visible:ring-navy"
              >
                <CloseIcon className="h-6 w-6" />
              </Popover.Button>
            </div>
            <nav className="mt-5">
              <ul className="divide-y divide-hairline text-lg">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Popover.Button
                      as={Link}
                      href={item.href}
                      aria-current={
                        isCurrent(pathname, item.href) ? 'page' : undefined
                      }
                      className={clsx(
                        'block py-3 font-medium',
                        isCurrent(pathname, item.href)
                          ? 'text-navy underline decoration-gold decoration-2 underline-offset-4'
                          : 'text-ink'
                      )}
                    >
                      {item.label}
                    </Popover.Button>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href={siteConfig.contact.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center rounded-md bg-gold px-5 py-3 text-base font-semibold text-navy"
            >
              {siteConfig.contact.ctaLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    // No backdrop-filter here: it would become the containing block for the
    // mobile menu's `fixed inset-0` overlay and shrink it to the header.
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <Wordmark />

          <div className="flex items-center gap-8">
            <nav aria-label="Main" className="hidden md:block">
              <ul className="flex items-center gap-7">
                {siteConfig.nav.map((item) => (
                  <NavItem key={item.href} href={item.href}>
                    {item.label}
                  </NavItem>
                ))}
              </ul>
            </nav>

            <a
              href={siteConfig.contact.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy outline-none transition hover:bg-gold-dark focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-paper lg:inline-flex"
            >
              {siteConfig.contact.ctaLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>

            <MobileNavigation className="md:hidden" />
          </div>
        </div>
      </Container>
    </header>
  )
}
