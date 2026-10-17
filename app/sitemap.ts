import type { MetadataRoute } from "next";
import { projects, site } from "@/content/site";
import { href, langs } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...projects.filter((p) => p.image).map((p) => `/projects/${p.slug}`)];
  return paths.flatMap((path) =>
    langs.map((lang) => ({
      url: `${site.url}${href(lang, path)}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          langs.map((l) => [l === "pt" ? "pt-BR" : l, `${site.url}${href(l, path)}`]),
        ),
      },
    })),
  );
}
