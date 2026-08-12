import clsx from 'clsx'

/**
 * The four agreed service areas, shown as four separate boxes: four across on
 * a laptop, two by two on a tablet, one per row on a phone.
 */
export function ValueCards({ items, className }) {
  return (
    <ul
      role="list"
      className={clsx(
        'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4',
        className
      )}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className="flex flex-col rounded-lg border border-hairline bg-paper p-6"
        >
          <span aria-hidden="true" className="h-1 w-10 rounded-full bg-gold" />
          <h3 className="mt-5 font-serif text-xl font-semibold text-navy">
            {item.title}
          </h3>
          <p className="mt-3 text-base text-ink">{item.description}</p>
        </li>
      ))}
    </ul>
  )
}
