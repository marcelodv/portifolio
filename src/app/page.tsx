import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import {
  ArrowIcon,
  ButtonLink,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/ui";
import { featuredProjects } from "@/content/projects";
import { stats } from "@/content/skills";
import { audiences, site } from "@/content/site";
import { experiences } from "@/content/experience";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Audiences />
      <FeaturedWork />
      <Track />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Brilho decorativo — puramente estético, fora da árvore de acessibilidade. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="container-page relative py-24 sm:py-32">
        <Reveal>
          <Eyebrow>{site.brand} · {site.location}</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl">
            Construo aplicações que vão do zero ao ar — e continuo
            responsável depois que sobem.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty sm:text-xl">
            Sou {site.name}, {site.role.toLowerCase()} há mais de 5 anos. Passei
            3 anos na IBM modernizando plataforma legada — de VueJS para React,
            de monólito Java para microsserviços Node, de Kubernetes para
            OpenShift. Hoje faço produto inteiro: front, back, banco, cobrança e
            deploy.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/projetos">
              Ver projetos
              <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/contato" variant="secondary">
              Entrar em contato
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-mono text-3xl font-semibold tracking-tight text-accent">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-sm leading-snug text-fg-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <Section className="border-b border-border bg-bg-subtle">
      <SectionHeading
        eyebrow="Duas formas de trabalhar comigo"
        title="Você está aqui para contratar uma pessoa ou um projeto?"
        description="São dois caminhos diferentes, e eu atendo os dois. Escolha o seu."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {audiences.map((audience, i) => (
          <Reveal key={audience.id} delay={i * 100}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8">
              <Eyebrow>{audience.eyebrow}</Eyebrow>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                {audience.title}
              </h3>
              <p className="mt-4 leading-relaxed text-fg-muted">{audience.body}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {audience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-fg-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={audience.cta.href}
                variant="secondary"
                className="mt-8 self-start"
              >
                {audience.cta.label}
                <ArrowIcon />
              </ButtonLink>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FeaturedWork() {
  return (
    <Section id="trabalhos">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Trabalhos selecionados"
          title="Coisas que estão no ar"
          description="Produtos com domínio próprio, usuários reais e manutenção contínua — não exercícios de tutorial."
        />
        <Link
          href="/projetos"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Todos os projetos
          <ArrowIcon className="size-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 100}>
            <div className="h-full">
              <ProjectCard project={project} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Track() {
  return (
    <Section className="border-y border-border bg-bg-subtle">
      <SectionHeading
        eyebrow="Trajetória"
        title="Onde essa experiência foi construída"
      />

      <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-border">
        {experiences.map((exp) => (
          <li
            key={`${exp.company}-${exp.start}`}
            className="flex flex-col gap-1 bg-surface p-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <div>
              <p className="font-semibold">{exp.company}</p>
              <p className="text-sm text-fg-muted">{exp.role}</p>
            </div>
            <p className="shrink-0 font-mono text-xs text-fg-subtle">
              {exp.period}
            </p>
          </li>
        ))}
      </ol>

      <ButtonLink href="/sobre" variant="secondary" className="mt-8">
        Ver a trajetória completa
        <ArrowIcon />
      </ButtonLink>
    </Section>
  );
}

function ClosingCta() {
  return (
    <Section>
      <div className="rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Tem um produto para tirar do papel ou uma vaga para preencher?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-fg-muted text-pretty">
          Me conte o contexto e eu respondo com o que dá para fazer, em quanto
          tempo e por onde começar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contato">
            Falar comigo
            <ArrowIcon />
          </ButtonLink>
          <ButtonLink href={`mailto:${site.email}`} variant="secondary">
            {site.email}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
