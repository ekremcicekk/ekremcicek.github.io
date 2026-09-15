import { useEffect } from "react";
import { site } from "../data/site";

interface SeoProps {
  title: string;
  description?: string;
  path?: string;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function Seo({ title, description, path = "/" }: SeoProps) {
  useEffect(() => {
    const fullTitle = title === site.name ? title : `${title} — ${site.name}`;
    document.title = fullTitle;

    const desc = description ?? site.description;
    setMeta("description", desc);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", desc, "property");
    setMeta("og:url", `${site.url}${path}`, "property");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${site.url}${path}`);
  }, [title, description, path]);

  return null;
}
