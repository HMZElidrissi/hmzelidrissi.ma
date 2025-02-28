interface Project {
  title: string
  description: string
  tasks?: string[]
  blog?: string
  github?: string
  link?: string
  imgSrc?: string
  technologies?: string[]
}

const projectsData: Project[] = [
  {
    title: 'IVOPC - E-commerce Platform',
    description:
      'An e-commerce platform for software license sales, featuring secure payment processing, automated order management, and enhanced product visibility through Google Merchant integration.',
    tasks: [
      'SEO optimization for improved search engine ranking',
      'Architected and implemented a scalable order management system with real-time tracking',
      'Integrated secure payment processing with Stripe',
      'Automated post-payment email notifications',
      'Google Merchant integration for enhanced product visibility',
    ],
    link: 'https://ivopc.com',
    imgSrc: '/static/images/projects/ivopc.jpg',
    technologies: ['Typescript', 'React', 'Next.js', 'PostgreSQL', 'TailwindCSS', 'Stripe'],
  },
  {
    title: 'tabarro3 - Blood Donation Platform',
    description:
      'A platform aimed at raising awareness and facilitating blood donations in Morocco. The platform connects donors with recipients in need of blood transfusions, and helps associations manage their blood donation campaigns.',
    tasks: [
      'Facilitated over 1,000 successful blood donation matches and helped manage 50+ donation campaigns across Morocco.',
      'Developed a serverless Laravel application with CI/CD pipelines',
      'Implemented a matching algorithm for donors and recipients based on blood type and location',
      'Created a real-time notification system to alert potential donors',
    ],
    link: 'https://tabarro3.ma',
    github: 'https://github.com/HMZElidrissi/tabarro3',
    imgSrc: '/static/images/projects/tabaro3.svg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
  {
    title: 'Mobdie - School Management System',
    description:
      'A comprehensive school management system to streamline communication between educational center, parents, and students. The platform enhanced operational efficiency and user engagement through interactive features.',
    tasks: [
      'Increased operational efficiency by 50% and improved parent engagement rates by 75%.',
      'Developed core management features for client data, scheduling, and payments',
      'Implemented offers and events management system',
      'Created interactive features including live chat and a parents forum',
      'Developed interactive features including live chat, forum, and email/SMS notification system.',
      'Integrated data visualization and reporting using Chart.js.',
    ],
    link: 'https://mobdie.ma',
    imgSrc: '/static/images/projects/mobdie.jpg',
    technologies: ['Laravel', 'Livewire', 'Tailwind CSS', 'Chart.js', 'MySQL'],
  },
  {
    title: 'AtlasVM',
    description:
      ' AtlasVM is a distributed virtual machine capable of executing programs written in a basic programming language called AtlasPL. This project explores the challenges and benefits of distributed computing through a simplified virtual machine framework, where multiple nodes collaborate to run a program and reach consensus on the final output.',
    tasks: [
      'Designed and implemented AtlasPL, a basic programming language for the VM',
      'Created a lexer and parser for analyzing and parsing AtlasPL code',
      'Developed an interpreter for executing AtlasPL programs',
      'Built the core virtual machine component for executing interpreted code',
      'Implemented a network layer for communication between distributed nodes',
      'Designed and integrated a consensus mechanism to ensure agreement on program state across nodes',
    ],
    github: 'https://github.com/HMZElidrissi/atlas-virtual-machine',
    blog: 'https://hmzelidrissi.ma/blog/AtlasVM-Building-a-Distributed-Virtual-Machine',
    imgSrc: '/static/images/projects/atlasvm.png',
    technologies: ['Go', 'gRPC', 'Protocol Buffers', 'protobuf'],
  },
  {
    title: 'Moroccan Resume Parser',
    description: `A customized tool for parsing resumes tailored to the Moroccan job market.`,
    tasks: [
      'Adapted pyresparser library for Moroccan education and job titles.',
      'Implemented handling of Morocco-specific resume details.',
    ],
    imgSrc: '/static/images/projects/resume.png',
    technologies: ['Python'],
    github: 'https://github.com/HMZElidrissi/moroccan_resume_parser',
  },
]

export default projectsData
