export const Colors = {
  // Languages
  go: "#00ADD8",
  java: "#007396",
  cpp: "#00599C",
  php: "#8892be",
  python: "#4B8BBE",
  typescript: "#234A84",
  javascript: "#F7DF1E",

  // Frontend
  web: "#2D2D2D",
  react: "#61DAF6",
  nextjs: "#000000",

  // Backend
  spring: "#6DB33F",
  laravel: "#FF2D20",
  graphql: "#E535AB",
  node: "#68A063",
  django: "#092E20",

  // Databases
  mysql: "#4479A1",
  postgres: "#336791",
  mongodb: "#4DB33D",
  redis: "#D82C20",

  // Messaging
  nats: "#199bfc",
  kafka: "#000000",

  // DevOps
  docker: "#0DB7Ed",
  kubernetes: "#326CE5",
  helm: "#0F1689",
  rancher: "#22A7F0",
  gitlabci: "#FC6D26",
  argocd: "#E60067",
  jenkins: "#D24939",
  githubactions: "#2088FF",
} as const;

export type ColorKey = keyof typeof Colors;
