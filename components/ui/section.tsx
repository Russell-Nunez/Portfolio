import { cn } from "@/lib/cn";

export function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("font-display text-3xl font-semibold tracking-tight sm:text-4xl", className)}>{children}</h2>
  );
}
