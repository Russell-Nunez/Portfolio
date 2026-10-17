import Image from "next/image";
import type { ProjectText } from "@/content/types";

export function ProjectCover({ image, alt, metric }: { image: string | null; alt: string; metric: ProjectText["metric"] }) {
  if (image) {
    return (
      <Image
        src={image}
        alt={alt}
        width={1280}
        height={800}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="aspect-[16/10] w-full rounded-ui border border-line object-cover"
      />
    );
  }
  return (
    <div className="dots flex aspect-[16/10] w-full flex-col justify-end overflow-hidden rounded-ui border border-line bg-surface p-6 transition-colors duration-200 group-hover:border-accent/60">
      <p className="font-display text-5xl font-semibold tracking-tighter text-accent sm:text-6xl">{metric.value}</p>
      <p className="mt-1 text-sm text-muted">{metric.label}</p>
    </div>
  );
}
