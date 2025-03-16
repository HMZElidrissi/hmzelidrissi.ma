interface Project {
  title: string
  description: string
  blog?: string
  github?: string
  link?: string
  imgSrc?: string
  technologies?: string[]
}

const projectsData: Project[] = [
  {
    title: 'MailFlow - Email Marketing Platform',
    description:
      'A microservices-based email marketing platform focused on campaign management and contact organization. MailFlow allows users to create contacts with specific tags, design campaigns with trigger tags and email templates, and automatically sends emails when a contact matches campaign criteria.',
    github: 'https://github.com/HMZElidrissi/mailflow',
    imgSrc: '/static/images/projects/mailflow.png',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'Spring Security',
      'Microservices',
      'React',
      'Redux',
      'PostgreSQL',
      'Docker',
      'Keycloak',
      'TailwindCSS',
    ],
  },
  {
    title: 'tabarro3 - Blood Donation Platform',
    description:
      'A platform aimed at raising awareness and facilitating blood donations in Morocco. The platform connects donors with recipients in need of blood transfusions, and helps associations manage their blood donation campaigns.',
    link: 'https://tabarro3.ma',
    github: 'https://github.com/HMZElidrissi/tabarro3',
    imgSrc: '/static/images/projects/tabaro3.svg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
  {
    title: 'IVOPC - E-commerce Platform',
    description:
      'An e-commerce platform for software license sales, featuring secure payment processing, automated order management, and enhanced product visibility through Google Merchant integration.',
    link: 'https://ivopc.com',
    imgSrc: '/static/images/projects/ivopc.png',
    technologies: ['Typescript', 'React', 'Next.js', 'PostgreSQL', 'TailwindCSS', 'Stripe'],
  },
  {
    title: 'Mobdie - School Management System',
    description:
      'A comprehensive school management system to streamline communication between educational center, parents, and students. The platform enhanced operational efficiency and user engagement through interactive features.',
    link: 'https://mobdie.ma',
    imgSrc: '/static/images/projects/mobdie.jpg',
    technologies: ['Laravel', 'Livewire', 'Tailwind CSS', 'Chart.js', 'MySQL'],
  },
  {
    title: 'Bank Management System',
    description:
      'A comprehensive banking application with role-based access control, featuring account management, transaction processing with Elasticsearch search capabilities, loan management, and invoice systems. The application implements security using Spring Security with JWT authentication and maintains a clean architecture with CI/CD pipelines for deployment using Jenkins and Docker.',
    github: 'https://github.com/HMZElidrissi/bank-management-system',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Angular',
      'Elasticsearch',
      'Jenkins',
      'PostgreSQL',
      'Docker',
      'TailwindCSS',
      'TypeScript',
    ],
  },
  {
    title: 'AtlasVM',
    description:
      ' AtlasVM is a distributed virtual machine capable of executing programs written in a basic programming language called AtlasPL. This project explores the challenges and benefits of distributed computing through a simplified virtual machine framework, where multiple nodes collaborate to run a program and reach consensus on the final output.',
    github: 'https://github.com/HMZElidrissi/atlas-virtual-machine',
    blog: 'https://hmzelidrissi.ma/blog/AtlasVM-Building-a-Distributed-Virtual-Machine',
    imgSrc: '/static/images/projects/atlasvm.png',
    technologies: ['Go', 'gRPC', 'Protocol Buffers', 'protobuf'],
  },
  {
    title: 'Moroccan Resume Parser',
    description: `A customized tool for parsing resumes tailored to the Moroccan job market.`,
    imgSrc: '/static/images/projects/resume.png',
    technologies: ['Python'],
    github: 'https://github.com/HMZElidrissi/moroccan_resume_parser',
  },
]

export default projectsData
