import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Flam for Cruise Passengers",
  description:
    "Sample one-day Flam itinerary for cruise guests with realistic timing for fjord cruises, the Flamsbana, and buffer to return to ship on time.",
  path: "/one-day-in-flam",
  ogImage: siteImages.stegastein,
  ogImageAlt:
    "Stegastein viewpoint platform overlooking the Aurlandsfjord near Flam, Norway",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Shore excursions", href: "/flam-shore-excursions" },
  { label: "Flam port guide", href: "/flam-port-guide" },
  { label: "Cruise ship schedule", href: "/flam-cruise-ship-schedule" },
  { label: "Is Flam worth visiting?", href: "/is-flam-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What can cruise passengers do in Flam with only four hours ashore?",
    answer:
      "Focus on one signature experience: a round-trip Flamsbana ride or a Naeroyfjord cruise. Skip add-ons and keep the final 45 minutes free near the pier to return to ship on time.",
  },
  {
    question: "Can I combine the railway and a fjord cruise in one day?",
    answer:
      "Yes if your ship stays at least eight hours. Run the Flamsbana first thing, grab lunch in the village, then board an afternoon fjord cruise — or book a combined package through an operator.",
  },
  {
    question: "Should I book tickets before my cruise arrives in Flam?",
    answer:
      "Pre-booking is strongly recommended on peak summer days. Walk-up tickets exist but queues at Flam station can consume an hour you could spend on the fjord.",
  },
  {
    question: "How much buffer time should I leave before all aboard?",
    answer:
      "Aim to be at the gangway 30–45 minutes before the published all-aboard time. Flam is walkable, but security lines and late-running tours can compress that window quickly.",
  },
] as const;

export default function OneDayInFlamPage() {
  return (
    <ContentPage
      title="One Day in Flam"
      lead="A practical cruise-day plan for Flam that combines Norway's best fjord scenery with realistic timing so you can return to your ship on time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Start with your ship's Flam schedule</h2>
        <p>
          Every good Flam day begins with your cruise line&apos;s arrival,
          departure, and all-aboard times. Subtract at least 45 minutes from your
          last possible departure to set a hard deadline for being back at the
          gangway. Check the{" "}
          <Link href="/flam-cruise-ship-schedule">Flam cruise ship schedule</Link>{" "}
          guide and confirm times on your ship&apos;s app the morning you arrive.
        </p>
      </section>

      <section>
        <h2>Morning: disembark early and secure tickets</h2>
        <p>
          Walk from the pier to Flam Railway Station or your excursion meeting
          point as soon as you are cleared ashore. If you pre-booked, collect or
          confirm tickets immediately. If you are buying walk-up seats, do it before
          exploring the village — popular departures sell out when several cruise
          ships share the fjord.
        </p>
        <p>
          The{" "}
          <Link href="/flam-port-guide">Flam port guide</Link> shows walking
          distances from typical berths to the station and fjord piers.
        </p>
      </section>

      <section>
        <h2>Midday: pick one headline experience</h2>
        <p>
          Cruise passengers with limited time should prioritise one world-class
          highlight rather than rushing two half-finished activities.
        </p>
        <ul>
          <li>
            <strong>Flamsbana railway:</strong> two-hour round trip, frequent
            departures, ideal for 5–7 hour port calls
          </li>
          <li>
            <strong>Naeroyfjord cruise:</strong> three to four hours, best for
            photography and first-time fjord visitors
          </li>
          <li>
            <strong>Stegastein viewpoint:</strong> two to three hours by coach,
            perfect when you want the classic aerial fjord shot
          </li>
        </ul>
        <p>
          Compare options in our{" "}
          <Link href="/flam-shore-excursions">Flam shore excursions</Link> guide.
        </p>
      </section>

      <section>
        <h2>Sample itineraries by port length</h2>
        <h3>4–5 hours ashore</h3>
        <p>
          Disembark immediately → Flamsbana round trip OR fjord cruise → light
          lunch near the harbour → return to ship 45 minutes before all aboard.
        </p>
        <h3>6–7 hours ashore</h3>
        <p>
          Early Flamsbana departure → explore Flam village and waterfront → café
          lunch → souvenir shopping with time reserved to return to ship on time.
        </p>
        <h3>8+ hours ashore</h3>
        <p>
          Morning railway → village lunch → afternoon fjord cruise or Stegastein
          tour → final hour near the pier for contingency buffer.
        </p>
      </section>

      <section>
        <h2>Afternoon: protect your return-to-ship window</h2>
        <p>
          Stop booking new activities once you are within two hours of all aboard.
          Use the last hour for walking back to the pier, clearing any security
          screening, and boarding. If your tour runs late, contact the operator
          immediately — ship-sponsored excursions carry a guarantee; independent
          tickets do not.
        </p>
      </section>

      <section>
        <h2>What to skip when time is tight</h2>
        <p>
          Avoid long coach transfers, open-ended hikes, or stacking two major tours
          unless your ship stays a full day. Stegastein plus a fjord cruise is
          achievable only with eight or more reliable hours ashore. When in doubt,
          choose one unforgettable experience and enjoy Flam at a pace that keeps
          cruise passengers calm about the countdown to departure.
        </p>
        <p>
          Still deciding if the port suits your style? Read{" "}
          <Link href="/is-flam-worth-visiting">is Flam worth visiting?</Link> before
          you commit.
        </p>
      </section>
    </ContentPage>
  );
}
