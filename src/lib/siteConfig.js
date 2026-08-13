/**
 * Every piece of copy and every contact detail on the site lives here — edit
 * this one file to change wording, and you shouldn't need to touch any JSX.
 *
 * Content follows the Traskas Consulting website build brief. Sections are
 * grouped by the page they appear on.
 */

// LinkedIn is the single contact route for the site. No email address is
// published anywhere: the header CTA, every call-to-action button and the
// footer all point here.
const linkedin = 'https://www.linkedin.com/in/julia-t-a963a029'

/**
 * The copy below is authored as indented template literals so it stays
 * readable in this file. This collapses that indentation so it never reaches
 * the page — it matters for `alt` text and `<meta>` descriptions, where the
 * browser does not fold whitespace for us.
 */
function squish(value) {
  if (typeof value === 'string') return value.replace(/\s+/g, ' ').trim()
  if (Array.isArray(value)) return value.map(squish)
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, squish(item)])
    )
  }
  return value
}

export const siteConfig = squish({
  // Displayed in page titles, the footer copyright and article bylines.
  name: 'Julia Traskas',

  // The wordmark in the header and footer. The first word is highlighted gold.
  wordmark: { lead: 'Traskas', rest: 'Consulting' },

  url: 'https://traskas-consulting.com',

  // TODO: once src/images/portrait.png is Julia's professional photograph
  // rather than the template placeholder, set `use` to true. Until then the
  // Home and About heroes show the branded editorial graphic instead.
  portrait: { use: false },

  metaDescription:
    'Traskas Consulting — senior marketing support for consulting firms. Thought leadership, marketing strategy and content that supports business development.',

  contact: {
    linkedin,
    // Every primary button on the site uses this label and destination.
    ctaLabel: 'Discuss your marketing needs',
    ctaHref: linkedin,
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
  ],

  // ---------------------------------------------------------------- Home ---
  home: {
    hero: {
      title: 'Helping consulting firms turn expertise into growth.',
      standfirst:
        'Thought leadership, marketing strategy and content that supports business development.',
      portraitAlt:
        'Julia Traskas, senior marketing consultant at Traskas Consulting',
    },

    problem: {
      heading: 'You have the expertise. Can you communicate it?',
      paragraphs: [
        `Most consulting firms already have the expertise they need. What’s
         often missing is the time, structure and marketing support to turn
         those ideas into a clear point of view and communicate them
         consistently.`,
        `I help bring that expertise to the surface, shape it into thought
         leadership and develop connected marketing that supports credibility,
         business development and growth.`,
      ],
      link: { label: 'See how I can help', href: '/services' },
    },

    experience: {
      heading: 'Experience',
      paragraph: `For more than 15 years, I’ve worked with consulting firms in
        the UK and North America, becoming a trusted extension of marketing
        teams, senior leaders, consultants and subject matter experts.`,
      link: { label: 'More about my experience', href: '/about' },
    },

    latestThinking: {
      heading: 'Latest thinking',
    },

    cta: {
      heading: 'Need more senior marketing capacity?',
      body: `Let’s talk about where you need support and whether I could be a
        good fit.`,
    },
  },

  // ------------------------------------------------------------ Services ---
  services: {
    title: 'Senior marketing support for consulting firms.',
    standfirst: `From shaping the idea to delivering the finished work, I help
      consulting firms communicate their expertise clearly and consistently.`,

    // The four agreed service headings. Used on both Home and Services, so
    // the wording stays identical in each place.
    valueHeading: 'Where I add value',
    valueIntro: `I work with consulting firms at the point where expertise meets
      marketing. Whether you’re building a thought leadership programme,
      launching a new proposition or creating a more consistent marketing
      programme, I provide the experience and practical support to help turn
      expertise into action.`,
    value: [
      {
        title: 'Thought leadership',
        description: `Developing distinctive points of view that reflect your
          expertise and support business development.`,
      },
      {
        title: 'Campaign development',
        description: `Turning one strong idea into a connected programme across
          articles, executive content, social media, websites and sales
          activity.`,
      },
      {
        title: 'Expert-led content',
        description: `Working with partners and subject matter experts to draw
          out their ideas and communicate them clearly, credibly and in their
          own voice.`,
      },
      {
        title: 'Consistent delivery',
        description: `Providing the experienced support needed to keep content
          and campaigns moving when internal teams are stretched.`,
      },
    ],

    processHeading: 'How we work together',
    processIntro: `Every engagement is different, but the objective is always
      the same: turning expertise into marketing that supports growth.`,
    process: [
      {
        title: 'Discover',
        description: 'Identify the opportunities hidden within your expertise.',
      },
      {
        title: 'Shape',
        description: 'Develop a distinctive point of view.',
      },
      {
        title: 'Develop',
        description: 'Create connected thought leadership and campaigns.',
      },
      {
        title: 'Amplify',
        description: `Keep your expertise visible, relevant and commercially
          valuable.`,
      },
    ],

    ai: {
      heading: 'Intelligent use of AI',
      paragraphs: [
        `Many of the consulting firms I work with, and the clients they serve,
         are already exploring how AI can improve the way they operate.
         Marketing should be no different.`,
        `I use AI to support research, test different angles and accelerate
         parts of the drafting process. This creates more time for the work that
         adds real value: understanding your business, drawing out the strongest
         thinking from your experts and shaping it into distinctive,
         commercially relevant marketing.`,
        `The final work is never generic or simply generated by a tool. Every
         piece is grounded in your experts’ knowledge, shaped by human judgement
         and refined to reflect your firm’s voice, point of view and commercial
         priorities.`,
      ],
      link: {
        label: 'Read the rise of the bionic writer',
        href: '/insights/the-bionic-writer',
      },
    },
  },

  // --------------------------------------------------------------- About ---
  about: {
    title: 'Hi, I’m Julia Traskas',
    standfirst: 'Senior marketing consultant to consulting firms.',
    portraitAlt:
      'Julia Traskas, senior marketing consultant at Traskas Consulting',

    biography: [
      `My career began with words, an English degree and a job teaching business
       English around the world. I helped people prepare for important meetings,
       presentations and conversations with international colleagues, which
       taught me something I still draw on today: even the strongest expertise
       has limited value if it can’t be communicated clearly.`,
      `Teaching soon led to business development within the private language
       school sector. I found myself identifying what needed to be done, shaping
       the approach and then rolling up my sleeves to create the content to make
       it happen. After several years working in marketing within the UK
       welfare-to-work sector, I moved into consulting.`,
      `My first contract was meant to be two days a week for three months. It
       became a seven-year relationship with Maine Pointe, a US-based supply
       chain and operations consultancy, during a period of significant growth
       that ultimately led to a private equity buyout. I later worked as part of
       the marketing team at JMJ Associates and, more recently, helped establish
       the brand voice and marketing approach for a new international consulting
       group bringing eight specialist companies together under one umbrella.`,
      `Over the years, I’ve worked with consultants, subject matter experts and
       senior leaders across the UK and North America. I know how to ask the
       right questions, find the idea within a complex conversation and turn it
       into content that people can understand and use.`,
      `Today, I bring that combination of writing, marketing and business
       development experience to consulting firms that need senior marketing
       support without necessarily needing another permanent hire.`,
    ],

    // Pulled forward as a highlighted line within the biography.
    pullQuote: `Even the strongest expertise has limited value if it can’t be
      communicated clearly.`,

    experienceHeading: 'Selected experience',
    experience: [
      {
        title: 'Maine Pointe',
        description: `For seven years, I worked with the global marketing team of
          a leading supply chain and operations consulting firm, helping develop
          a distinctive brand voice and thought leadership programme. I
          translated complex supply chain expertise into articles, campaigns and
          client-facing content during a period of significant growth that
          culminated in the firm’s acquisition by private equity.`,
      },
      {
        title: 'JMJ Associates',
        description: `Embedded within the marketing team for five years, I
          developed thought leadership, campaigns and executive communications
          for a global consultancy specialising in leadership, safety and
          organisational performance.`,
      },
      {
        title: 'Multi-company consulting group',
        description: `I currently work as part of the fractional marketing team
          for a newly formed consulting group bringing together eight specialist
          businesses across procurement, supply chain, commercial and
          organisational transformation. My role includes helping define a
          coherent group narrative while maintaining the specialist positioning
          and identity of each individual company, alongside developing thought
          leadership, campaigns and executive content.`,
      },
      {
        title: 'Global operational transformation consultancy',
        description: `I provide thought leadership, website content and
          strategic messaging for an international operational transformation
          consultancy under NDA.`,
      },
    ],
  },

  // ------------------------------------------------------------ Insights ---
  insights: {
    title: 'Insights',
    standfirst: `Writing on thought leadership, marketing strategy and business
      development for consulting firms.`,
  },

  // ------------------------------------------------------- Contact block ---
  contactBlock: {
    heading: 'Let’s talk.',
    body: `If you need experienced marketing support, or simply want to discuss
      where your current approach could be stronger, get in touch.`,
  },
})
