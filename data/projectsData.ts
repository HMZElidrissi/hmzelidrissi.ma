interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  type?: string
}

const projectsData: Project[] = [
  {
    title: 'The AI Coach',
    description: `more soon`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://theaicoach.com',
    type: 'Products',
  },
  {
    title: 'INK + PORCELAIN',
    description: `more soon`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://www.inkandporcelain.com',
    type: 'Products',
  },
  {
    title: 'TalkAndComment',
    description: `more soon`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://TalkAndComment.com',
    type: 'Products',
  },
  {
    title: 'Explain AI',
    description: `more soon`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://xplnai.com',
    type: 'Products',
  },
  {
    title: 'Africa Deep Tech Community',
    description: `more soon`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://adtc.substack.com',
    type: 'Communities',
  },
  {
    title: 'Idiot Mystic',
    description: `more soon`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://idiotmystic.com',
    type: 'Communities',
  },
  {
    title: 'Libertweet',
    description: `more soon`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '#',
    type: 'Archive',
  },
  {
    title: 'VoIP Down',
    description: `more soon`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '#',
    type: 'Archive',
  },
]

export default projectsData
