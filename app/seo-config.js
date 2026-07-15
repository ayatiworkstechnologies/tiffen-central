const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tiffencentral.com";

export const siteUrl = configuredUrl.replace(/\/$/, "");

export const seo = {
  name: "Tiffen Central",
  title: "Best veg restaurant in perungudi, chennai | Tiffen central",
  description:
    "Looking for the best veg restaurant in Perungudi, Chennai? Tiffen Central serves fresh South Indian tiffin, dosas, idlis, pongal, vadas, and beverages every day",
  locale: "en_IN",
};
