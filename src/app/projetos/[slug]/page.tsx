import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import {
  ArrowIcon,
  Badge,
  ButtonLink,
  Eyebrow,
  ExternalIcon,
} from "@/components/ui";
import { getProject, kindLabels, projects } from "@/content/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.summary,
      type: "article",
      url: `/projetos/${project.slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <header className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowIcon className="size-4 rotate-180" />
            Todos os projetos
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Badge tone="accent">{kindLabels[project.kind]}</Badge>
            <span className="font-mono text-xs text-fg-subtle">{project.year}</span>
          </div>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-accent text-pretty">
            {project.tagline}
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-fg-subtle">
                Meu papel
              </dt>
              <dd className="mt-1.5 text-sm">{project.role}</dd>
            </div>
            <div className="max-w-lg">
              <dt className="text-xs uppercase tracking-wider text-fg-subtle">
                Stack
              </dt>
              <dd className="mt-1.5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-bg-subtle px-2 py-1 font-mono text-xs text-fg-muted"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          {project.liveUrl ? (
            <ButtonLink href={project.liveUrl} className="mt-10" target="_blank" rel="noopener noreferrer">
              Abrir o projeto
              <ExternalIcon className="size-4" />
            </ButtonLink>
          ) : null}
        </div>
      </header>

      <article className="container-page py-16 sm:py-20">
        {project.disclaimer ? (
          <p className="mb-14 rounded-xl border border-border bg-bg-subtle p-5 text-sm leading-relaxed text-fg-muted">
            <strong className="font-semibold text-fg">Nota:</strong>{" "}
            {project.disclaimer}
          </p>
        ) : null}

        <div className="grid gap-12 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
            O problema
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-pretty">
            {project.problem}
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
            As decisões
          </h2>
          <ol className="max-w-2xl space-y-10">
            {project.approach.map((step, i) => (
              <Reveal key={step.title} delay={i * 60}>
                <li className="border-l-2 border-accent/40 pl-6">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-fg-muted text-pretty">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
            O resultado
          </h2>
          <ul className="max-w-2xl space-y-4">
            {project.outcome.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-fg-muted">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <nav
        aria-label="Próximo projeto"
        className="border-t border-border bg-bg-subtle"
      >
        <Link
          href={`/projetos/${next.slug}`}
          className="group container-page flex flex-col gap-2 py-14 transition-colors"
        >
          <Eyebrow>Próximo projeto</Eyebrow>
          <span className="inline-flex items-center gap-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {next.name}
            <ArrowIcon className="size-6 transition-transform group-hover:translate-x-1.5" />
          </span>
          <span className="text-fg-muted">{next.tagline}</span>
        </Link>
      </nav>
    </>
  );
}
