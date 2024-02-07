interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  type?: string
}

const projectsData: Project[] = [
  {
    title: 'TAC – The AI Coach',
    description: `Pioneering the intersection of AI and personal development, TAC (The AI Coach) offers a unique platform that empowers individuals to articulate and achieve their goals through a SMART goal-setting framework, dynamic goal visualization, and dynamic tasks and milestones. Blending cutting-edge Generative AI with an engaging user experience, TAC guides users towards realizing their full potential across various life domains—Career, Education, Finance, Wellness, and more. As a hub where technology meets human ambition, TAC is redefining personal success in the digital age.`,
    imgSrc: '/static/images/projects/TAC.png',
    href: 'https://theaicoach.com',
    type: 'Products & Companies',
  },
  {
    title: 'INK + PORCELAIN',
    description: `Artful Objects Designed by Women – An interior design and curation platform for creatives. Co-founder, advisor, and part-time technologist and designer.`,
    imgSrc: '/static/images/projects/Inkandporcelain.png',
    href: 'https://www.inkandporcelain.com',
    type: 'Products & Companies',
  },
  {
    title: 'TalkAndComment',
    description: `Designed, built, and shipped (2013) a Chrome extension and (RIP) Android app that allows you to leave voice comments anywhere on the internet. It's 2024 and it's still alive and kicking with 1M+ monthly users; and I still don't understand how.`,
    imgSrc: '/static/images/projects/TalkAndComment.png',
    href: 'https://TalkAndComment.com',
    type: 'Products & Companies',
  },
  {
    title: 'Explain AI',
    description: `Advisor and part-time designer and GTM strategist. ExplainAI is a browser extension that gives anyone reading superpowers while browsing the internet. The app offers in-context explanations and interactions using Large Language Models.`,
    imgSrc: '/static/images/projects/ExplainAI.png',
    href: 'https://xplnai.com',
    type: 'Products & Companies',
  },
  {
    title: 'Zaigood Labs',
    description: `An experimental lab supporting ideas and entrepreneurs making a difference in the world.`,
    imgSrc: '/static/images/projects/Zaigood.png',
    href: 'https://zaigood.com',
    type: 'Products & Companies',
  },
  {
    title: 'Africa Deep Tech Community',
    description: `Helping lay the groundwork for ADTC's vision of bridging the technological divide and propelling Africa into a new era of digital innovation.`,
    imgSrc: '/static/images/projects/AfricaDeepTechCommunity.png',
    href: 'https://adtc.substack.com',
    type: 'Communities',
  },
  {
    title: 'JobFinder',
    description: `(2012 – 2016) was an aggregator job search engine and talent management platform focused on the Moroccan market. JobFinder listed more than 1M jobs and was used by 100K+ job seekers throughout its lifetime.`,
    imgSrc: '/static/images/projects/JobFinder.png',
    href: '#',
    type: 'Past',
  },
  {
    title: 'Send.ma',
    description: `(2013 – 2016) was a messaging marketing platform (Email, SMS, Social, etc.) designed for the mobile age. Hundreds of clients and tens of thousands of campaigns later, Send.ma was gone – some say like the Stig, but faster; just like the platform once was.`,
    imgSrc: '/static/images/projects/send.png',
    href: '#',
    type: 'Past',
  },
  {
    title: 'Libertweet',
    description: `(2013 – 2019) was a browser extension and mobile app that allowed users to bypass Twitter's 140 character limit by creating image-based tweets. Libertweet was used by 500K+ users and was featured in major tech publications. RIP.`,
    imgSrc: '/static/images/projects/Libertweet.png',
    href: '#',
    type: 'Past',
  },
  {
    title: 'FitHeat',
    description: `(2016 – 2019) was a mobile app that coached people through 7-minute workout routines using a combination of AI-driven gamification and human voice coaching. RIP.`,
    imgSrc: '/static/images/projects/FitHeat.png',
    href: '#',
    type: 'Past',
  },
  {
    title: 'VoIP Down',
    description: `(2016) hard to explain what this is in a sentence, but it was one of my contributions to the Open Internet and to Morocco.`,
    imgSrc: '/static/images/projects/VoIPDown.png',
    href: 'https://github.com/VoIPDown/voipdown.github.io',
    type: 'Past',
  },
  {
    title: 'WannaJo.in',
    description: `(2013 – 2015) was an early physical social network experiment that allowed people to plan ad-hoc meetups with their friends. RIP (but not forgotten!)`,
    imgSrc: '/static/images/projects/WannaJo.in.png',
    href: '#',
    type: 'Past',
  },
  {
    title: 'PeaceNLol.com',
    description: `(2010 – 2013) my foray into the world of social media and online communities. RIP.`,
    imgSrc: '/static/images/projects/PeaceNLol.png',
    href: '#',
    type: 'Past',
  },
  {
    title: 'Concep.ma',
    description: `(2006 – 2012) was a product design, e-commerce, marketing, and technology consulting agency. I learned a ton, made a lot of friends (and websites), while having a lot of fun. RIP.`,
    imgSrc: '/static/images/projects/Concep.ma.png',
    href: '#',
    type: 'Past',
  },
]

export default projectsData
