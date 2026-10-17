import type { Content } from "@/content/types";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function About({ c }: { c: Content }) {
  const [lead, ...rest] = c.about.paragraphs;
  return (
    <Section id="about">
      <div className="grid gap-8 md:grid-cols-12 md:gap-12">
        <SectionHeading className="md:col-span-4">{c.about.heading}</SectionHeading>
        <div className="space-y-6 md:col-span-8">
          <Reveal>
            <p className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">{lead}</p>
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={i} delay={0.06 * (i + 1)}>
              <p className="max-w-[65ch] text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
