export type ProjectKind = "produto" | "cliente" | "corporativo" | "conceito";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  /** Frase de uma linha para o card na listagem. */
  summary: string;
  kind: ProjectKind;
  year: string;
  role: string;
  featured: boolean;
  liveUrl?: string;
  repoUrl?: string;
  /** Aviso exibido no topo do case, quando o contexto exige ressalva. */
  disclaimer?: string;
  stack: string[];
  /** O case em si: problema → decisões → resultado. */
  problem: string;
  approach: { title: string; body: string }[];
  outcome: string[];
};

export const projects: Project[] = [
  {
    slug: "stream-trophy",
    name: "Stream Trophy",
    tagline: "SaaS de vitrine de troféus da PlayStation Network",
    summary:
      "Produto próprio: dashboard público de troféus PSN, com assinatura, cache e cobrança via Stripe.",
    kind: "produto",
    year: "2025—2026",
    role: "Produto, design e engenharia — sozinho",
    featured: true,
    liveUrl: "https://streamtrophy.com/",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "Auth.js",
      "Stripe",
      "Redis",
      "Resend",
      "Tailwind v4",
    ],
    problem:
      "Jogadores de PlayStation não têm uma forma bonita e pública de mostrar a própria coleção de troféus — " +
      "o perfil nativo da Sony é fechado e feio de compartilhar. A API da PSN, por sua vez, não é pública: " +
      "exige o cookie de uma conta autenticada, que jamais pode vazar para o navegador.",
    approach: [
      {
        title: "Um app só, backend nas Route Handlers",
        body:
          "Sem serviço separado: as Route Handlers do App Router fazem o papel de backend. " +
          "O token da conta de serviço vive apenas no servidor e nunca é enviado ao cliente — " +
          "o browser só conversa com a minha API, nunca com a Sony.",
      },
      {
        title: "Cache antes de escalar",
        body:
          "Cada perfil é cacheado por 60 minutos no Redis, e o botão de forçar atualização " +
          "tem rate limit de 1 chamada a cada 15 minutos por IP. Isso mantém o consumo da " +
          "API de origem previsível mesmo se um perfil viralizar.",
      },
      {
        title: "Assinatura de verdade, não um botão falso",
        body:
          "Stripe para planos e cobrança recorrente, Auth.js com adapter Drizzle para sessão, " +
          "Postgres para estado e Resend com React Email para os transacionais. " +
          "É o ciclo completo de um SaaS, não um protótipo.",
      },
      {
        title: "Falhar de forma legível",
        body:
          "Perfil inexistente, perfil privado e API fora do ar são três problemas diferentes " +
          "e recebem três telas diferentes (404, 403, 503). O usuário sempre sabe se o erro é dele ou meu.",
      },
    ],
    outcome: [
      "Produto no ar em domínio próprio, com assinatura ativa.",
      "Galeria responsiva de 1 a 5 colunas com destaque visual para platinas e 100%.",
      "Dark mode com paleta PlayStation e skeleton screens durante o carregamento.",
      "Nenhuma credencial de terceiro exposta ao cliente.",
    ],
  },
  {
    slug: "upgrade-news",
    name: "Upgrade News",
    tagline: "Portal de notícias de games e guias de troféus",
    summary:
      "Portal editorial com CMS próprio, login social, editor rich text e push notifications.",
    kind: "produto",
    year: "2025—2026",
    role: "Arquitetura e desenvolvimento full-stack",
    featured: true,
    liveUrl: "https://www.programaupgrade.com.br/",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "TipTap",
      "Vercel Blob",
      "Web Push",
      "Zod",
    ],
    problem:
      "O grupo Upgrade produzia conteúdo de games e guias de troféus sem casa própria — " +
      "dependia de redes sociais para publicar e não tinha nenhuma relação direta com o leitor. " +
      "Adotar um CMS pronto significaria pagar licença e ficar preso ao modelo de conteúdo dele.",
    approach: [
      {
        title: "CMS sob medida em vez de plataforma alugada",
        body:
          "Editor rich text com TipTap — imagem, link, embed de YouTube e de tweets — " +
          "e upload direto para o Vercel Blob. O modelo de conteúdo é o do produto, não o de um CMS genérico.",
      },
      {
        title: "Login onde o público já está",
        body:
          "Auth.js com Google, Discord e Twitch. O leitor de games já tem essas contas; " +
          "pedir cadastro com senha seria fricção desnecessária.",
      },
      {
        title: "Canal direto com o leitor",
        body:
          "Web Push nativo para avisar sobre novas publicações, sem depender do alcance de rede social.",
      },
      {
        title: "Validação na fronteira",
        body:
          "Zod em toda entrada de dados e Prisma como camada de acesso, " +
          "com Postgres em Docker no desenvolvimento e gerenciado em produção.",
      },
    ],
    outcome: [
      "Portal no ar em domínio próprio, com redação publicando sem depender de desenvolvedor.",
      "Documentação de produto e arquitetura versionada junto do código, incluindo protótipo navegável.",
      "Stack Vercel-nativa: um único deploy cobre site, API e mídia.",
    ],
  },
  {
    slug: "vanessa-santana-advocacia",
    name: "Vanessa Santana Advocacia",
    tagline: "Site institucional para escritório de execução penal",
    summary:
      "Institucional com blog em Markdown, 30 serviços mapeados, SEO técnico e conformidade com a LGPD.",
    kind: "cliente",
    year: "2025",
    role: "Projeto, desenvolvimento e publicação",
    featured: true,
    liveUrl: "https://www.vanessasantanaadv.com.br/",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Markdown",
      "Tailwind CSS",
      "Vercel",
    ],
    problem:
      "Um escritório de advocacia especializado em execução penal precisa ser encontrado por " +
      "familiares em situação de urgência, que pesquisam por termos muito específicos. " +
      "Publicidade advocatícia, porém, é regulada — o site precisa gerar confiança sem prometer resultado.",
    approach: [
      {
        title: "Conteúdo como canal de aquisição",
        body:
          "Artigos em Markdown com frontmatter, renderizados em rota dinâmica. " +
          "A advogada publica editando um arquivo de texto — sem painel, sem banco, sem custo mensal.",
      },
      {
        title: "Serviço explicado por etapa",
        body:
          "Os 30 serviços do escritório foram organizados em três etapas do processo de execução penal, " +
          "para que o visitante encontre onde ele está em vez de precisar conhecer o nome jurídico do pedido.",
      },
      {
        title: "SEO técnico desde o início",
        body:
          "Sitemap e robots gerados em build, metadata por página e páginas estáticas — " +
          "que é o que importa para ranquear em busca local.",
      },
      {
        title: "LGPD e conversão",
        body:
          "Formulário de contato que desemboca no WhatsApp, com aviso de tratamento de dados " +
          "e política de privacidade dedicada.",
      },
    ],
    outcome: [
      "Site no ar em domínio próprio, com Vercel Analytics e Speed Insights.",
      "Publicação de novo artigo sem envolver desenvolvedor.",
      "Configuração de contato, OAB e WhatsApp centralizada em um único arquivo.",
    ],
  },
  {
    slug: "vitrine-montadora",
    name: "Vitrine — Montadora de Móveis",
    tagline: "Landing de conversão com zero dependências de runtime",
    summary:
      "Exercício de disciplina técnica: landing inteira pré-renderizada, sem backend e sem uma única lib além do React.",
    kind: "conceito",
    year: "2026",
    role: "Projeto e desenvolvimento",
    featured: false,
    liveUrl: "https://montadora-moveis.vercel.app/",
    disclaimer:
      "Versão de validação. Nome, endereço, depoimentos e números são fictícios — " +
      "é uma demonstração de arquitetura, não um cliente real.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4"],
    problem:
      "Landing de captação para um serviço local, onde todo o tráfego converge para o WhatsApp. " +
      "Não há login, banco nem área logada — e a pergunta era quanto dá para entregar " +
      "sem adicionar nenhuma dependência.",
    approach: [
      {
        title: "Três dependências, ponto final",
        body:
          "next, react e react-dom. Nada de biblioteca de animação, de ícone ou de carrossel — " +
          "cada uma dessas seria peso permanente no bundle em troca de um efeito.",
      },
      {
        title: "Animação com a plataforma",
        body:
          "IntersectionObserver + CSS para as revelações em scroll. " +
          "A API do navegador já resolve, e o custo é zero KB.",
      },
      {
        title: "Tudo pré-renderizado",
        body:
          "Todas as rotas são estáticas e as fontes são auto-hospedadas via next/font — " +
          "sem requisição a terceiros no carregamento.",
      },
    ],
    outcome: [
      "Bundle mínimo e carregamento praticamente instantâneo.",
      "Checklist do que trocar antes de publicar versionado junto do código.",
      "Demonstra que a stack pesada nem sempre é necessária — decidir não instalar também é decisão de arquitetura.",
    ],
  },
  {
    slug: "design-system",
    name: "Design System corporativo",
    tagline: "Biblioteca React sobre Ant Design, publicada como pacote",
    summary:
      "Componentes reutilizáveis com Storybook, testes automatizados de acessibilidade e release por Changesets.",
    kind: "corporativo",
    year: "2025—2026",
    role: "Desenvolvimento e documentação",
    featured: true,
    disclaimer:
      "Projeto corporativo — código-fonte privado. Descrito aqui apenas em termos de arquitetura e processo.",
    stack: [
      "React 19",
      "TypeScript",
      "Ant Design",
      "Storybook",
      "Vitest",
      "jest-axe",
      "tsup",
      "Changesets",
    ],
    problem:
      "Vários times construindo telas parecidas sobre a mesma base de Ant Design, " +
      "cada um resolvendo tabela, filtro e layout do seu jeito. O resultado é divergência visual, " +
      "retrabalho e acessibilidade tratada como item de final de sprint — quando é tratada.",
    approach: [
      {
        title: "Componentes de alto nível, não wrappers",
        body:
          "Em vez de reembalar botão e input, a biblioteca entrega as peças que realmente se repetem: " +
          "tabela de dados, barra de filtros e ações, e o shell da aplicação.",
      },
      {
        title: "Acessibilidade verificada em CI",
        body:
          "Suíte dedicada com Vitest, Testing Library e jest-axe, mais o addon de a11y no Storybook " +
          "e um checklist versionado. Regressão de acessibilidade quebra o build.",
      },
      {
        title: "Documentação que decide, não só descreve",
        body:
          "Além do Storybook, um guia de decisão (quando usar, quando não usar, do/don't, " +
          "composição, espaçamento, microcopy) e exemplos por domínio. " +
          "A dúvida do consumidor costuma ser 'qual componente', não 'quais props'.",
      },
      {
        title: "Distribuição como pacote real",
        body:
          "Build dual ESM/CJS com tipos via tsup, peer dependencies para não duplicar React ou antd, " +
          "e versionamento semântico automatizado com Changesets.",
      },
    ],
    outcome: [
      "Pacote instalável, versionado e com changelog gerado a cada release.",
      "Acessibilidade como porta de entrada automatizada, não revisão manual.",
      "Menos tempo por tela nova nos times consumidores.",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const kindLabels: Record<ProjectKind, string> = {
  produto: "Produto próprio",
  cliente: "Cliente",
  corporativo: "Corporativo",
  conceito: "Conceito",
};
