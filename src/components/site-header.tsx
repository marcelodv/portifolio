import Link from "next/link";
import { nav, site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="inline-block size-2 rounded-full bg-accent transition-transform group-hover:scale-125"
          />
          {site.name}
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Principal" className="flex items-center">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
