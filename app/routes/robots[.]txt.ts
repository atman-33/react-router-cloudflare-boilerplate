import { siteConfig } from "~/config/site-config";

export const loader = () => {
  const content = `User-agent: *
Allow: /

Sitemap: ${siteConfig.appUrl}/sitemap.xml
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
