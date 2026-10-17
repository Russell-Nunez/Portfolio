import { Envelope, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/content/site";

export const socials = [
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedinLogo },
  { label: "Email", href: `mailto:${site.email}`, Icon: Envelope },
] as const;
