import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { skillGroups } from "@/content/skills";

/**
 * Schema.org Person — o que o Google usa para montar o painel de conhecimento
 * e entender que "Santos Code" e "Marcelo Santos" são a mesma entidade.
 */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hortolândia",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [site.linkedin, site.github],
    knowsAbout: skillGroups.flatMap((group) =>
      group.items.filter((item) => item.core).map((item) => item.name),
    ),
    worksFor: {
      "@type": "Organization",
      name: site.brand,
      url: site.url,
    },
    subjectOf: projects
      .filter((project) => project.liveUrl)
      .map((project) => ({
        "@type": "CreativeWork",
        name: project.name,
        url: project.liveUrl,
        description: project.summary,
      })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
