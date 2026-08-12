import Image from 'next/image'
import clsx from 'clsx'

import { EditorialMark } from '@/components/EditorialMark'
import { siteConfig } from '@/lib/siteConfig'
import portraitImage from '@/images/portrait.png'

/**
 * The image slot in the Home and About heroes, offset against a sand block.
 *
 * Shows the branded editorial graphic until a real portrait is supplied —
 * flip `siteConfig.portrait.use` to true once `src/images/portrait.png` is
 * Julia's photograph.
 */
export function HeroImage({
  aspect = 'aspect-[4/5]',
  offset = 'right',
  alt,
  priority = false,
  className,
}) {
  return (
    <div className={clsx('relative', className)}>
      <span
        aria-hidden="true"
        className={clsx(
          'absolute -bottom-4 h-full w-full rounded-lg bg-sand',
          offset === 'right' ? '-right-4' : '-left-4'
        )}
      />
      {siteConfig.portrait.use ? (
        <Image
          src={portraitImage}
          alt={alt}
          sizes="(min-width: 1024px) 26rem, 22rem"
          priority={priority}
          className={clsx('relative w-full rounded-lg object-cover', aspect)}
        />
      ) : (
        <EditorialMark className={clsx('relative w-full rounded-lg', aspect)} />
      )}
    </div>
  )
}
