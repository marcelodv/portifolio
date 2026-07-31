import type { Metadata } from "next";
import { ArrowIcon, Eyebrow, ExternalIcon } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com Marcelo Santos sobre uma vaga de desenvolvedor ou um projeto para a Santos Code.",
};

const channels = [
  {
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    hint: "Melhor canal. Respondo em até 1 dia útil.",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "/in/marcelodv",
    href: site.linkedin,
    hint: "Para vagas, recrutamento e histórico profissional.",
    external: true,
  },
  {
    label: "GitHub",
    value: "@marcelodv",
    href: site.github,
    hint: "Código, projetos públicos e o que ando estudando.",
    external: true,
  },
];

const briefing = [
  "O que você quer construir — ou a vaga que está tentando preencher.",
  "Onde isso está hoje: ideia, protótipo, ou sistema já rodando.",
  "Prazo e orçamento aproximados, se já existirem.",
  "Quem mais está envolvido: time interno, agência, ninguém ainda.",
];

export default function ContactPage() {
  return (
    <>
      <header className="border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <Eyebrow>Contato</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Me manda o contexto e eu volto com um caminho
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty">
            Não precisa de escopo fechado nem de documento pronto. Uma
            descrição do problema já basta para eu dizer se faz sentido, quanto
            tempo levaria e por onde começar.
          </p>
        </div>
      </header>

      <div className="container-page grid gap-16 py-20 sm:py-24 lg:grid-cols-[1fr_20rem] lg:gap-24">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
            Canais
          </h2>

          <ul className="mt-6 space-y-px overflow-hidden rounded-2xl border border-border">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-6 bg-surface p-6 transition-colors hover:bg-bg-subtle"
                >
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-fg-subtle">
                      {channel.label}
                    </span>
                    <span className="mt-1 block truncate font-medium">
                      {channel.value}
                    </span>
                    <span className="mt-1 block text-sm text-fg-muted">
                      {channel.hint}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-fg-subtle transition-all group-hover:translate-x-1 group-hover:text-accent"
                  >
                    {channel.external ? (
                      <ExternalIcon className="size-5" />
                    ) : (
                      <ArrowIcon className="size-5" />
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
            O que incluir
          </h2>
          <ul className="mt-6 space-y-4">
            {briefing.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-fg-subtle">
            Baseado em {site.location}. Trabalho remoto ou híbrido na região de
            Campinas.
          </p>
        </aside>
      </div>
    </>
  );
}
