import { Browser, Cloud, Code, Database, HardDrives, TreeStructure } from "@phosphor-icons/react/dist/ssr";
import { stackGroups, techStack, type StackGroup } from "@/content/site";
import type { Content } from "@/content/types";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

const icons: Record<StackGroup, typeof Code> = {
  languages: Code,
  frontend: Browser,
  backend: HardDrives,
  data: Database,
  cloud: Cloud,
  architecture: TreeStructure,
};

export function Stack({ c }: { c: Content }) {
  return (
    <Section id="stack">
      <SectionHeading>{c.stack.heading}</SectionHeading>

      <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
        {stackGroups.map((group, i) => {
          const Icon = icons[group];
          return (
            <Reveal key={group} delay={(i % 2) * 0.06}>
              <h3 className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight">
                <Icon size={20} aria-hidden className="text-muted" />
                {c.stack.groups[group]}
              </h3>
              <ul translate="no" className="mt-4 flex flex-wrap gap-2">
                {techStack[group].map((tech) => (
                  <li key={tech} className="rounded-lg border border-line px-3 py-1.5 text-sm text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
