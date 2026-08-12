/**
 * Discover → Shape → Develop → Amplify.
 *
 * Four connected steps on a laptop; four stacked steps, connected by a
 * vertical rule, on a phone.
 */
export function ProcessSteps({ steps }) {
  return (
    <ol role="list" className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
      {steps.map((step, index) => (
        <li key={step.title} className="relative pb-10 pl-12 md:pb-0 md:pl-0">
          {index < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-[15px] top-9 bottom-2 w-px bg-hairline md:left-10 md:-right-6 md:top-[15px] md:bottom-auto md:h-px md:w-auto"
            />
          )}
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy md:relative"
          >
            {index + 1}
          </span>
          <h3 className="font-serif text-xl font-semibold text-navy md:mt-5">
            {step.title}
          </h3>
          <p className="mt-2 text-base text-ink">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}
