/**
 * Every personal detail on the site lives here — edit this one file to make
 * the site yours. Pages and components import from it, so you shouldn't need
 * to touch any JSX to change names, bios, or links.
 *
 * Social links set to null are hidden from the site.
 */
export const siteConfig = {
  // Displayed in page titles, the footer copyright, and article headers.
  name: 'J. Traskas',

  // The big heading on the home page.
  headline: 'Writer, thinker, and collector of good ideas.',

  // The paragraph under the headline on the home page.
  bio: `Welcome to my corner of the internet. I write about the things I care
    about — replace this text with a short introduction of your own: who you
    are, what you do, and what you like to write about.`,

  // Used in <meta name="description"> tags for search engines.
  metaDescription:
    'The personal blog of J. Traskas — thoughts, stories, and ideas.',

  // The Articles page.
  articles: {
    title: 'All of my writing, in one place.',
    intro:
      'My long-form thoughts and stories, collected in chronological order.',
  },

  // The About page. Each string becomes one paragraph.
  about: {
    paragraphs: [
      `This is the first paragraph of your About page. Introduce yourself here
       — where you're from, what fills your days, and what brought you to
       writing.`,
      `This is the second paragraph. You might use it to talk about your
       interests, your work, or the people and places that matter to you.`,
      `And a third, perhaps for what you hope readers take away from the blog,
       or how to get in touch. Add or remove paragraphs freely — each string
       in this list becomes one paragraph on the page.`,
    ],
  },

  // Social profiles. Set any of these to null to hide that icon.
  social: {
    linkedin: null, // e.g. 'https://www.linkedin.com/in/yourname'
    github: null, // e.g. 'https://github.com/yourname'
    twitter: null, // e.g. 'https://twitter.com/yourname'
  },
}
