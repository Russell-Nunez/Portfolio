import type { Content } from "@/content/types";

export function Companies({ c }: { c: Content }) {
  return (
    <div className="border-y border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <p className="text-sm text-muted">{c.companies.label}</p>
        <ul translate="no" className="flex flex-wrap items-center gap-x-10 gap-y-3 font-display text-2xl font-semibold tracking-tight text-fg/70">
          {c.companies.names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
