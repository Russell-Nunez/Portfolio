import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Companies } from "@/components/sections/companies";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { Languages } from "@/components/sections/languages";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { getContent, isLang } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const c = getContent(lang);

  return (
    <>
      <a href="#main" className="skip">
        {c.nav.skip}
      </a>
      <Header lang={lang} c={c} />
      <main id="main">
        <Hero lang={lang} c={c} />
        <Companies c={c} />
        <About c={c} />
        <Impact c={c} />
        <Projects lang={lang} c={c} />
        <Experience c={c} />
        <Stack c={c} />
        <Education c={c} />
        <Languages c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
    </>
  );
}
