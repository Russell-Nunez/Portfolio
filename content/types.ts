import type { ProjectSlug, StackGroup } from "./site";

export type Lang = "pt" | "en" | "es";

export type ProjectText = {
  title: string;
  summary: string;
  metric: { value: string; label: string };
  problem: string;
  solution: string;
  impact: string[];
  modules?: { title: string; body: string }[];
};

export type Content = {
  htmlLang: string;
  meta: { title: string; description: string; ogTitle: string; ogSubtitle: string };
  nav: { about: string; impact: string; projects: string; experience: string; stack: string; contact: string; menu: string; skip: string };
  ui: { theme: string; language: string; back: string; next: string; demo: string; tryIt: string; tour: string; gallery: string; code: string; caseStudy: string; problem: string; solution: string; impact: string; stack: string };
  hero: { title: string; tagline: string; location: string; resume: string; contact: string };
  about: { heading: string; paragraphs: string[] };
  companies: { label: string; names: string[] };
  impact: { heading: string; items: { value: string; label: string }[] };
  projects: { heading: string; viewCase: string; items: Record<ProjectSlug, ProjectText> };
  experience: {
    heading: string;
    items: { company: string; client?: string; role: string; period: string; bullets: string[] }[];
  };
  stack: { heading: string; groups: Record<StackGroup, string> };
  education: {
    heading: string;
    degreesLabel: string;
    degrees: { name: string; school: string; period: string }[];
    certsLabel: string;
    certs: { name: string; issuer?: string }[];
  };
  languages: { heading: string; items: { name: string; level: string }[] };
  contact: { heading: string; text: string; email: string; };
  footer: { rights: string; built: string };
};
