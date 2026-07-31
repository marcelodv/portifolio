# Portfólio — Marcelo Santos / Santos Code

Site de portfólio com duas portas de entrada: contratar **uma pessoa**
(desenvolvedor) ou contratar **um projeto** (Santos Code). Uma home só, com o
visitante se identificando logo abaixo do hero.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Linguagem | TypeScript (strict) |
| CSS | Tailwind CSS v4 — tokens em CSS puro, sem `tailwind.config` |
| Fontes | Inter + JetBrains Mono, auto-hospedadas via `next/font` |
| Animação | IntersectionObserver + CSS — sem biblioteca |
| Hospedagem | Vercel — todas as rotas pré-renderizadas |

Dependências de runtime: `next`, `react`, `react-dom`. Só isso.

## Rodando

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build && npm start
npm run lint
npm run type-check
```

## Estrutura

```text
src/
  app/
    page.tsx              # Home — hero, personas, destaques, trajetória, CTA
    projetos/             # Listagem + [slug] (case: problema → decisões → resultado)
    sobre/                # Trajetória, skills, formação
    contato/              # Canais diretos (sem backend)
    sitemap.ts robots.ts  # SEO
    opengraph-image.tsx   # OG 1200×630 gerada em build
    icon.tsx              # Favicon gerado em build
    globals.css           # ⚙️ TOKENS — cores, tema claro/escuro, utilities
  components/             # header, footer, cards, primitivos de UI
  content/                # ⚙️ CONTEÚDO — editar aqui, não nos componentes
    site.ts               #   contato, domínio, links, as duas personas
    projects.ts           #   os cases
    experience.ts         #   experiência, formação, certificações
    skills.ts             #   ferramentas e números da home
```

**Toda edição de conteúdo acontece em `src/content/`.** Os componentes só
renderizam — nenhum deles hardcoda texto de negócio, link ou dado de contato.

### Adicionar um projeto

Acrescente um item em [`src/content/projects.ts`](src/content/projects.ts). A
rota, o sitemap, o card na listagem e a navegação "próximo projeto" saem de
graça — `generateStaticParams` lê a mesma lista.

Campos que mudam comportamento:

- `featured: true` — aparece nos destaques da home.
- `disclaimer` — exibe um aviso no topo do case. Use em projeto de conceito
  com dados fictícios ou em trabalho corporativo com código privado.
- `liveUrl` ausente — o botão "Abrir o projeto" não é renderizado.

## Antes de publicar

- [ ] Trocar `site.url` em [`src/content/site.ts`](src/content/site.ts) pelo
      domínio final — `metadataBase`, sitemap, robots e OG dependem dele.
- [ ] Confirmar as datas de Hypeone e Circular Brain em
      [`src/content/experience.ts`](src/content/experience.ts): os períodos do
      currículo se sobrepõem (ago/2024–atual e jan/2025–dez/2025).
- [ ] Confirmar se o Design System corporativo pode ser exibido publicamente.
      O case descreve só arquitetura e processo, sem código nem regra de
      negócio — mas a decisão é do empregador.
- [ ] Se for publicar o PDF do currículo, gerar uma versão **sem telefone
      pessoal** e colocá-la em `public/`. O `.gitignore` mantém os arquivos
      originais fora do repositório de propósito.

## Decisões que valem explicar

**Tema sem `next-themes`.** Um script inline no `layout.tsx` aplica a classe
`dark` antes da primeira pintura (sem FOUC), e o `ThemeToggle` lê essa classe
via `useSyncExternalStore` em vez de duplicar o estado no React. O DOM é a
fonte da verdade.

**Nenhuma lib de animação.** As revelações em scroll usam
`IntersectionObserver` + duas classes CSS. Um `<noscript>` força tudo visível
se o JS não rodar — conteúdo escondido por falha de script é conteúdo perdido.

**`npm audit` reporta avisos de dev.** `npm audit --omit=dev` retorna zero — o
que sobra é `brace-expansion` sob o eslint. A única versão corrigida (5.0.8+)
mudou o formato de export e quebra o `minimatch@3` de que o eslint depende, e
o vetor (glob com padrão hostil, em build local) não existe aqui. Os
`overrides` no `package.json` cobrem os casos que *têm* correção compatível
(`postcss`, `sharp`).

**Sem formulário de contato.** Um form exigiria backend, antispam e
tratamento de dados sob LGPD para entregar o que um `mailto:` já entrega. A
página de contato mostra os canais diretos e o que incluir na mensagem.
