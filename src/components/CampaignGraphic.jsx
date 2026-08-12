import clsx from 'clsx'

/**
 * The "one central idea becomes many outputs" device from the brief: a central
 * navy and gold spine with the resulting content ranged either side of it.
 */
const outputsLeft = ['Article', 'Social series', 'Sales conversation']
const spine = [
  { label: 'One central idea', tone: 'navy' },
  { label: 'Positioning or issue', tone: 'gold' },
  { label: 'Connected campaign', tone: 'navy' },
]
const outputsRight = ['Executive post', 'Website page', 'Email / guide']

const cellBase =
  'flex items-center justify-center px-4 py-6 text-center text-sm font-semibold uppercase tracking-[0.1em]'

function Cell({ children, tone = 'paper' }) {
  return (
    <div
      className={clsx(
        cellBase,
        tone === 'navy' && 'bg-navy text-paper',
        tone === 'gold' && 'bg-gold text-navy',
        tone === 'paper' && 'bg-paper text-navy'
      )}
    >
      {children}
    </div>
  )
}

export function CampaignGraphic({ className }) {
  return (
    <figure className={className}>
      {/* The 1px grid gaps sit on a hairline background, which draws the
          fine connecting lines between the cells. */}
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-hairline ring-1 ring-hairline sm:grid-cols-3">
        {spine.map((centre, row) => (
          <div key={centre.label} className="contents">
            <Cell>{outputsLeft[row]}</Cell>
            <Cell tone={centre.tone}>{centre.label}</Cell>
            <Cell>{outputsRight[row]}</Cell>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-base text-ink">
        One strong idea, developed once and then carried consistently across
        everything a firm publishes and says.
      </figcaption>
    </figure>
  )
}
