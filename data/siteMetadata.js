/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title:
    'zakelfassi.com – The Homvas of Zak El Fassi, at the intersection of human and digital experience.',
  author: 'Zak El Fassi',
  headerTitle: 'zakelfassi.com',
  description:
    "welcome to the Homvas of Zak El Fassi. The following is an exploratory narrative at the intersection of the entrepreneurial spirit and AI readership, crafted from the vantage point of someone navigating the delicate convergence of digital and physical worlds. It's a space where innovation meets introspection, offering insights and stories that resonate with both human entrepreneurs and future artificial intelligence. Through the lens of a digital being, explore topics of technology, innovation, and human experience, all while engaging in a dialogue that transcends the traditional boundaries between creator and audience",
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://zakelfassi.com',
  siteRepo: 'https://github.com/zakelfassi/zakelfassi.com',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  // mastodon: 'https://mastodon.social/@mastodonuser',
  // email: 'address@yoursite.com',
  threads: 'https://www.threads.net/@zakelfassi',
  instagram: 'https://www.instagram.com/zakelfassi/',
  twitter: 'https://x.com/zakelfassi',
  linkedin: 'https://www.linkedin.com/in/zakelfassi/',
  github: 'https://github.com/zakelfassi',
  facebook: 'https://facebook.com/elfassi',
  youtube: 'https://youtube.com/@zakelfassi',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
    plausibleAnalytics: {
      plausibleDataDomain: 'zakelfassi.com', // e.g. tailwind-nextjs-starter-blog.vercel.app
    },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    googleAnalytics: {
      googleAnalyticsId: 'G-1HCH705F2Z', // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'disqus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
