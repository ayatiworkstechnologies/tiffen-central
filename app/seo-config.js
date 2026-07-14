const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tiffencentral.com";

export const siteUrl = configuredUrl.replace(/\/$/, "");

export const seo = {
  name: "Tiffen Central",
  title: "South Indian Restaurant in Chennai | Tiffen Central",
  description:
    "Visit Tiffen Central in Perungudi, Chennai, Tamil Nadu for fresh dosa, idli, vada, pongal, filter coffee, South Indian breakfast, dining and catering.",
  locale: "en_IN",
};
