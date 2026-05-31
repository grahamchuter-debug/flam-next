import type { ExcursionData } from "@/lib/excursion-types";
import { siteImages } from "@/lib/site-images";

export const flamFjordCruiseExcursion: ExcursionData = {
  slug: "flam-fjord-cruise",
  path: "/excursions/flam-fjord-cruise",
  title: "Flam Fjord Cruise",
  headline: "Flam Fjord Cruise for Cruise Passengers",
  lead: "Sail the UNESCO listed Naeroyfjord from Flam on a scenic shore excursion designed around cruise ship port times, dramatic cliffs, waterfalls, and enough margin to return before all aboard.",
  metaTitle: "Flam Fjord Cruise Shore Excursion",
  metaDescription:
    "Book the Flam fjord cruise shore excursion for cruise passengers. Scenic Naeroyfjord sailing from Flam pier with return to ship timing advice and cruise friendly durations.",
  heroImage: siteImages.fjordCruise,
  heroImageAlt:
    "Scenic cruise boat on the Naeroyfjord surrounded by steep cliffs near Flam, Norway",
  heroBadge: "⭐ Best for first time visitors to Flam",
  summary: {
    duration: "Approx. 2 to 3 hours",
    meetingPoint: "Flam pier, near the cruise ship gangway",
    returnReassurance:
      "Timed for typical cruise port calls with buffer before all aboard",
    bestFor: "First time visitors, photographers, and couples wanting a classic fjord experience",
  },
  snapshotCards: [
    { label: "Walk from ship", value: "Approx. 5 minutes" },
    { label: "Fitness level", value: "Easy" },
    { label: "Port call suitability", value: "Ideal for 6 to 10 hour visits" },
    { label: "Availability", value: "Popular in June & July" },
  ],
  gallery: [
    {
      src: siteImages.fjordCruise,
      alt: "Fjord cruise vessel sailing through the Naeroyfjord near Flam, Norway",
    },
    {
      src: siteImages.fjordWaterfall,
      alt: "Waterfall cascading into the Naeroyfjord during a fjord cruise",
    },
    {
      src: siteImages.naeroyfjordNarrow,
      alt: "Narrow Naeroyfjord scenery with steep cliffs near Flam",
    },
    {
      src: siteImages.naeroyfjord,
      alt: "Panoramic Naeroyfjord landscape in the Flam region of Norway",
    },
    {
      src: siteImages.fjordNorway,
      alt: "Scenic fjord waters and mountain walls on a Norway cruise route",
    },
    {
      src: siteImages.hero,
      alt: "Cruise ship docked at Flam pier beside fjord excursion departures",
    },
  ],
  highlights: [
    "Cruise through the UNESCO World Heritage Naeroyfjord",
    "See sheer cliff walls, farms, and cascading waterfalls",
    "Depart from Flam village pier, steps from most cruise ships",
    "Compact duration suited to standard port hours",
    "Independent option for guests who prefer to explore without a ship tour",
  ],
  description: [
    "The Flam fjord cruise is one of the most popular shore excursions for cruise passengers calling at Flam. From the village pier you board a sightseeing vessel and enter the Naeroyfjord, among the narrowest and most dramatic fjord arms in Norway.",
    "The route passes close to vertical rock faces, remote hamlets, and waterfalls that tumble directly into the fjord. Commentary on board helps you spot landmarks and understand why this landscape is protected as a UNESCO World Heritage site.",
    "Because most cruise ships dock right in Flam, you lose minimal time getting to the boat. That makes this excursion a strong choice when you want a signature Norway fjord experience without committing to a full day tour.",
  ],
  included: [
    "Scenic Naeroyfjord cruise from Flam",
    "On board commentary during the sailing",
    "Standard seating on the sightseeing vessel",
  ],
  notIncluded: [
    "Food and drinks on board",
    "Hotel or ship transfers beyond Flam pier",
    "Optional premium seating or upgrades",
    "Travel insurance or personal expenses",
  ],
  timingAdvice: [
    "Check your cruise line app for arrival, all aboard, and departure times before booking. Treat all aboard, not published departure, as your hard deadline.",
    "Allow 30 to 45 minutes after the excursion ends to walk back to the gangway, clear any pier queues, and board without stress.",
    "On busy summer days when multiple ships visit Flam, disembark early and head straight to the pier meeting point. Overlapping calls can mean longer waits ashore.",
    "Compare your ship's hours in port with our ship schedule pages to see how crowded the village may be on your call date.",
  ],
  faqs: [
    {
      question: "How long is the Flam fjord cruise shore excursion?",
      answer:
        "Most sailings take around two to three hours including boarding and disembarkation at Flam pier. Exact duration depends on the operator and daily timetable.",
    },
    {
      question: "Will I get back to my cruise ship on time?",
      answer:
        "This excursion is designed for typical Flam port calls, but only your cruise line confirms all aboard time. Build a personal buffer of 30 to 45 minutes and monitor your ship's app throughout the day.",
    },
    {
      question: "Where does the fjord cruise depart from in Flam?",
      answer:
        "Boats depart from Flam pier in the village centre, a short walk from where most cruise ships dock. Follow signage from the gangway to the fjord cruise quay.",
    },
    {
      question: "Is the Naeroyfjord cruise suitable for mobility limited guests?",
      answer:
        "Pier access and boarding steps vary by vessel. Contact the operator before booking if you use a wheelchair or need accessible boarding assistance.",
    },
    {
      question: "Should I book the fjord cruise in advance?",
      answer:
        "Yes on peak summer days. Flam receives heavy cruise traffic in June and July, and popular sailing times can sell out. Booking ahead secures your preferred departure.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Shore Excursions", href: "/flam-shore-excursions" },
    { label: "Flam Fjord Cruise" },
  ],
  relatedLinks: [
    { label: "Ship schedule", href: "/ship-schedule" },
    { label: "Flam port guide", href: "/flam-port-guide" },
    { label: "One day in Flam", href: "/one-day-in-flam" },
  ],
  bookingHref: "/flam-shore-excursions",
  bookingLabel: "Book this excursion",
  ctaTitle: "Ready to book your Flam fjord cruise?",
  ctaText:
    "Secure your sailing time before port day and explore more cruise friendly excursions designed around your ship's timetable.",
};
