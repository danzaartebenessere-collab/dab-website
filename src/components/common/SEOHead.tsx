import { useEffect } from "react";

type SEOHeadProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
};

const SITE_URL = "https://www.dabseveso.it";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Imposta title, meta description, Open Graph, Twitter Card, canonical e
// dati strutturati Schema.org per la pagina corrente. Nessuna libreria
// esterna: aggiorna direttamente il <head> tramite effect, evitando
// dipendenze non necessarie per un sito di queste dimensioni.
export function SEOHead({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  jsonLd,
  noindex = false,
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", `${SITE_URL}${path}`);
    setMeta("property", "og:image", image);
    setMeta("property", "og:locale", "it_IT");
    setMeta("property", "og:site_name", "DAB — Danza, Arte e Benessere");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    setLink("canonical", `${SITE_URL}${path}`);

    const scriptId = "seo-jsonld";
    document.getElementById(scriptId)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, image, jsonLd, noindex]);

  return null;
}
