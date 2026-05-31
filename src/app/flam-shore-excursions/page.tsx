import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { buildPageMetadata } from "@/lib/site-metadata";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Flam Shore Excursions for Cruise Passengers",
  description:
    "Compare Flam shore excursions for cruise ships: Naeroyfjord cruises, Stegastein tours, and Flamsbana railway trips with return to ship timing advice.",
  path: "/flam-shore-excursions",
  ogImage: siteImages.fjordCruise,
  ogImageAlt:
    "Naeroyfjord scenic cruise boat surrounded by steep fjord cliffs near Flam, Norway",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Flam port guide", href: "/flam-port-guide" },
  { label: "One day in Flam", href: "/one-day-in-flam" },
  { label: "Cruise ship schedule", href: "/flam-cruise-ship-schedule" },
  { label: "Is Flam worth visiting?", href: "/is-flam-worth-visiting" },
] as const;

const faqs = [
  {
    question: "Should cruise passengers book Flam excursions in advance?",
    answer:
      "Yes on busy summer days when several ships share the fjord. Booking ahead the Flamsbana, Naeroyfjord cruises, and Stegastein tours secures your departure slot and helps you return to ship on time without last minute queue stress.",
  },
  {
    question: "How long do the most popular Flam shore excursions take?",
    answer:
      "A round trip Flamsbana journey typically takes about two hours. Naeroyfjord scenic cruises often need three to four hours including boarding. Stegastein bus tours usually run two to three hours from the Flam pier.",
  },
  {
    question: "Can I explore Flam independently as a cruise passenger?",
    answer:
      "Yes. The village, railway station, and fjord piers are within walking distance of most cruise berths. Buy railway or cruise tickets at Flam station, but build extra buffer before all aboard on peak days.",
  },
  {
    question: "Do Flam tours guarantee return to the cruise ship?",
    answer:
      "Ship sponsored excursions usually include a ship guarantee. Independent tickets do not, you are responsible for meeting your vessel's departure. Always confirm all aboard time on your cruise app before booking.",
  },
] as const;

export default function FlamShoreExcursionsPage() {
  return (
    <ContentPage
      title="Flam Shore Excursions"
      lead="Hand picked fjord tours and experiences for cruise ship guests, planned with enough buffer time to return to your ship on schedule."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle="Compare Flam tours for your port day"
      ctaText="Use the guides below to match excursions to your ship's timetable, then choose the option that fits your hours ashore."
      ctaHref="/flam-shore-excursions"
    >
      <section>
        <h2>Why Flam is ideal for cruise shore excursions</h2>
        <p>
          Flam sits at the head of the Aurlandsfjord, so cruise passengers step
          off the gangway straight into Norway&apos;s most famous fjord scenery.
          Excursion piers, the Flamsbana railway, and visitor services cluster
          around the port, meaning less transfer time and more time for the
          experiences that matter to you.
        </p>
        <p>
          Before booking, check your ship&apos;s schedule on our{" "}
          <Link href="/flam-cruise-ship-schedule">Flam cruise ship schedule</Link>{" "}
          guide and read the{" "}
          <Link href="/flam-port-guide">Flam port guide</Link> for walking
          distances from your berth.
        </p>
      </section>

      <CruisePortDayPlanner />

      <section>
        <h2>Naeroyfjord and Aurlandsfjord scenic cruises</h2>
        <p>
          Fjord cruises are the signature Flam shore excursion for cruise
          passengers. Electric and hybrid sightseeing boats run between Flam and
          the narrow Naeroyfjord, a UNESCO World Heritage landscape of sheer
          cliffs, waterfalls, and farmsteads clinging to the shoreline.
        </p>
        <ul>
          <li>Best for first time visitors who want iconic fjord photos</li>
          <li>Typical duration: three to four hours round trip from Flam</li>
          <li>Boarding is a short walk from most cruise piers</li>
          <li>Allow 45 minutes before all aboard for disembarkation queues</li>
        </ul>
      </section>

      <section>
        <h2>Stegastein viewpoint tours</h2>
        <p>
          The Stegastein platform hangs 650 metres above the Aurlandsfjord and
          delivers one of the most photographed views in western Norway. Organised
          bus tours from Flam handle the winding Aurlandsfjellet road so you can
          focus on the panorama rather than navigation.
        </p>
        <p>
          Pair a Stegastein tour with a relaxed morning in the village if your
          ship stays eight hours or more. See our{" "}
          <Link href="/one-day-in-flam">one day in Flam</Link> itinerary for
          sample timing.
        </p>
      </section>

      <section>
        <h2>Flamsbana railway experiences</h2>
        <p>
          The Flamsbana climbs from sea level to Myrdal through 20 tunnels,
          waterfalls including Kjosfossen, and alpine farmland. Cruise passengers
          love the train because departures run frequently from Flam station, just
          minutes from the pier.
        </p>
        <ul>
          <li>Round trip Flam to Myrdal to Flam takes roughly two hours</li>
          <li>Trains stop at Kjosfossen for photos during the summer season</li>
          <li>Tickets sell out quickly when multiple ships are in port</li>
          <li>Ideal when you want a structured, timed return to the village</li>
        </ul>
      </section>

      <section>
        <h2>How to choose the right excursion for your port time</h2>
        <p>
          Match the tour to the hours your cruise line guarantees ashore, not
          just the published arrival time. Late arrivals and early departures
          happen, especially in fjord piloting conditions.
        </p>
        <ul>
          <li>
            <strong>4 to 5 hours in port:</strong> choose one highlight, railway
            or fjord cruise
          </li>
          <li>
            <strong>6 to 7 hours:</strong> railway plus village time, or a shorter
            viewpoint tour
          </li>
          <li>
            <strong>8+ hours:</strong> combine railway with a fjord cruise or
            Stegastein
          </li>
        </ul>
        <p>
          Every itinerary should include margin to return to ship on time. If you
          are unsure whether Flam fits your cruise day, read{" "}
          <Link href="/is-flam-worth-visiting">is Flam worth visiting?</Link> for
          an honest overview.
        </p>
      </section>

      <section>
        <h2>Booking tips for cruise passengers</h2>
        <p>
          Ship sponsored excursions cost more but usually include a guarantee that
          the operator will get you back before departure. Independent bookings
          save money yet require you to watch the clock yourself, build at least
          45 minutes of buffer before all aboard.
        </p>
        <p>
          On peak days, buy Flamsbana and fjord cruise tickets as early as possible.
          Keep your cruise card, photo ID, and a phone with your ship&apos;s daily
          programme handy so you can adjust if the captain changes port times.
        </p>
      </section>
    </ContentPage>
  );
}
