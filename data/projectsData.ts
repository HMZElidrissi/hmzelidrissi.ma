interface Project {
  title: string
  description: string
  tasks?: string[]
  href?: string
  imgSrc?: string
  technos?: string[]
}

const projectsData: Project[] = [
  {
    title: 'Mobdie Kids',
    description: `A comprehensive school management system that enhanced communication between the center, parents, and students, while optimizing Mobdie's internal activity management.`,
    tasks: [
      'Implemented management features such as client management, scheduling, payments, offers, and events, with distinct administrative and client interfaces.',
      'Developed interactive features like a live chat, a forum for parents, and an email/SMS notification system.',
      'Integrated Chart.js for data visualization and reporting.',
    ],
    imgSrc: '/static/images/projects/mobdie.jpg',
    technos: ['Laravel', 'Livewire', 'Tailwind CSS', 'Chart.js', 'MySQL.'],
    href: 'https://mobdie.ma/',
  },
  {
    title: 'Evento',
    description: `A platform that allows users to create, manage, and participate in events, with a focus on user experience and performance.`,
    tasks: [
      'Implemented authentication and authorization features using JWT (JSON Web Tokens).',
      'Developed management features such as categories management, events management, registration, and participation.',
      'Implemented Ticket generation as a PDF.',
    ],
    imgSrc: '/static/images/projects/evento.png',
    technos: ['Laravel', 'React', 'Vite.js', 'Tailwind CSS', 'PostgreSQL'],
    href: 'https://github.com/HMZElidrissi/Evento-API',
  },
  {
    title: 'tabaro3',
    description: `A platform that connects blood donors with patients in need of blood transfusions, and helps associations manage their blood donation campaigns.`,
    tasks: [
      'Implemented a donor registration system and a search engine for donors.',
      'Developed a system for associations to manage their campaigns and donations.',
      'Developed a feature that allows users to post announcements when they need blood, thus facilitating direct communication between donors and patients.',
      'Implemented a notification system for donors that meet the criteria of a patient in need, also notifications with campaigns at their location.',
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
    href: 'https://tabaro3.vercel.app/',
  },
  {
    title: 'Moroccan Resume Parser',
    description: `Moroccan Resume Parser is a customized tool for parsing resumes specifically tailored to the Moroccan job market. It is built upon the pyresparser library with specific adjustments to handle Moroccan education, job titles, and other relevant details.`,
    imgSrc: '/static/images/projects/resume.png',
    technos: ['Python'],
    href: 'https://github.com/HMZElidrissi/moroccan_resume_parser',
  },
]

export default projectsData
