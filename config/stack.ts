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

  // DevOps
  docker,
  githubactions,
  jenkins,
  gitlabci,
  argocd,
  kubernetes,
  helm,
  rancher,
}

export const WorkStack = [
  Stack.kubernetes,
  Stack.helm,
  Stack.go,
  Stack.argocd,
  Stack.jenkins,
  Stack.gitlabci,
  Stack.rancher,
  Stack.docker,
  Stack.java,
  Stack.typescript,
  Stack.spring_boot,
  Stack.spring_cloud,
  Stack.react,
  Stack.nextjs,
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
  [Stack.gitlabci]: {
    value: 'GitLab CI',
    color: Colors.gitlabci,
  },
  [Stack.argocd]: {
    value: 'ArgoCD',
    color: Colors.argocd,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.helm]: {
    value: 'Helm',
    color: Colors.helm,
  },
  [Stack.rancher]: {
    value: 'Rancher',
    color: Colors.rancher,
  },
}
