import type { Content } from "@/content/types";
import { Reveal } from "@/components/ui/reveal";

export function Languages({ c }: { c: Content }) {
  return (
    <div className="border-y border-line">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{c.languages.heading}</h2>
        <ul className="flex flex-wrap gap-x-12 gap-y-4">
          {c.languages.items.map((l) => (
            <li key={l.name}>
              <span className="font-display text-xl font-medium">{l.name}</span>
              <span className="ml-2 text-muted">{l.level}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
