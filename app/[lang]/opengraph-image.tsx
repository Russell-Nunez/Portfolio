import { ImageResponse } from "next/og";
import { getContent, isLang, langs } from "@/lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Russell Antonio Nunez Godoy";

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { meta } = getContent(isLang(lang) ? lang : "pt");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0b0c0e",
          color: "#eceef0",
        }}
      >
        <div style={{ display: "flex", height: 6, width: 96, background: "#4be0a0" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>{meta.ogTitle}</div>
          <div style={{ marginTop: 28, fontSize: 38, color: "#4be0a0" }}>{meta.ogSubtitle}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9ba1a9" }}>Node.js · TypeScript · React · Python</div>
      </div>
    ),
    size,
  );
}

export const generateStaticParams = () => langs.map((lang) => ({ lang }));
