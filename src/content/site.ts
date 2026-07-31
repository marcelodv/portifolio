/**
 * Configuração central do site. Tudo que é "dado do mundo real" (contato,
 * domínio, links) mora aqui — nenhum componente hardcoda isso.
 */

export const site = {
  name: "Marcelo Santos",
  brand: "Santos Code",
  role: "Full Stack Developer",
  location: "Hortolândia, SP — Brasil",
  /** Trocar pelo domínio final antes do deploy. */
  url: "https://santoscode.dev",
  locale: "pt-BR",
  description:
    "Full Stack Developer com 5+ anos em produto: React, Next.js e Node. " +
    "Ex-IBM. Construo aplicações que vão do zero ao ar — e continuo depois que sobem.",
  email: "mar27henry@gmail.com",
  linkedin: "https://www.linkedin.com/in/marcelodv/",
  github: "https://github.com/marcelodv",
} as const;

export const nav = [
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

/**
 * As duas portas de entrada do site. O visitante se identifica como
 * recrutador/tech lead ou como empresa buscando fornecedor, e cada trilha
 * leva a um CTA diferente.
 */
export const audiences = [
  {
    id: "clt",
    eyebrow: "Para times de produto",
    title: "Contratar como desenvolvedor",
    body:
      "Entro em times que já têm código rodando e precisam de alguém que " +
      "assuma frente própria: refatoração de legado, migração de stack e " +
      "features de ponta a ponta — sem precisar de babá.",
    bullets: [
      "React, Next.js, TypeScript e Node em produção",
      "Migração de monólito Java para microsserviços Node (IBM)",
      "Refatoração de VueJS 2.7 para React + Carbon Design System",
      "CI/CD, Docker, Kubernetes e OpenShift",
    ],
    cta: { label: "Ver experiência", href: "/sobre" },
  },
  {
    id: "santos-code",
    eyebrow: "Para empresas e negócios locais",
    title: "Contratar a Santos Code",
    body:
      "Projeto, construo e mantenho o produto digital inteiro — do wireframe " +
      "ao domínio no ar. Site institucional, landing de conversão ou SaaS " +
      "com login e cobrança: mesmo dono, do começo ao fim.",
    bullets: [
      "Sites e landing pages que convertem para WhatsApp",
      "SaaS completo: autenticação, banco, cobrança com Stripe",
      "SEO técnico, performance e acessibilidade desde o primeiro commit",
      "Deploy, monitoramento e manutenção contínua",
    ],
    cta: { label: "Falar sobre um projeto", href: "/contato" },
  },
] as const;
