import { siteConfig } from "~/config/site-config";

// Route definition type
interface RouteDefinition {
  path: string;
  isPublic: boolean;
  priority?: number;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}

// Public routes definition (requires manual management)
export const publicRoutes: RouteDefinition[] = [
  {
    path: "/",
    isPublic: true,
    priority: 1.0,
    changefreq: "daily",
  },
  // Add future public pages here
  // {
  //   path: '/about',
  //   isPublic: true,
  //   priority: 0.8,
  //   changefreq: 'monthly',
  // },
];

// Dynamic route generator function type
export type DynamicRouteGenerator = () => Promise<RouteDefinition[]>;

// Sitemap URL generation
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export const generateSitemapUrls = async (
  dynamicGenerators: DynamicRouteGenerator[] = [],
): Promise<SitemapUrl[]> => {
  // Process static routes
  const staticUrls: SitemapUrl[] = publicRoutes
    .filter((route) => route.isPublic)
    .map((route) => ({
      loc: route.path,
      lastmod: new Date().toISOString(),
      changefreq: route.changefreq,
      priority: route.priority,
    }));

  // Process dynamic routes
  const dynamicUrls: SitemapUrl[] = [];
  for (const generator of dynamicGenerators) {
    try {
      const routes = await generator();
      const urls = routes
        .filter((route) => route.isPublic)
        .map((route) => ({
          loc: route.path,
          lastmod: new Date().toISOString(),
          changefreq: route.changefreq,
          priority: route.priority,
        }));
      dynamicUrls.push(...urls);
    } catch (error) {
      console.error("Error generating dynamic routes:", error);
    }
  }

  return [...staticUrls, ...dynamicUrls];
};

export const generateSitemapXml = (urls: SitemapUrl[]): string => {
  const urlElements = urls
    .map((url) => {
      const fullUrl = url.loc.startsWith("http")
        ? url.loc
        : `${siteConfig.appUrl}${url.loc}`;
      return `
    <url>
      <loc>${fullUrl}</loc>
      ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}
      ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ""}
      ${url.priority ? `<priority>${url.priority}</priority>` : ""}
    </url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlElements}
</urlset>`;
};
