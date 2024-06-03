import { MetadataRoute } from "next";

const baseUrl = "https://epoll31.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: `${baseUrl}`,
  };
}
