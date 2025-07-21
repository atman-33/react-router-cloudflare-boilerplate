import { siteConfig } from "~/config/site-config";

export interface MetaOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  ogpImage?: string;
  noIndex?: boolean;
}

export function generateMeta(options: MetaOptions = {}) {
  const {
    title,
    description = siteConfig.description,
    keywords = siteConfig.keywords,
    ogpImage = siteConfig.ogpImage,
    noIndex = false,
  } = options;

  const fullTitle = title ? `${title} - ${siteConfig.name}` : siteConfig.name;
  const fullOgImage = ogpImage.startsWith("http")
    ? ogpImage
    : `${siteConfig.appUrl}${ogpImage}`;

  const meta = [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(", ") },
    { name: "author", content: siteConfig.author },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: siteConfig.appUrl },
    { property: "og:image", content: fullOgImage },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: fullOgImage },
  ];

  if (noIndex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  return meta;
}
