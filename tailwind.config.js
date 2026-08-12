const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * Design system for Traskas Consulting.
 *
 * Palette, type scale and prose styles all come from the website build brief.
 * Colour balance is roughly 70% paper, 20% navy, 8% gold and 2% sand — the
 * gold behaves like a highlighter rather than a background.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,mdx}'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    // The brief asks for a small, deliberate type scale, so the default
    // Tailwind sizes are replaced rather than extended.
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.7rem' }],
      lg: ['1.125rem', { lineHeight: '1.9rem' }], // body copy
      xl: ['1.25rem', { lineHeight: '2rem' }], // standfirsts
      '2xl': ['1.5rem', { lineHeight: '2.1rem' }],
      '3xl': ['1.75rem', { lineHeight: '1.25' }], // section heading, phone
      '4xl': ['2rem', { lineHeight: '1.2' }], // section heading, phone (large)
      '5xl': ['2.375rem', { lineHeight: '1.15' }], // section heading, laptop
      '6xl': ['2.75rem', { lineHeight: '1.1' }], // page title, phone
      '7xl': ['3.25rem', { lineHeight: '1.05' }], // page title, laptop
      '8xl': ['3.75rem', { lineHeight: '1.03' }],
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#14213D',
          700: '#2A3A5C',
          800: '#1C2C4E',
          900: '#14213D',
        },
        paper: '#FAFAF8',
        gold: {
          DEFAULT: '#F2B705',
          dark: '#D9A404',
        },
        sand: '#FFF3C4',
        ink: '#30343B',
        hairline: '#E4E2DA',
      },
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
        serif: ['"Source Serif 4"', ...defaultTheme.fontFamily.serif],
      },
      borderRadius: {
        '1xl': '0.625rem',
      },
      maxWidth: {
        prose: '38rem',
      },
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.ink'),
          '--tw-prose-headings': theme('colors.navy.DEFAULT'),
          '--tw-prose-links': theme('colors.navy.DEFAULT'),
          '--tw-prose-underline': theme('colors.gold.DEFAULT'),
          '--tw-prose-bold': theme('colors.navy.DEFAULT'),
          '--tw-prose-counters': theme('colors.navy.DEFAULT'),
          '--tw-prose-bullets': theme('colors.gold.DEFAULT'),
          '--tw-prose-hr': theme('colors.hairline'),
          '--tw-prose-quote-borders': theme('colors.gold.DEFAULT'),
          '--tw-prose-captions': theme('colors.ink'),
          '--tw-prose-th-borders': theme('colors.hairline'),
          '--tw-prose-td-borders': theme('colors.hairline'),

          color: 'var(--tw-prose-body)',
          fontSize: theme('fontSize.lg')[0],
          lineHeight: theme('fontSize.lg')[1].lineHeight,
          maxWidth: 'none',

          p: {
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.6'),
          },

          // Headings
          'h2, h3': {
            color: 'var(--tw-prose-headings)',
            fontFamily: theme('fontFamily.serif').join(', '),
            fontWeight: theme('fontWeight.semibold'),
            letterSpacing: '-0.01em',
          },
          h2: {
            fontSize: theme('fontSize.3xl')[0],
            lineHeight: theme('fontSize.3xl')[1].lineHeight,
            marginTop: theme('spacing.14'),
            marginBottom: theme('spacing.5'),
          },
          h3: {
            fontSize: theme('fontSize.2xl')[0],
            lineHeight: theme('fontSize.2xl')[1].lineHeight,
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.4'),
          },
          ':is(h2, h3) + *': {
            marginTop: 0,
          },

          // Inline elements
          a: {
            color: 'var(--tw-prose-links)',
            fontWeight: theme('fontWeight.semibold'),
            textDecoration: 'underline',
            textDecorationColor: 'var(--tw-prose-underline)',
            textDecorationThickness: '2px',
            textUnderlineOffset: '3px',
            transitionProperty: 'color, background-color',
            transitionDuration: theme('transitionDuration.150'),
          },
          'a:hover': {
            backgroundColor: theme('colors.sand'),
          },
          strong: {
            color: 'var(--tw-prose-bold)',
            fontWeight: theme('fontWeight.semibold'),
          },

          // Pull quotes
          blockquote: {
            color: theme('colors.navy.DEFAULT'),
            fontFamily: theme('fontFamily.serif').join(', '),
            fontSize: theme('fontSize.2xl')[0],
            lineHeight: '1.5',
            fontStyle: 'normal',
            fontWeight: theme('fontWeight.normal'),
            paddingLeft: theme('spacing.6'),
            borderLeftWidth: '3px',
            borderLeftColor: 'var(--tw-prose-quote-borders)',
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.10'),
          },
          'blockquote p:first-of-type::before': { content: 'none' },
          'blockquote p:last-of-type::after': { content: 'none' },

          // Figures
          figcaption: {
            color: 'var(--tw-prose-captions)',
            fontSize: theme('fontSize.sm')[0],
            marginTop: theme('spacing.3'),
          },
          img: {
            borderRadius: theme('borderRadius.1xl'),
          },

          // Lists
          ul: { listStyleType: 'disc' },
          ol: { listStyleType: 'decimal' },
          'ul, ol': { paddingLeft: theme('spacing.6') },
          li: {
            marginTop: theme('spacing.3'),
            marginBottom: theme('spacing.3'),
            paddingLeft: theme('spacing.2'),
          },
          'li::marker': { fontWeight: theme('fontWeight.semibold') },
          'ol > li::marker': { color: 'var(--tw-prose-counters)' },
          'ul > li::marker': { color: 'var(--tw-prose-bullets)' },

          // Rules and tables
          hr: {
            marginTop: theme('spacing.14'),
            marginBottom: theme('spacing.14'),
            borderTopWidth: '1px',
            borderColor: 'var(--tw-prose-hr)',
          },
          table: {
            width: '100%',
            textAlign: 'left',
            fontSize: theme('fontSize.base')[0],
          },
          thead: {
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--tw-prose-th-borders)',
          },
          'thead th': {
            color: 'var(--tw-prose-headings)',
            fontWeight: theme('fontWeight.semibold'),
            paddingBottom: theme('spacing.2'),
          },
          'tbody tr': {
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--tw-prose-td-borders)',
          },
          ':is(tbody, tfoot) td': {
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
          },
        },
      },
    }),
  },
}
