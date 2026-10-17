import { ArrowUpRight, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/content/site";
import type { Content } from "@/content/types";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function Contact({ c }: { c: Content }) {
  const external = { target: "_blank", rel: "noopener noreferrer" } as const;

  return (
    <Section id="contact" className="pb-24 md:pb-32">
      <Reveal>
        <h2 className="font-display text-5xl font-semibold leading-none tracking-tighter sm:text-7xl lg:text-8xl">
          {c.contact.heading}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{c.contact.text}</p>

        <a
          href={`mailto:${site.email}`}
          aria-label={`${c.contact.email}: ${site.email}`}
          className="group mt-10 inline-flex items-center gap-3 break-all font-display text-2xl font-medium tracking-tight underline decoration-line decoration-2 underline-offset-8 transition-[text-decoration-color] duration-200 hover:decoration-accent sm:text-4xl"
        >
          {site.email}
          <ArrowUpRight
            size={28}
            aria-hidden
            className="shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={site.linkedin} className="btn btn-primary" {...external}>
            <LinkedinLogo size={20} aria-hidden />
            LinkedIn
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
