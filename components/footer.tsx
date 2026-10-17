import { site } from "@/content/site";
import type { Content } from "@/content/types";

export function Footer({ c }: { c: Content }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:px-8 md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. {c.footer.rights}
        </p>
        <p>{c.footer.built}</p>
      </div>
    </footer>
  );
}
