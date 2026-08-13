import { useEffect, useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { siteConfig } from '@/lib/siteConfig'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

/**
 * The preferred address for the current page.
 *
 * The site is exported with `trailingSlash: true`, so every canonical ends in
 * a slash and points at the production domain regardless of where the build
 * is served from.
 */
function canonicalUrl(asPath) {
  let path = asPath.split(/[?#]/)[0]
  if (!path.endsWith('/')) path += '/'
  return siteConfig.url.replace(/\/$/, '') + path
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  // A canonical on an error page would point search engines at an error.
  // The exported 404 does not report its route as `/404`, so check the
  // resolved path as well as the route.
  let path = router.asPath.split(/[?#]/)[0]
  let showCanonical =
    !['/404', '/500', '/_error'].includes(router.pathname) &&
    !/^\/(404|500)\/?$/.test(path)

  return (
    <div className="flex min-h-full flex-col bg-paper">
      {showCanonical && (
        <Head>
          <link rel="canonical" href={canonicalUrl(router.asPath)} />
        </Head>
      )}
      <Header />
      <main className="flex-auto">
        <Component previousPathname={previousPathname} {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
