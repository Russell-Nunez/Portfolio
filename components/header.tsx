import Link from "next/link";
import { site } from "@/content/site";
import type { Content, Lang } from "@/content/types";
import { href, langs } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "./ui/theme-toggle";

const links = ["about", "impact", "projects", "experience", "stack", "contact"] as const;

export function Header({ lang, c, path = "/" }: { lang: Lang; c: Content; path?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href={href(lang)} className="font-display text-lg font-semibold tracking-tight">
          {site.shortName}
        </Link>

        <nav aria-label={c.nav.menu} className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm text-muted">
            {links.map((key) => (
              <li key={key}>
                <Link
                  href={`${href(lang)}#${key}`}
                  className="transition-colors duration-150 hover:text-fg"
                >
                  {c.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ul aria-label={c.ui.language} className="flex items-center gap-1 text-sm font-medium">
            {langs.map((l) => (
              <li key={l}>
                <Link
                  href={href(l, path)}
                  hrefLang={l}
                  lang={l}
                  aria-current={l === lang ? "true" : undefined}
                  className={cn(
                    "inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-2 uppercase transition-colors duration-150",
                    l === lang ? "bg-surface text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle label={c.ui.theme} />
        </div>
      </div>
    </header>
  );
}
