import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://catalystdatascience.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/fbb",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
