import { ArrowIcon, ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col justify-center py-24">
      <Eyebrow>Erro 404</Eyebrow>
      <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Essa página não existe
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-fg-muted">
        O endereço pode ter mudado ou o link estar quebrado. Os projetos
        continuam todos no lugar.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">
          Voltar para a home
          <ArrowIcon />
        </ButtonLink>
        <ButtonLink href="/projetos" variant="secondary">
          Ver projetos
        </ButtonLink>
      </div>
    </div>
  );
}
