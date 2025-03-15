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
  spring_boot,
  spring_cloud,

  // Cloud
  // aws,
  // gcp,

  // Messaging
  // nats,
  kafka,

  // Databases
  mysql,
  postgres,
  mongodb,

  // Tools
  docker,
  githubactions,
  jenkins,
}

export const WorkStack = [
  Stack.java,
  Stack.go,
  Stack.php,
  Stack.javascript,
  Stack.typescript,
  Stack.spring_boot,
  Stack.spring_cloud,
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
  // [Stack.go]: {
  //   value: 'Go',
  //   color: Colors.go,
  // },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.spring_boot]: {
    value: 'Spring Boot',
    color: Colors.spring,
  },
  [Stack.spring_cloud]: {
    value: 'Spring Cloud',
    color: Colors.spring,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.nextjs]: {
    value: 'Next.js',
    color: Colors.nextjs,
  },
  [Stack.postgres]: {
    value: 'PostgreSQL',
    color: Colors.postgres,
  },
  [Stack.mysql]: {
    value: 'MySQL',
    color: Colors.mysql,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.githubactions]: {
    value: 'GitHub Actions',
    color: Colors.githubactions,
  },
  [Stack.jenkins]: {
    value: 'Jenkins',
    color: Colors.jenkins,
  },
  // [Stack.cpp]: {
  //   value: 'C/C++',
  //   color: Colors.cpp,
  // },
}
