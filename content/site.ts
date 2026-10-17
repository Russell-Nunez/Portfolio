export const site = {
  name: "Russell Antonio Nunez Godoy",
  shortName: "Russell Nunez",
  initials: "RN",
  email: "c0d3trust@gmail.com",
  linkedin: "https://www.linkedin.com/in/russell-nunez-83bab1122/",
  resume: { pt: "/curriculo.pdf", en: "/curriculo.pdf", es: "/curriculo.pdf" },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const techStack = {
  languages: ["TypeScript", "JavaScript", "Python", "C# (.NET)", "Java", "SQL e PL/SQL"],
  frontend: ["React", "Next.js", "React Native", "HTML5", "CSS3"],
  backend: ["Node.js", "NestJS", "Express", ".NET"],
  data: ["PostgreSQL", "SQL Server", "Oracle", "MySQL", "MongoDB", "Redis"],
  cloud: ["AWS", "Azure", "Docker", "Git", "GitHub Actions", "CI/CD"],
  architecture: [
    "Clean Architecture",
    "SOLID",
    "Design Patterns",
    "Microsserviços",
    "Observabilidade",
    "Code Review",
    "Scrum",
    "Kanban",
  ],
} as const;

export type StackGroup = keyof typeof techStack;
export const stackGroups = Object.keys(techStack) as StackGroup[];

export const projects = [
  {
    slug: "casa-aurora",
    stack: ["React", "TypeScript", "Three.js", "React Three Fiber", "Zustand", "Tailwind CSS"],
    image: "/projects/casa-aurora.jpg",
    demo: "/casa-aurora/index.html",
    github: null,
    video: "/projects/casa-aurora-tour.mp4",
    gallery: ["fachada", "piscina", "sala", "superior", "noite"].map((n) => `/projects/${n}.jpg`),
  },
  {
    slug: "gfitpro",
    stack: ["React Native", "Expo", "TypeScript", "React Navigation", "Zustand", "NestJS", "Prisma", "SQLite"],
    image: "/projects/gfitpro.jpg",
    demo: null,
    github: null,
    video: null,
    shape: "phone",
    gallery: ["home", "treinos", "ranking", "nutricao", "avaliacao", "comparar", "faturas", "arquivos", "prof-alunos", "prof-aluno"].map((n) => `/projects/gfit-${n}.jpg`),
  },
  {
    slug: "edit-ai",
    stack: ["Python", "FastAPI", "faster-whisper", "FFmpeg", "Gemini", "Redis", "Docker", "React", "Vite", "Tailwind CSS"],
    image: "/projects/editai-home.jpg",
    demo: null,
    github: null,
    video: null,
    gallery: ["legendar", "editar", "capa", "audio", "traduzir"].map((n) => `/projects/editai-${n}.jpg`),
  },
  { slug: "fleet-optimization", stack: ["Python", "Machine Learning", "Docker", "AWS", "Azure"], image: null, demo: null, github: null, video: null, gallery: [] },
  { slug: "support-chatbot", stack: ["Node.js", "TypeScript", "LLM", "PostgreSQL"], image: null, demo: null, github: null, video: null, gallery: [] },
  { slug: "erp-ai-agents", stack: [], image: null, demo: null, github: null, video: null, gallery: [] },
  { slug: "dynamic-pricing", stack: [], image: null, demo: null, github: null, video: null, gallery: [] },
  { slug: "fgts-automation", stack: ["Python"], image: null, demo: null, github: null, video: null, gallery: [] },
  { slug: "cicd-optimization", stack: ["CI/CD", "Azure", "Docker"], image: null, demo: null, github: null, video: null, gallery: [] },
] as const satisfies readonly {
  slug: string;
  stack: readonly string[];
  image: string | null;
  demo: string | null;
  github: string | null;
  video: string | null;
  gallery: readonly string[];
  shape?: "phone";
}[];

export type ProjectSlug = (typeof projects)[number]["slug"];
