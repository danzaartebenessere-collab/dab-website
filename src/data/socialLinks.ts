import type { SocialLink } from "../types";
import { siteConfig } from "./siteConfig";

// Link social e di contatto rapido, riutilizzati in Header, Footer e pagina Contatti.
export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: siteConfig.instagramUsername,
    href: siteConfig.instagramUrl,
    icon: "instagram",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      siteConfig.whatsappDefaultMessage
    )}`,
    icon: "whatsapp",
  },
  {
    id: "email",
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "email",
  },
  {
    id: "phone",
    label: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
    icon: "phone",
  },
];
