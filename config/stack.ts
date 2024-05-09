import { Colors } from './colors'

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  java,
  php,
  cpp,

  // Frontend
  react,
  nextjs,

  // Backend
  laravel,
  spring,

  // Cloud
  // aws,
  // gcp,

  // Messaging
  // nats,
  // kafka,

  // Databases
  mysql,
  postgres,
  mongodb,

  // Tools
  docker,
  githubactions,
}

export const WorkStack = [
  Stack.java,
  Stack.go,
  Stack.php,
  Stack.javascript,
  Stack.typescript,
  Stack.spring,
  Stack.laravel,
  Stack.react,
  Stack.nextjs,
  Stack.mysql,
  Stack.postgres,
  Stack.mongodb,
  Stack.docker,
  Stack.githubactions,
  Stack.cpp,
]

type StackInfoMap = {
  value: string
  color: string
}

// @ts-ignore
export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.java]: {
    value: 'Java',
    color: Colors.java,
  },
  [Stack.go]: {
    value: 'Go',
    color: Colors.go,
  },
  [Stack.php]: {
    value: 'PHP',
    color: Colors.php,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.spring]: {
    value: 'Spring Ecosystem',
    color: Colors.spring,
  },
  [Stack.laravel]: {
    value: 'Laravel',
    color: Colors.laravel,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.nextjs]: {
    value: 'Next.js',
    color: Colors.nextjs,
  },
  [Stack.mysql]: {
    value: 'MySQL',
    color: Colors.mysql,
  },
  [Stack.postgres]: {
    value: 'PostgreSQL',
    color: Colors.postgres,
  },
  [Stack.mongodb]: {
    value: 'MongoDB',
    color: Colors.mongodb,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.githubactions]: {
    value: 'GitHub Actions',
    color: Colors.githubactions,
  },
  [Stack.cpp]: {
    value: 'C/C++',
    color: Colors.cpp,
  },
}
