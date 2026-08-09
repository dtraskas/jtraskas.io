import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  LinkedInIcon,
  GitHubIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import { siteConfig } from '@/lib/siteConfig'
import portraitImage from '@/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function Section({ section }) {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        {section.heading}
      </h2>
      <div className="mt-4 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        {section.paragraphs?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {section.items && (
          <dl className="space-y-6">
            {section.items.map((item) => (
              <div key={item.title}>
                <dt className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {item.title}
                </dt>
                <dd className="mt-1">{item.description}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}

export default function About() {
  const { social, about } = siteConfig

  return (
    <>
      <Head>
        <title>{`About - ${siteConfig.name}`}</title>
        <meta name="description" content={siteConfig.metaDescription} />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {about.title}
            </h1>
            <p className="mt-3 text-lg font-medium text-teal-600 dark:text-teal-400">
              {about.subtitle}
            </p>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              {about.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-16 space-y-16">
              {about.sections.map((section) => (
                <Section key={section.heading} section={section} />
              ))}
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {social.linkedin && (
                <SocialLink
                  href={social.linkedin}
                  icon={LinkedInIcon}
                  className="mt-4"
                >
                  Follow on LinkedIn
                </SocialLink>
              )}
              {social.github && (
                <SocialLink
                  href={social.github}
                  icon={GitHubIcon}
                  className="mt-4"
                >
                  Follow on GitHub
                </SocialLink>
              )}
              {social.twitter && (
                <SocialLink
                  href={social.twitter}
                  icon={TwitterIcon}
                  className="mt-4"
                >
                  Follow on Twitter
                </SocialLink>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
