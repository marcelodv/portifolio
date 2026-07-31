export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string | null;
  /** Rótulo já formatado — evita depender de locale no render. */
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Hypeone",
    role: "Front-End Developer",
    location: "Hortolândia, SP",
    start: "2024-08",
    end: null,
    period: "ago 2024 — atual",
    summary:
      "Front-end de aplicações React/Next.js e das interfaces conversacionais do produto.",
    highlights: [
      "Componentes e páginas em aplicações React e Next.js.",
      "Manutenção de dashboards complexos em Next.js.",
      "Criação e manutenção de chatbots para Messenger, WhatsApp e LiveChat.",
      "Design System interno em React sobre Ant Design, com Storybook, testes de acessibilidade e versionamento por Changesets.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Ant Design", "Storybook"],
  },
  {
    company: "Circular Brain",
    role: "Full-Stack Developer",
    location: "Hortolândia, SP",
    start: "2025-01",
    end: "2025-12",
    period: "jan 2025 — dez 2025",
    summary:
      "Desenvolvimento full-stack em implementações de alta complexidade.",
    highlights: [
      "Atuação em implementações complexas do produto.",
      "Manutenção de aplicações React.",
      "Novas features e manutenção no back-end em Node.js.",
    ],
    stack: ["React", "Node.js", "JavaScript"],
  },
  {
    company: "IBM Brasil",
    role: "Software Developer",
    location: "Hortolândia, SP",
    start: "2021-09",
    end: "2024-07",
    period: "set 2021 — jul 2024",
    summary:
      "Modernização de uma plataforma legada: front-end, back-end e a infraestrutura embaixo dela.",
    highlights: [
      "Refatoração de aplicação VueJS 2.7 (fora de suporte) para React com Carbon Design System.",
      "Migração de back-end monolítico em Java (Spring Boot) para arquitetura de microsserviços em Node.js.",
      "Migração de clusters Kubernetes para Red Hat OpenShift.",
      "Tratamento de vulnerabilidades OSS, SAST, IAST e DAST.",
    ],
    stack: [
      "React",
      "VueJS",
      "Node.js",
      "Java / Spring Boot",
      "Kubernetes",
      "OpenShift",
    ],
  },
  {
    company: "IBM Brasil",
    role: "Software Developer Intern",
    location: "Hortolândia, SP",
    start: "2020-12",
    end: "2021-09",
    period: "dez 2020 — set 2021",
    summary:
      "Entrada na área — e o primeiro projeto com impacto medido em dias de trabalho economizados.",
    highlights: [
      "Desenvolvi uma aplicação de automação de testes unitários e regressivos com Cypress, Jest, Shell Script e Cron Jobs — reduzindo dias de execução manual para 1 hora automatizada.",
      "Requisitos de front-end e back-end de média complexidade.",
    ],
    stack: ["Cypress", "Jest", "Shell Script", "JavaScript"],
  },
];

export type Education = {
  institution: string;
  degree: string;
  location: string;
  date: string;
};

export const education: Education[] = [
  {
    institution: "Universidade Anhembi Morumbi",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    location: "Hortolândia, SP",
    date: "Concluído em jan 2023",
  },
  {
    institution: "ETEC Hortolândia",
    degree: "Técnico em Desenvolvimento de Sistemas",
    location: "Hortolândia, SP",
    date: "Concluído em jun 2020",
  },
];

export const certifications = [
  {
    name: "Developer Professional L-1",
    issuer: "IBM",
    date: "jun 2023",
  },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário" },
];
