/**
 * Image provenance registry for Flam Shore Excursions.
 * NEW IMAGE SOURCING IS NOT AUTHORISED without verified rights.
 */

export type ImageProvenance = {
  key: string;
  urlOrPath: string;
  status:
    | "KEEP"
    | "REPLACE"
    | "WRONG_LOCATION"
    | "DUPLICATE"
    | "PROVENANCE_UNKNOWN"
    | "BROKEN";
  notes: string;
};

export const flamImageProvenance: readonly ImageProvenance[] = [
  {
    key: "hero",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Fl%C3%A5m_fr%C3%A5_cruiseskip_ved_kai.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Flam village and cruise pier. Rights later-hardening.",
  },
  {
    key: "fjordCruise",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/N%C3%A6r%C3%B8yfjord_-_The_world%27s_most_beautiful_fjord_%2831250274463%29.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Naeroyfjord scenery. Rights later-hardening.",
  },
  {
    key: "stegastein",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Stegastein_viewpoint_showing_Aurlandsfjord.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Stegastein / Aurlandsfjord. Rights later-hardening.",
  },
  {
    key: "flamRailway",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Fl%C3%A5msbana_-_Crowned_the_most_beautiful_train_journey_in_the_world_%2832021608906%29.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Flamsbana. Rights later-hardening.",
  },
  {
    key: "stavangerHarbour",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Stavanger_V%C3%A5gen_01.jpg",
    status: "WRONG_LOCATION",
    notes: "Stavanger harbour. Do not use as Flam imagery. Sister-port card only if labelled as Stavanger.",
  },
] as const;
