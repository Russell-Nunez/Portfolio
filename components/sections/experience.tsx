import type { Content } from "@/content/types";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Experience({ c }: { c: Content }) {
  return (
    <Section id="experience">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <SectionHeading className="md:sticky md:top-24 md:col-span-4 md:self-start">
          {c.experience.heading}
        </SectionHeading>

        <ol className="md:col-span-8">
          {c.experience.items.map((job) => (
            <li key={`${job.company}-${job.period}`} className="group/job">
              <Reveal className="grid gap-3 sm:grid-cols-[11.5rem_1fr] sm:gap-0">
                <p className="whitespace-nowrap font-mono text-sm text-muted sm:pt-1">{job.period}</p>
                <div className="border-l border-line pb-12 pl-6 group-last/job:pb-0 sm:pl-8">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{job.role}</h3>
                  <p className="mt-1 text-base text-accent">
                    {job.company}
                    {job.client && <span className="text-muted">, {job.client}</span>}
                  </p>
                  <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-muted" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
