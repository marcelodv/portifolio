import Link from "next/link";
import { kindLabels, type Project } from "@/content/projects";
import { ArrowIcon, Badge } from "./ui";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="accent">{kindLabels[project.kind]}</Badge>
        <span className="font-mono text-xs text-fg-subtle">{project.year}</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight">
        {/* Link estendido: o card inteiro é clicável, sem aninhar interativos. */}
        <Link href={`/projetos/${project.slug}`} className="after:absolute after:inset-0">
          {project.name}
        </Link>
      </h3>

      <p className="mt-1 text-sm text-accent">{project.tagline}</p>

      <p className="mt-4 flex-1 leading-relaxed text-fg-muted">{project.summary}</p>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-bg-subtle px-2 py-1 font-mono text-xs text-fg-subtle"
          >
            {tech}
          </li>
        ))}
        {project.stack.length > 5 ? (
          <li className="px-2 py-1 font-mono text-xs text-fg-subtle">
            +{project.stack.length - 5}
          </li>
        ) : null}
      </ul>

      <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg">
        Ver o case
        <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </p>
    </article>
  );
}
