import type { Content } from "@/content/types";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Education({ c }: { c: Content }) {
  const { education: e } = c;
  return (
    <Section id="education">
      <SectionHeading>{e.heading}</SectionHeading>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h3 className="text-sm text-muted">{e.degreesLabel}</h3>
          <ul className="mt-5 space-y-6">
            {e.degrees.map((d) => (
              <li key={d.name}>
                <p className="font-display text-xl font-semibold tracking-tight">{d.name}</p>
                <p className="mt-1 text-muted">
                  {d.school}, {d.period}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.06}>
          <h3 className="text-sm text-muted">{e.certsLabel}</h3>
          <ul className="mt-5 space-y-4">
            {e.certs.map((cert) => (
              <li key={cert.name} className="leading-snug">
                {cert.name}
                {cert.issuer && <span className="text-muted">, {cert.issuer}</span>}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
