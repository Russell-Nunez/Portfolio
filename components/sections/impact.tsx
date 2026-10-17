import type { Content } from "@/content/types";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Impact({ c }: { c: Content }) {
  const [a, b, d, ...rest] = c.impact.items;
  return (
    <Section id="impact">
      <SectionHeading>{c.impact.heading}</SectionHeading>

      <div className="mt-12 grid gap-x-10 gap-y-10 lg:grid-cols-[1.5fr_1fr_1fr]">
        {[a, b, d].map((item, i) => (
          <Reveal key={item.value} delay={i * 0.06} className="border-t border-line pt-6">
            <p
              className={`font-display font-semibold tracking-tighter text-accent ${
                i === 0 ? "text-7xl sm:text-8xl" : "text-6xl sm:text-7xl"
              }`}
            >
              {item.value}
            </p>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-muted">{item.label}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.05} className="border-t border-line pt-5">
            <p className="font-display text-3xl font-semibold tracking-tight">{item.value}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
