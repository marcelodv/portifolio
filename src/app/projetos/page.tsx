import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Cases de produtos no ar: SaaS com assinatura, portal editorial com CMS próprio, " +
    "sites institucionais e design system corporativo.",
};

export default function ProjectsPage() {
  return (
    <>
      <header className="border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <Eyebrow>Projetos</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            O que eu construí, e por que cada decisão foi tomada
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty">
            Cada case abaixo descreve o problema real, as decisões de
            arquitetura e o que ficou de pé no final. Onde há link, o produto
            está no ar agora.
          </p>
        </div>
      </header>

      <div className="container-page py-20 sm:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 100}>
              <div className="h-full">
                <ProjectCard project={project} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
