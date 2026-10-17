import { en } from "@/content/en";
import { es } from "@/content/es";
import { pt } from "@/content/pt";
import type { Content, Lang } from "@/content/types";

export const langs = ["pt", "en", "es"] as const satisfies readonly Lang[];
export const langNames: Record<Lang, string> = { pt: "Português", en: "English", es: "Español" };

const dictionaries: Record<Lang, Content> = { pt, en, es };

export const isLang = (value: string): value is Lang => (langs as readonly string[]).includes(value);
export const getContent = (lang: Lang) => dictionaries[lang];

export const href = (lang: Lang, path = "/") => {
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
};
