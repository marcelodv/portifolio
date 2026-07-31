export type SkillGroup = {
  title: string;
  /** `core` marca o que é usado no dia a dia, hoje — renderizado em destaque. */
  items: { name: string; core?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    items: [
      { name: "TypeScript", core: true },
      { name: "React", core: true },
      { name: "Next.js (App Router)", core: true },
      { name: "Tailwind CSS", core: true },
      { name: "JavaScript" },
      { name: "VueJS" },
      { name: "Micro Front-end" },
      { name: "Ant Design" },
      { name: "Carbon Design System" },
      { name: "Sass / CSS" },
      { name: "Figma" },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js", core: true },
      { name: "Route Handlers / API REST", core: true },
      { name: "Auth.js (NextAuth)", core: true },
      { name: "Microsserviços" },
      { name: "Java / Spring Boot" },
      { name: "Stripe" },
      { name: "Zod" },
    ],
  },
  {
    title: "Dados",
    items: [
      { name: "PostgreSQL", core: true },
      { name: "Prisma", core: true },
      { name: "Drizzle ORM", core: true },
      { name: "Redis" },
      { name: "MongoDB" },
      { name: "DB2" },
      { name: "Cloudant" },
    ],
  },
  {
    title: "Infra & DevOps",
    items: [
      { name: "CI/CD", core: true },
      { name: "Docker", core: true },
      { name: "Vercel", core: true },
      { name: "Kubernetes" },
      { name: "OpenShift" },
      { name: "IBM Cloud" },
      { name: "Jenkins" },
      { name: "Travis" },
      { name: "Dynatrace" },
      { name: "Instana" },
      { name: "LogDNA" },
    ],
  },
  {
    title: "Qualidade",
    items: [
      { name: "Vitest", core: true },
      { name: "Testing Library", core: true },
      { name: "Acessibilidade (WCAG / axe)", core: true },
      { name: "Jest" },
      { name: "Cypress" },
      { name: "SAST / IAST / DAST" },
    ],
  },
];
