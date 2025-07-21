import {
  type DynamicRouteGenerator,
  generateSitemapUrls,
  generateSitemapXml,
} from "~/lib/sitemap-generator";

export const loader = async () => {
  try {
    // Define dynamic route generators (extensible for future use)
    const dynamicGenerators: DynamicRouteGenerator[] = [
      // Example: If there are public manga reviews
      // async () => {
      //   const reviews = await db.query.publicMangaReviews.findMany();
      //   return reviews.map(review => ({
      //     path: `/reviews/${review.slug}`,
      //     isPublic: true,
      //     priority: 0.7,
      //     changefreq: 'weekly' as const,
      //   }));
      // },
    ];

    const urls = await generateSitemapUrls(dynamicGenerators);
    const content = generateSitemapXml(urls);

    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600", // 1 hour cache
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);

    // Return minimal sitemap on error
    const fallbackUrls = await generateSitemapUrls([]);
    const fallbackContent = generateSitemapXml(fallbackUrls);

    return new Response(fallbackContent, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=300", // 5 minute cache
      },
    });
  }
};
