import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectCover } from "@/components/project-cover";
import { projects as all } from "@/content/site";
import { asset } from "@/lib/asset";
import { getContent, href, isLang, langs } from "@/lib/i18n";

const projects = all.filter((p) => p.image);

export const generateStaticParams = () =>
  langs.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));

const find = (slug: string) => projects.findIndex((p) => p.slug === slug);

export async function generateMetadata({ params }: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang) || find(slug) < 0) return {};
  const text = getContent(lang).projects.items[projects[find(slug)].slug];
  return {
    title: `${text.title} | Russell Nunez`,
    description: text.summary,
    alternates: { canonical: href(lang, `/projects/${slug}`) },
  };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  const index = find(slug);
  if (!isLang(lang) || index < 0) notFound();

  const c = getContent(lang);
  const project = projects[index];
  const text = c.projects.items[project.slug];
  const path = `/projects/${slug}`;
  const phone = "shape" in project && project.shape === "phone";

  const rows = [
    { label: c.ui.problem, body: <p>{text.problem}</p> },
    { label: c.ui.solution, body: <p>{text.solution}</p> },
    {
      label: c.ui.impact,
      body: (
        <ul className="space-y-2">
          {text.impact.map((line) => (
            <li key={line} className="font-display text-2xl font-semibold tracking-tight text-fg">
              {line}
            </li>
          ))}
        </ul>
      ),
    },
    ...(project.stack.length > 0
      ? [
          {
            label: c.ui.stack,
            body: (
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-lg border border-line px-3 py-1.5 text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            ),
          },
        ]
      : []),
  ];

  return (
    <>
      <a href="#main" className="skip">
        {c.nav.skip}
      </a>
      <Header lang={lang} c={c} path={path} />
      <main id="main" className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10 sm:px-8 md:pt-16">
        <Link
          href={`${href(lang)}#projects`}
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-fg"
        >
          <ArrowLeft size={16} aria-hidden />
          {c.ui.back}
        </Link>

        <p className="mt-10 font-mono text-sm text-accent">{c.ui.caseStudy}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-6xl">
          {text.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{text.summary}</p>

        {((project.demo && !project.demo.startsWith("/")) || project.github) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && !project.demo.startsWith("/") && (
              <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                {c.ui.demo}
                <ArrowUpRight size={18} aria-hidden />
              </a>
            )}
            {project.github && (
              <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                {c.ui.code}
                <ArrowUpRight size={18} aria-hidden />
              </a>
            )}
          </div>
        )}

        <div className="mt-12">
          {project.video ? (
            <video
              src={asset(project.video)}
              poster={project.image ? asset(project.image) : undefined}
              controls
              muted
              playsInline
              preload="metadata"
              aria-label={`${c.ui.tour}: ${text.title}`}
              className="aspect-video w-full rounded-ui border border-line bg-surface"
            />
          ) : (
            <ProjectCover image={project.image} alt={text.title} metric={text.metric} />
          )}
        </div>

        {project.demo?.startsWith("/") && (
          <section className="mt-16" aria-labelledby="try-it">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="try-it" className="font-display text-3xl font-semibold tracking-tight">
                {c.ui.tryIt}
              </h2>
              <a href={asset(project.demo)} className="btn" target="_blank" rel="noopener noreferrer">
                {c.ui.demo}
                <ArrowUpRight size={18} aria-hidden />
              </a>
            </div>
            <iframe
              src={asset(project.demo)}
              title={text.title}
              loading="lazy"
              allow="fullscreen"
              className="mt-6 h-[75vh] min-h-[28rem] w-full rounded-ui border border-line bg-surface"
            />
          </section>
        )}

        {project.gallery.length > 0 && (
          <section className="mt-16" aria-labelledby="gallery">
            <h2 id="gallery" className="font-display text-3xl font-semibold tracking-tight">
              {c.ui.gallery}
            </h2>
            <ul className={phone ? "mt-6 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-5" : "mt-6 grid gap-x-4 gap-y-8 sm:grid-cols-2"}>
              {project.gallery.map((src, i) => {
                const m = text.modules?.[i];
                return (
                  <li key={src} className={phone ? undefined : "sm:last:odd:col-span-2"}>
                    <Image
                      src={asset(src)}
                      alt={m?.title ?? ""}
                      width={phone ? 400 : 1280}
                      height={phone ? 860 : 764}
                      sizes={phone ? "(min-width: 768px) 20vw, 50vw" : "(min-width: 640px) 50vw, 100vw"}
                      className={phone ? "w-full rounded-ui border border-line" : "aspect-[1280/764] w-full rounded-ui border border-line object-cover object-top"}
                    />
                    {m && (
                      <>
                        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">{m.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{m.body}</p>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        <dl className="mt-16">
          {rows.map((row) => (
            <div key={row.label} className="grid gap-3 border-t border-line py-8 md:grid-cols-[12rem_1fr] md:gap-10">
              <dt className="font-display text-xl font-semibold tracking-tight">{row.label}</dt>
              <dd className="max-w-[65ch] text-lg leading-relaxed text-muted">{row.body}</dd>
            </div>
          ))}
        </dl>
      </main>
      <Footer c={c} />
    </>
  );
}
