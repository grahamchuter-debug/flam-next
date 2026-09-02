import { imageAlts, siteImages } from "@/lib/site-images";

export type FlamTourCard = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  accent: "blue" | "red";
};

export const flamTourCards: readonly FlamTourCard[] = [
  {
    href: "/excursions/flam-railway",
    image: siteImages.flamRailway,
    imageAlt: imageAlts.flamRailway,
    title: "Flam Railway Experience",
    description:
      "Flamsbana from Flam station, a short walk from the pier. A round trip to Myrdal is the classic rail day for cruise guests.",
    accent: "red",
  },
  {
    href: "/excursions/flam-fjord-cruise",
    image: siteImages.fjordCruise,
    imageAlt: imageAlts.fjordCruise,
    title: "Flam Fjord Cruise",
    description:
      "Scenic sailing from the Flam pier into the Naeroyfjord. A strong first-visit choice when you want the water rather than the train.",
    accent: "blue",
  },
  {
    href: "/excursions/stegastein-viewpoint",
    image: siteImages.stegastein,
    imageAlt: imageAlts.stegastein,
    title: "Stegastein Viewpoint Tour",
    description:
      "Coach up to the Stegastein platform above the Aurlandsfjord. A viewpoint outing rather than a railway or boat trip.",
    accent: "red",
  },
] as const;

export const flamTourListItems = flamTourCards.map((tour) => ({
  name: tour.title,
  description: tour.description,
}));
