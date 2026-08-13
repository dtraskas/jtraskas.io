import clsx from 'clsx'

/**
 * Discover → Shape → Develop → Amplify.
 *
 * Four connected steps on a laptop; four stacked steps, connected by a
 * vertical rule, on a phone.
 *
 * The step number is drawn from the list's own `list-item` counter rather
 * than typed into the markup. An <ol> already numbers its items, so writing
 * the digit out as well would put it in the document twice — invisible on
 * screen, but picked up by screen readers, reader modes and crawlers.
 */
export function ProcessSteps({ steps }) {
  return (
    <ol role="list" className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={clsx(
            'relative pb-10 pl-12 md:pb-0 md:pl-0',
            // The gold numbered disc: the list counter, styled.
            'before:absolute before:left-0 before:top-0 before:flex before:h-8 before:w-8',
            'before:items-center before:justify-center before:rounded-full',
            'before:bg-gold before:text-sm before:font-bold before:text-navy',
            'before:content-[counter(list-item)] md:before:relative'
          )}
        >
          {index < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-[15px] top-9 bottom-2 w-px bg-hairline md:left-10 md:-right-6 md:top-[15px] md:bottom-auto md:h-px md:w-auto"
            />
          )}
          <h3 className="font-serif text-xl font-semibold text-navy md:mt-5">
            {step.title}
          </h3>
          <p className="mt-2 text-base text-ink">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}
