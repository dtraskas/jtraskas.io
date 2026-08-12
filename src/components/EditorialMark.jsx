import clsx from 'clsx'

/**
 * The branded editorial graphic the brief offers as an alternative to a
 * portrait: one central idea, connected by fine lines to the several outputs
 * it becomes. Blocks, lines and circles only — no stock imagery.
 *
 * It fills the hero image slot until Julia supplies a professional portrait;
 * see `siteConfig.portrait.use`.
 */
export function EditorialMark({ className }) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="One central idea connected by fine lines to the articles, posts, pages and conversations it becomes."
      className={clsx('bg-navy', className)}
    >
      {/* Oversized quotation mark, used sparingly as a background detail. */}
      <text
        x="330"
        y="150"
        textAnchor="middle"
        fill="#FAFAF8"
        fillOpacity="0.06"
        fontFamily="Source Serif 4, Georgia, serif"
        fontSize="260"
      >
        &rdquo;
      </text>

      {/* The central idea. */}
      <circle cx="200" cy="130" r="30" fill="#F2B705" />
      <circle
        cx="200"
        cy="130"
        r="52"
        fill="none"
        stroke="#F2B705"
        strokeOpacity="0.35"
      />

      {/* Fine connecting lines fanning out to the outputs. */}
      <g stroke="#FAFAF8" strokeOpacity="0.4" fill="none">
        <path d="M200 182v30" />
        <path d="M72 212h256" />
        <path d="M72 212v68M144 212v68M200 212v68M256 212v68M328 212v68" />
      </g>

      {/* The outputs. */}
      <g fill="none" stroke="#FAFAF8" strokeOpacity="0.55">
        <rect x="44" y="280" width="56" height="42" rx="4" />
        <rect x="116" y="280" width="56" height="42" rx="4" />
        <rect x="228" y="280" width="56" height="42" rx="4" />
        <rect x="300" y="280" width="56" height="42" rx="4" />
      </g>
      <rect x="172" y="280" width="56" height="42" rx="4" fill="#FFF3C4" />

      {/* …and converging again into one consistent programme. */}
      <g stroke="#FAFAF8" strokeOpacity="0.4" fill="none">
        <path d="M72 322v28M144 322v28M200 322v28M256 322v28M328 322v28" />
        <path d="M72 350h256" />
        <path d="M200 350v32" />
      </g>
      <rect x="140" y="382" width="120" height="7" rx="3.5" fill="#F2B705" />
    </svg>
  )
}
