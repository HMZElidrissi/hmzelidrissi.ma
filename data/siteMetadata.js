/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title:
    'hmzelidrissi.ma – A developer who aims to evolve, innovate, and inspire through technology.',
  author: 'Hamza EL IDRISSI',
  headerTitle: 'hmzelidrissi.ma',
  description:
    'hmzelidrissi.ma – A developer who aims to evolve, innovate, and inspire through technology.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://hmzelidrissi.ma',
  siteRepo: 'https://github.com/HMZElidrissi/hmzelidrissi.ma',
  siteLogo: '/static/images/logo.svg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'hamza.ezzharelidrissi1@gmail.com',
  github: 'https://github.com/HMZElidrissi',
  twitter: 'https://x.com/HMZElidrissi',
  linkedin: 'https://www.linkedin.com/in/hmzelidrissi',
  spotify: 'https://open.spotify.com/user/offnvr16bsi0bvnpkrel36eyi',
  locale: 'en-US',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
