import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { site } from "@/content/site";
import { getContent, href, isLang, langs } from "@/lib/i18n";
import "../globals.css";

const heading = Bricolage_Grotesque({ variable: "--font-heading", subsets: ["latin"], display: "optional" });
const body = Geist({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const code = Geist_Mono({ variable: "--font-code", subsets: ["latin"], display: "swap" });

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f6f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0e" },
  ],
};

export const generateStaticParams = () => langs.map((lang) => ({ lang }));

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { meta, htmlLang } = getContent(lang);
  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    authors: [{ name: site.name }],
    alternates: {
      canonical: href(lang),
      languages: { "pt-BR": href("pt"), en: href("en"), es: href("es") },
    },
    openGraph: {
      type: "website",
      title: meta.title,
      description: meta.description,
      locale: htmlLang === "pt-BR" ? "pt_BR" : htmlLang,
      url: href(lang),
      siteName: site.name,
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { htmlLang } = getContent(lang);

  return (
    <html lang={htmlLang} suppressHydrationWarning className={`${heading.variable} ${body.variable} ${code.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
