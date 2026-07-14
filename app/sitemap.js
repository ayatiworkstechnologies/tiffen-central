import { siteUrl } from "./seo-config";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/img-1.png`, `${siteUrl}/img-2.png`],
    },
  ];
}
