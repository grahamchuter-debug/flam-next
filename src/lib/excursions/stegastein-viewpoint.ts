import type { ExcursionData } from "@/lib/excursion-types";
import { siteImages } from "@/lib/site-images";

export const stegasteinViewpointExcursion: ExcursionData = {
  slug: "stegastein-viewpoint",
  path: "/excursions/stegastein-viewpoint",
  title: "Stegastein Viewpoint Tour",
  headline: "Stegastein Viewpoint Tour for Cruise Passengers",
  lead: "Stand on Norway's famous glass fronted platform above the Aurlandsfjord, a shore excursion built for cruise ship port days, with sweeping views and enough time to return before all aboard.",
  metaTitle: "Stegastein Viewpoint Shore Excursion from Flam",
  metaDescription:
    "Plan the Stegastein viewpoint shore excursion from Flam for cruise passengers. Panoramic Aurlandsfjord views, coach access, and return to ship timing advice for your port day.",
  heroImage: siteImages.stegastein,
  heroImageAlt:
    "Stegastein viewpoint platform overlooking the Aurlandsfjord near Flam, Norway",
  summary: {
    duration: "Approx. 2 to 3 hours",
    meetingPoint: "Flam village centre or cruise pier pickup",
    returnReassurance:
      "Round trip tours scheduled for standard cruise port hours",
    bestFor: "Photographers, first time visitors, and anyone wanting a iconic fjord panorama",
  },
  gallery: [
    {
      src: siteImages.stegastein,
      alt: "Stegastein viewpoint glass platform above the Aurlandsfjord near Flam",
    },
    {
      src: siteImages.stegasteinPanorama,
      alt: "Aurlandsfjord panorama viewed from the Stegastein lookout road",
    },
    {
      src: siteImages.stegasteinLookout,
      alt: "Stegastein platform extending over the Aurlandsfjord mountainside",
    },
    {
      src: siteImages.stegasteinVisitors,
      alt: "Visitors enjoying the view from Stegastein viewpoint above Flam",
    },
    {
      src: siteImages.hero,
      alt: "Flam village and cruise port on the Aurlandsfjord",
    },
    {
      src: siteImages.naeroyfjord,
      alt: "Fjord landscape in the Flam and Aurland region of Norway",
    },
  ],
  highlights: [
    "Visit the iconic Stegastein lookout above the Aurlandsfjord",
    "Walk the glass fronted platform for unobstructed fjord panoramas",
    "Photograph one of Norway's most recognisable viewpoints",
    "Coach transfer from Flam village, no self drive needed",
    "Compact format suited to typical cruise ship calls",
  ],
  description: [
    "The Stegastein viewpoint tour takes cruise passengers from Flam village up the hairpin road above the Aurlandsfjord to one of Norway's most photographed lookouts. The cantilevered platform juts out from the mountainside, giving you a clear, dramatic view down the fjord.",
    "Most tours combine coach transport with time at the viewpoint itself, so you are not juggling rental cars or tight bus timetables on port day. Your driver handles the mountain road while you focus on the scenery.",
    "Stegastein pairs well with a relaxed morning in Flam or an afternoon fjord cruise if your ship stays long enough. It delivers a headline Norway view without the full day commitment of longer inland tours.",
  ],
  included: [
    "Round trip coach transport from Flam",
    "Time at Stegastein viewpoint platform",
    "Driver commentary en route where provided",
  ],
  notIncluded: [
    "Food and drinks during the tour",
    "Optional stops beyond the standard itinerary",
    "Travel insurance or personal expenses",
    "Gratuities for driver or guide",
  ],
  timingAdvice: [
    "Stegastein sits above Flam on a winding mountain road. Allow time for the drive up and back, weather and traffic can add minutes on busy cruise days.",
    "Confirm your all aboard time on your cruise line app before booking. Build a 30 to 45 minute personal buffer after the tour ends.",
    "Morning departures often mean clearer views before cloud builds over the peaks. Afternoon slots work if your ship arrives early and you have six or more hours ashore.",
    "Check our ship schedule pages to see whether multiple vessels call Flam the same day, crowded ports mean longer coach queues.",
  ],
  faqs: [
    {
      question: "How long does the Stegastein viewpoint tour take from Flam?",
      answer:
        "Most round trip tours take around two to three hours including coach transfer and time on the platform. Exact duration depends on the operator and road conditions.",
    },
    {
      question: "Is Stegastein suitable for cruise passengers with limited time ashore?",
      answer:
        "Yes, if you have at least four to five usable hours on land after gangway opening. Shorter port calls may only allow one major excursion, compare your all aboard time before booking.",
    },
    {
      question: "Is the Stegastein platform safe in wet weather?",
      answer:
        "The platform is engineered for visitors, but surfaces can be slippery when wet. Wear sturdy shoes and hold handrails. Tours may adjust or cancel in severe weather.",
    },
    {
      question: "Can I visit Stegastein independently from my cruise ship?",
      answer:
        "Self guided visits are possible by taxi or rental car, but parking and road timing are easier on an organised tour. Independent travellers must manage their own return to ship deadline.",
    },
    {
      question: "Will I have time for Stegastein and a fjord cruise on the same day?",
      answer:
        "Only on longer port calls of roughly eight hours or more. On shorter visits, choose one signature experience and allow buffer time near the pier before all aboard.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Shore Excursions", href: "/flam-shore-excursions" },
    { label: "Stegastein Viewpoint" },
  ],
  relatedLinks: [
    { label: "Ship schedule", href: "/ship-schedule" },
    { label: "Flam port guide", href: "/flam-port-guide" },
    { label: "One day in Flam", href: "/one-day-in-flam" },
    { label: "Flam fjord cruise", href: "/excursions/flam-fjord-cruise" },
  ],
  bookingHref: "/flam-shore-excursions",
  bookingLabel: "Book this excursion",
  ctaTitle: "Ready to book your Stegastein viewpoint tour?",
  ctaText:
    "Reserve your coach transfer and viewpoint time before port day, then explore more cruise friendly Flam excursions for your ship's schedule.",
};
