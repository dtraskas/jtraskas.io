/**
 * Every personal detail on the site lives here — edit this one file to make
 * the site yours. Pages and components import from it, so you shouldn't need
 * to touch any JSX to change names, bios, or links.
 *
 * Social links set to null are hidden from the site.
 */
export const siteConfig = {
  // Displayed in page titles, the footer copyright, and article headers.
  name: 'Julia Traskas',

  // The big heading on the home page.
  headline: 'Helping consulting firms turn expertise into growth.',

  // The line under the headline on the home page.
  tagline:
    'Thought leadership. Marketing strategy. Content that supports business development.',

  // The paragraph under the tagline on the home page.
  bio: `I help consulting firms communicate what makes them different, turning
    specialist expertise into thought leadership, campaigns and marketing that
    supports growth.`,

  // Used in <meta name="description"> tags for search engines.
  metaDescription:
    'Julia Traskas, Senior Marketing Consultant — helping consulting firms turn expertise into thought leadership, campaigns and marketing that supports growth.',

  // The Articles page.
  articles: {
    title: 'Thought leadership, marketing and growth.',
    intro:
      'Writing on thought leadership, marketing strategy and business development for consulting firms, collected in chronological order.',
  },

  // The About page. The intro paragraphs appear under the main heading;
  // each section then renders its own heading, paragraphs, and optional
  // list of items ({ title, description }).
  about: {
    title: 'Traskas Consulting',
    subtitle: 'Julia Traskas — Senior Marketing Consultant',
    intro: [
      `I help consulting firms communicate what makes them different, turning
       specialist expertise into thought leadership, campaigns and marketing
       that supports growth.`,
      `With nearly 30 years' experience across business development, marketing
       and content strategy, I work as an extension of in-house and fractional
       marketing teams, bringing senior judgement, commercial understanding and
       the ability to translate specialist expertise into marketing that
       resonates with the audiences you want to reach.`,
    ],
    sections: [
      {
        heading: 'You have the expertise. Can you communicate it?',
        paragraphs: [
          `Most consulting firms already have the expertise they need. What's
           often missing is the time, structure and marketing support to turn
           those ideas into a clear point of view and communicate them
           consistently.`,
          `I help bring that expertise to the surface, shape it into thought
           leadership and develop connected marketing that supports
           credibility, business development and growth.`,
        ],
      },
      {
        heading: 'Where I add value',
        paragraphs: [
          `I work with consulting firms at the point where expertise meets
           marketing. Whether you're building a thought leadership programme,
           launching a new proposition or creating a more consistent marketing
           programme, I provide the experience and practical support to help
           turn expertise into action.`,
        ],
        items: [
          {
            title: 'Thought leadership',
            description: `Developing distinctive points of view that reflect
              your expertise and support business development.`,
          },
          {
            title: 'Campaign development',
            description: `Turning one strong idea into a connected programme
              across articles, executive content, social media, websites and
              sales activity.`,
          },
          {
            title: 'Expert-led content',
            description: `Working with partners and subject matter experts to
              draw out their ideas and communicate them clearly, credibly and
              in their own voice.`,
          },
          {
            title: 'Consistent delivery',
            description: `Providing the experienced support needed to keep
              content and campaigns moving when internal teams are stretched.`,
          },
        ],
      },
      {
        heading: 'Experience',
        paragraphs: [
          `For more than 15 years, I've worked with consulting firms in the UK
           and North America, becoming a trusted extension of marketing teams,
           senior leaders, consultants and subject matter experts.`,
        ],
        items: [
          {
            title: 'Maine Pointe',
            description: `For six years, I worked with the global marketing
              team of a leading supply chain and operations consulting firm,
              helping develop a distinctive brand voice and thought leadership
              programme. I translated complex supply chain expertise into
              articles, campaigns and client-facing content during a period of
              significant growth that culminated in the firm's acquisition by
              private equity.`,
          },
          {
            title: 'JMJ Associates',
            description: `Embedded within the marketing team for five years, I
              developed thought leadership, campaigns and executive
              communications for a global consultancy specialising in
              leadership, safety and organisational performance.`,
          },
          {
            title: 'Multi-company consulting group',
            description: `I currently work as part of the fractional marketing
              team for a newly formed consulting group bringing together eight
              specialist businesses across procurement, supply chain,
              commercial and organisational transformation. My role includes
              helping define a coherent group narrative while maintaining the
              specialist positioning and identity of each individual company,
              alongside developing thought leadership, campaigns and executive
              content.`,
          },
          {
            title: 'Global operational transformation consultancy',
            description: `I provide thought leadership, website content and
              strategic messaging for an international operational
              transformation consultancy under NDA.`,
          },
        ],
      },
      {
        heading: 'How we work together',
        paragraphs: [
          `Every engagement is different, but the objective is always the
           same: turning expertise into marketing that supports growth.`,
        ],
        items: [
          {
            title: 'Discover',
            description: `Identify the opportunities hidden within your
              expertise.`,
          },
          {
            title: 'Shape',
            description: `Develop a distinctive point of view.`,
          },
          {
            title: 'Develop',
            description: `Create connected thought leadership and campaigns.`,
          },
          {
            title: 'Grow',
            description: `Keep your expertise visible, relevant and
              commercially valuable.`,
          },
        ],
      },
      {
        heading: 'Intelligent use of AI',
        paragraphs: [
          `Many of the consulting firms I work with, and the clients they
           serve, are already exploring how AI can improve the way they
           operate. Marketing should be no different.`,
          `I use AI to support research, test different angles and accelerate
           parts of the drafting process. This creates more time for the work
           that adds real value: understanding your business, drawing out the
           strongest thinking from your experts and shaping it into
           distinctive, commercially relevant marketing.`,
          `The final work is never generic or simply generated by a tool.
           Every piece is grounded in your experts' knowledge, shaped by human
           judgement and refined to reflect your firm's voice, point of view
           and commercial priorities.`,
        ],
      },
      {
        heading: 'Get in touch',
        paragraphs: [
          `Whether you're looking to develop a thought leadership programme,
           strengthen your market positioning or add experienced marketing
           capability to your team, I'd be delighted to have a conversation.`,
          `Let's discuss how we can turn your firm's expertise into marketing
           that supports business development and growth.`,
        ],
      },
    ],
  },

  // Social profiles. Set any of these to null to hide that icon.
  social: {
    linkedin: null, // e.g. 'https://www.linkedin.com/in/yourname'
    github: null, // e.g. 'https://github.com/yourname'
    twitter: null, // e.g. 'https://twitter.com/yourname'
  },
}
