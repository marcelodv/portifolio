import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ArrowIcon, ButtonLink, Eyebrow, Section, SectionHeading } from "@/components/ui";
import {
  certifications,
  education,
  experiences,
  languages,
} from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Trajetória de Marcelo Santos: 3 anos de IBM modernizando plataforma legada, " +
    "front-end de produto e desenvolvimento full-stack com React, Next.js e Node.",
};

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <Eyebrow>Sobre</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Comecei automatizando testes. Continuei tirando sistemas do legado.
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-fg-muted text-pretty">
            <p>
              Meu primeiro projeto de verdade foi na IBM, ainda como estagiário:
              uma aplicação de automação que transformou dias de execução manual
              de testes em uma hora rodando sozinha. Aprendi ali que o trabalho
              bom raramente é o mais visível — é o que tira peso de cima de
              alguém.
            </p>
            <p>
              Os três anos seguintes foram sobre modernização: tirar uma
              aplicação de um VueJS sem suporte e reconstruir em React,
              desmontar um monólito Java em microsserviços Node, migrar cluster
              de Kubernetes para OpenShift e fechar as vulnerabilidades que
              apareciam no caminho. Nada disso é greenfield — é trabalho com
              sistema em produção, com gente usando.
            </p>
            <p>
              Hoje divido meu tempo entre front-end de produto e projetos
              próprios sob a marca {site.brand}, onde faço o ciclo inteiro:
              decidir o modelo de dados, escrever a API, desenhar a interface,
              configurar cobrança e colocar no domínio.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contato">
              Falar comigo
              <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={site.linkedin} variant="secondary" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </ButtonLink>
          </div>
        </div>
      </header>

      <Section className="border-b border-border">
        <SectionHeading eyebrow="Experiência" title="Trajetória profissional" />

        <ol className="mt-14 space-y-14">
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.start}`} delay={i * 60}>
              <li className="grid gap-4 lg:grid-cols-[14rem_1fr] lg:gap-12">
                <div className="lg:pt-1">
                  <p className="font-mono text-xs text-accent">{exp.period}</p>
                  <p className="mt-1 text-sm text-fg-subtle">{exp.location}</p>
                </div>

                <div className="border-l-2 border-border pl-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-fg-muted">{exp.company}</p>
                  <p className="mt-3 leading-relaxed text-pretty">{exp.summary}</p>

                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md bg-bg-subtle px-2 py-1 font-mono text-xs text-fg-subtle"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="border-b border-border bg-bg-subtle">
        <SectionHeading
          eyebrow="Ferramentas"
          title="O que eu uso"
          description="Em destaque, o que está nas minhas mãos hoje. O resto é repertório — já entreguei com isso e volto a usar quando o problema pedir."
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className={
                      item.core
                        ? "rounded-md border border-transparent bg-accent-soft px-2.5 py-1 font-mono text-xs font-medium text-accent"
                        : "rounded-md border border-border px-2.5 py-1 font-mono text-xs text-fg-muted"
                    }
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
              Formação
            </h2>
            <ul className="mt-5 space-y-6">
              {education.map((item) => (
                <li key={item.institution}>
                  <p className="font-medium">{item.degree}</p>
                  <p className="text-sm text-fg-muted">{item.institution}</p>
                  <p className="mt-1 font-mono text-xs text-fg-subtle">{item.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
              Certificações
            </h2>
            <ul className="mt-5 space-y-6">
              {certifications.map((item) => (
                <li key={item.name}>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-fg-muted">{item.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-fg-subtle">{item.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
              Idiomas
            </h2>
            <ul className="mt-5 space-y-6">
              {languages.map((item) => (
                <li key={item.name}>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-fg-muted">{item.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
