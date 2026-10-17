import Link from "next/link";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/content/site";
import type { Content, Lang } from "@/content/types";
import { href } from "@/lib/i18n";
import { ProjectCover } from "@/components/project-cover";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Projects({ lang, c }: { lang: Lang; c: Content }) {
  const featured = projects.filter((p) => p.image);
  const others = projects.filter((p) => !p.image);
  return (
    <Section id="projects">
      <SectionHeading>{c.projects.heading}</SectionHeading>

      <ul className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2">
        {featured.map((project, i) => {
          const text = c.projects.items[project.slug];
          return (
            <li key={project.slug} className="md:[&:nth-child(even)]:mt-16">
              <Reveal delay={(i % 2) * 0.06}>
                <Link href={href(lang, `/projects/${project.slug}`)} className="group block">
                  <ProjectCover image={project.image} alt={text.title} metric={text.metric} />
                  <h3 className="mt-6 flex items-start justify-between gap-4 font-display text-2xl font-semibold tracking-tight">
                    {text.title}
                    <ArrowUpRight
                      size={22}
                      aria-hidden
                      className="mt-1 shrink-0 text-muted transition-[transform,color] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{text.summary}</p>
                  <Stack items={project.stack} />
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <ul className="mt-20 divide-y divide-line border-y border-line">
        {others.map((project) => {
          const text = c.projects.items[project.slug];
          const details = [
            { label: c.ui.problem, body: <p>{text.problem}</p> },
            { label: c.ui.solution, body: <p>{text.solution}</p> },
            {
              label: c.ui.impact,
              body: (
                <ul className="space-y-1">
                  {text.impact.map((line) => (
                    <li key={line} className="font-medium text-fg">
                      {line}
                    </li>
                  ))}
                </ul>
              ),
            },
          ];
          return (
            <li key={project.slug}>
              <Reveal>
                <details className="group">
                  <summary className="grid cursor-pointer list-none gap-x-8 gap-y-2 py-6 marker:hidden md:grid-cols-[11rem_1fr_auto] md:items-baseline [&::-webkit-details-marker]:hidden">
                    <p className="font-display text-3xl font-semibold tracking-tighter text-accent">{text.metric.value}</p>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight">{text.title}</h3>
                      <p className="mt-1 text-base leading-relaxed text-muted">{text.summary}</p>
                      <Stack items={project.stack} />
                    </div>
                    <CaretDown
                      size={22}
                      aria-hidden
                      className="hidden text-muted transition-[transform,color] duration-200 ease-out group-hover:text-accent group-open:rotate-180 md:block"
                    />
                  </summary>
                  <dl className="grid gap-6 pb-8 md:grid-cols-[11rem_1fr] md:gap-x-8">
                    {details.map((row) => (
                      <div key={row.label} className="contents">
                        <dt className="font-display text-base font-semibold tracking-tight md:col-start-1">{row.label}</dt>
                        <dd className="-mt-4 max-w-[65ch] text-base leading-relaxed text-muted md:col-start-2 md:mt-0">{row.body}</dd>
                      </div>
                    ))}
                  </dl>
                </details>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function Stack({ items }: { items: readonly string[] }) {
  if (!items.length) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
      {items.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
}
