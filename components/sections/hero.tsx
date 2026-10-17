import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/content/site";
import type { Content, Lang } from "@/content/types";
import { DotSphere } from "@/components/dot-sphere";
import { asset } from "@/lib/asset";
import { href } from "@/lib/i18n";
import { socials } from "@/components/ui/icons";

export function Hero({ lang, c }: { lang: Lang; c: Content }) {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-12 md:gap-10 md:pb-20 md:pt-14">
      <div className="md:col-span-6">
        <p className="rise font-mono text-sm text-accent" style={{ "--i": 0 } as React.CSSProperties}>
          {c.hero.title}
        </p>
        <h1
          className="rise mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {site.name}
        </h1>
        <p
          className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {c.hero.tagline}
        </p>

        <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ "--i": 3 } as React.CSSProperties}>
          <a href={`${asset(href(lang))}/#contact`} className="btn btn-primary">
            {c.hero.contact}
          </a>
          <a href={asset(site.resume[lang])} download className="btn">
            <DownloadSimple size={18} aria-hidden />
            {c.hero.resume}
          </a>
          <ul className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  className="btn btn-icon text-muted hover:text-fg"
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon size={20} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figure className="rise md:col-span-6" style={{ "--i": 2 } as React.CSSProperties}>
        <div
          aria-hidden
          className="mx-auto aspect-square w-full max-w-[15rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_9%,transparent),transparent)] md:max-w-[27rem]"
        >
          <DotSphere className="block size-full" />
        </div>
        <figcaption className="mt-4 text-center text-sm text-muted">{c.hero.location}</figcaption>
      </figure>
    </section>
  );
}
