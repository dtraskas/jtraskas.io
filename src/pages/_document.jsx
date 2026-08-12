import { Head, Html, Main, NextScript } from 'next/document'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en-GB">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap"
        />
        <link
          rel="icon"
          href={`${basePath}/favicon.svg`}
          type="image/svg+xml"
        />
        <meta name="theme-color" content="#14213D" />
      </Head>
      <body className="flex h-full flex-col bg-paper font-sans text-ink">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
