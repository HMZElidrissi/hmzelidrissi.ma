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
    description: `....`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://theaicoach.com',
    type: 'Products',
  },
  {
    title: 'INK + PORCELAIN',
    description: `....`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://www.inkandporcelain.com',
    type: 'Products',
  },
  {
    title: 'TalkAndComment',
    description: `....`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://TalkAndComment.com',
    type: 'Products',
  },
  {
    title: 'Explain AI',
    description: `....`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://xplnai.com',
    type: 'Products',
  },
  {
    title: 'Africa Deep Tech Community',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://adtc.substack.com',
    type: 'Communities',
  },
  {
    title: 'Idiot Mystic',
    description: `...`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://idiotmystic.com',
    type: 'Communities',
  },
  {
    title: 'Libertweet',
    description: `...`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '#',
    type: 'Archive',
  },
  {
    title: 'VoIP Down',
    description: `...`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '#',
    type: 'Archive',
  },
]

export default projectsData
