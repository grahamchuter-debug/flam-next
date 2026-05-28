import { siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Flam Shore Excursions",
  url: "https://flamshoreexcursions.com",
  locale: "en_GB",
  defaultDescription:
    "Independent Flam cruise port guides and shore excursion planning for passengers visiting Norway's Aurlandsfjord and Naeroyfjord.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt:
    "Flam cruise port on the Aurlandsfjord with ships docked at the village pier",
  copyrightEntity: "Flam Shore Excursions",
} as const;
