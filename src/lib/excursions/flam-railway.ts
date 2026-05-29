import type { ExcursionData } from "@/lib/excursion-types";
import { siteImages } from "@/lib/site-images";

export const flamRailwayExcursion: ExcursionData = {
  slug: "flam-railway",
  path: "/excursions/flam-railway",
  title: "Flam Railway Experience",
  headline: "Flam Railway Experience for Cruise Passengers",
  lead: "Ride the world-famous Flamsbana from Flam station through waterfalls, tunnels, and mountain scenery — a shore excursion timed for cruise ship port days with clear return-to-ship guidance.",
  metaTitle: "Flam Railway Shore Excursion | Flamsbana for Cruise Passengers",
  metaDescription:
    "Plan the Flam Railway shore excursion for cruise passengers. Flamsbana scenic train from Flam station with duration advice, ticket tips, and return-to-ship timing for your port day.",
  heroImage: siteImages.flamRailway,
  heroImageAlt:
    "Flamsbana scenic train on a mountainside above the Flam valley in Norway",
  summary: {
    duration: "Approx. 1–2 hours round trip",
    meetingPoint: "Flam railway station, beside the cruise pier",
    returnReassurance:
      "Frequent departures suited to standard morning and afternoon port calls",
    bestFor: "Rail enthusiasts, families, and guests wanting a classic Flam experience on foot from ship",
  },
  gallery: [
    {
      src: siteImages.flamRailway,
      alt: "Flam Railway train climbing the mountainside above the Flam valley",
    },
    {
      src: siteImages.flamRailwayTrain,
      alt: "Flamsbana scenic train on the Flam Railway line in Norway",
    },
    {
      src: siteImages.kjosfossen,
      alt: "Kjosfossen waterfall beside the Flam Railway route",
    },
    {
      src: siteImages.flamRailwayScenic,
      alt: "Scenic railway landscape along the Flamsbana mountain line",
    },
    {
      src: siteImages.kjosfossenWide,
      alt: "Kjosfossen waterfall viewed from the Flam Railway journey",
    },
    {
      src: siteImages.hero,
      alt: "Flam village with cruise ships docked near the railway station",
    },
  ],
  highlights: [
    "Travel on the renowned Flamsbana scenic railway",
    "See waterfalls, ravines, and mountain farms from the train",
    "Depart from Flam station — minutes from the cruise pier",
    "Flexible round-trip options for half-day port calls",
    "One of the most popular independent excursions in Flam",
  ],
  description: [
    "The Flam Railway — Flamsbana — is among the steepest standard-gauge railways in the world and a must-do for many cruise passengers visiting Flam. The line climbs from sea level at Flam station to Myrdal on the Bergen line, passing waterfalls and tight valley bends along the way.",
    "Because the station sits in the village next to the cruise pier, you can disembark and reach the platform quickly without a transfer. That makes the railway ideal when you want a high-impact experience without losing an hour to logistics.",
    "Most cruise guests take a round trip to Myrdal and return on the next available departure. Peak summer services fill quickly, so booking ahead matters when several ships share the port on the same date.",
  ],
  included: [
    "Flamsbana train travel on booked departures",
    "Standard seating in regular carriages",
    "Scenic journey between Flam and Myrdal",
  ],
  notIncluded: [
    "Food and drinks on board or at Myrdal",
    "Priority seating or premium carriage upgrades unless purchased",
    "Guided commentary beyond on-board announcements",
    "Travel insurance or personal expenses",
  ],
  timingAdvice: [
    "Buy tickets early on busy cruise days — popular departures sell out when multiple ships visit Flam.",
    "Allow time to queue at the station, board, complete the round trip, and walk back to your ship with 30–45 minutes before all aboard.",
    "A one-hour delay in ship arrival can eliminate your preferred departure slot. Check your cruise app before leaving the gangway.",
    "Pair the railway with a short village stroll only if you have six or more reliable hours ashore. See our one-day-in-Flam guide for sample timings.",
  ],
  faqs: [
    {
      question: "How long is the Flam Railway round trip?",
      answer:
        "The one-way journey takes about one hour. Most cruise passengers allow two hours total including boarding, a brief stop at Myrdal, and the return leg to Flam.",
    },
    {
      question: "How far is Flam station from the cruise pier?",
      answer:
        "Just a few minutes on foot. Most ships dock in Flam village, so you can walk directly from the gangway to the station without a shuttle.",
    },
    {
      question: "Should cruise passengers book Flamsbana tickets in advance?",
      answer:
        "Yes during peak season. June and July bring heavy demand, and walk-up tickets may not match your preferred departure or your ship's timetable.",
    },
    {
      question: "Can I take the Flam Railway and still make all aboard?",
      answer:
        "On typical six-hour port calls, yes — if you choose an early departure and stop sightseeing well before your personal deadline. Shorter calls may be too tight for a relaxed round trip.",
    },
    {
      question: "Is the Flam Railway accessible for guests with mobility needs?",
      answer:
        "Station access and boarding vary by carriage. Contact the operator before travel if you use a wheelchair or need step-free boarding assistance.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Shore Excursions", href: "/flam-shore-excursions" },
    { label: "Flam Railway" },
  ],
  relatedLinks: [
    { label: "Ship schedule", href: "/ship-schedule" },
    { label: "Flam port guide", href: "/flam-port-guide" },
    { label: "One day in Flam", href: "/one-day-in-flam" },
    { label: "Flam fjord cruise", href: "/excursions/flam-fjord-cruise" },
  ],
  bookingHref: "/flam-shore-excursions",
  bookingLabel: "Book this excursion",
  ctaTitle: "Ready to book your Flam Railway experience?",
  ctaText:
    "Secure your Flamsbana departure before port day and browse more cruise-friendly excursions timed for your ship's call in Flam.",
};
