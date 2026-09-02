import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Flam Shore Excursions",
  url: "https://flamshoreexcursions.com",
  locale: "en_GB",
  tagline: "Railway, fjord and village planning for a cruise day in Flam",
  defaultDescription:
    "Independent Flam cruise-port planning: Flamsbana railway, Naeroyfjord cruises, Stegastein viewpoint and published ship schedules for your day ashore.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Flam Shore Excursions",
  shoreExcursionsPath: "/flam-shore-excursions",
  plannerPath: "/one-day-in-flam",
  schedulePath: "/ship-schedule",
  nationalAuthorityUrl: "https://norwayshoreexcursions.com",
  contactEmail: "hello@flamshoreexcursions.com",
  contactEmailVerified: true,
} as const;
