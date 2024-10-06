interface Project {
  title: string
  description: string
  tasks?: string[]
  blog?: string
  github?: string
  link?: string
  imgSrc?: string
  technos?: string[]
}

const projectsData: Project[] = [
  {
    title: 'Mobdie Kids',
    description: `A comprehensive school management system enhancing communication and optimizing internal activity management.`,
    tasks: [
      'Implemented management features with distinct administrative and client interfaces.',
      'Implemented payment, scheduling, offers, and events management.',
      'Developed interactive features including live chat, forum, and email/SMS notification system.',
      'Integrated data visualization and reporting using Chart.js.',
    ],
    imgSrc: '/static/images/projects/mobdie.jpg',
    technos: ['Laravel', 'Livewire', 'Tailwind CSS', 'Chart.js', 'MySQL'],
    link: 'https://mobdie.ma/',
  },
  {
    title: 'Evento',
    description: `An event management platform focusing on user experience and performance.`,
    tasks: [
      'Implemented JWT-based authentication and authorization.',
      'Developed comprehensive event management features.',
      'Created PDF ticket generation functionality.',
    ],
    imgSrc: '/static/images/projects/evento.png',
    technos: ['Laravel', 'React', 'Vite.js', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/HMZElidrissi/Evento-API',
  },
  {
    title: 'tabaro3',
    description: `A platform that connects blood donors with patients in need of blood transfusions, and helps associations manage their blood donation campaigns.`,
    tasks: [
      'Built donor registration and search system.',
      'Developed campaign and donation management for associations.',
      'Implemented features for direct donor-patient communication and smart notifications like announcements and campaigns.',
      'Built CI/CD pipelines with GitHub Actions, and deployed laravel app to Vercel using serverless functions.',
    ],
    imgSrc: '/static/images/projects/tabaro3.svg',
    technos: [
      'Laravel',
      'Next.js',
      'Tailwind CSS',
      'Supabase',
      'next-auth',
      'Vercel',
      'GitHub Actions',
    ],
    link: 'https://tabaro3.vercel.app/',
  },
  {
    title: 'Moroccan Resume Parser',
    description: `A customized tool for parsing resumes tailored to the Moroccan job market.`,
    tasks: [
      'Adapted pyresparser library for Moroccan education and job titles.',
      'Implemented handling of Morocco-specific resume details.',
    ],
    imgSrc: '/static/images/projects/resume.png',
    technos: ['Python'],
    github: 'https://github.com/HMZElidrissi/moroccan_resume_parser',
  },
]

export default projectsData
