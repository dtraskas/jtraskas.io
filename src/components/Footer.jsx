import Link from 'next/link'

import { Container } from '@/components/Container'
import { LinkedInIcon } from '@/components/SocialIcons'
import { siteConfig } from '@/lib/siteConfig'

export function Footer() {
  const { contact, wordmark, nav, name } = siteConfig

  return (
    <footer className="bg-navy text-paper">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em]">
              <span className="text-gold">{wordmark.lead}</span>{' '}
              <span className="text-paper">{wordmark.rest}</span>
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  <LinkedInIcon className="h-5 w-5 flex-none fill-gold" />
                  <span className="underline decoration-gold decoration-2 underline-offset-4 group-hover:text-gold">
                    Connect on LinkedIn
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
              Navigation
            </h2>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-paper outline-none transition hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="border-paper/15 mt-12 border-t pt-6 text-sm text-paper/70">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
