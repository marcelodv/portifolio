import Link from "next/link";
import { nav, site } from "@/content/site";
import { ExternalIcon } from "./ui";

const social = [
  { href: site.linkedin, label: "LinkedIn" },
  { href: site.github, label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="container-page flex flex-col gap-10 py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="text-sm font-semibold">{site.brand}</p>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              {site.name} — {site.role}. {site.location}.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div className="flex gap-14">
            <nav aria-label="Rodapé" className="flex flex-col gap-2.5">
              <p className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
                Navegação
              </p>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
                Onde me achar
              </p>
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {item.label}
                  <ExternalIcon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="border-t border-border pt-6 font-mono text-xs text-fg-subtle">
          © {new Date().getFullYear()} {site.brand}. Construído com Next.js e
          hospedado na Vercel.
        </p>
      </div>
    </footer>
  );
}
