import { siteConfig } from "../data/siteConfig";

const SITE_URL = siteConfig.siteUrl;

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    description:
      "Scuola di danza e centro benessere a Seveso: corsi di danza, tonificazione, stretching e attività di movimento per adulti, ragazzi e bambini.",
    url: SITE_URL,
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Trento e Trieste 47",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.province,
      addressCountry: "IT",
    },
    sameAs: [siteConfig.instagramUrl],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.fullName,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: [siteConfig.instagramUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "IT",
    },
  };
}
