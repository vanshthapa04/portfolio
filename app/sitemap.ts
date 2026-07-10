import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vansh-portfolio-051.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
