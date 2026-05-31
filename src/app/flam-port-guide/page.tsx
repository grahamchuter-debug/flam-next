import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Flam Cruise Port Guide",
  description:
    "Flam cruise port guide for passengers: pier location, walking distances to the railway, facilities, tender info, and tips to return before all aboard.",
  path: "/flam-port-guide",
  ogImage: siteImages.hero,
  ogImageAlt:
    "Flam cruise port on the Aurlandsfjord with ships docked at the village pier",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Shore excursions", href: "/flam-shore-excursions" },
  { label: "One day in Flam", href: "/one-day-in-flam" },
  { label: "Cruise ship schedule", href: "/flam-cruise-ship-schedule" },
  { label: "Is Flam worth visiting?", href: "/is-flam-worth-visiting" },
] as const;

const faqs = [
  {
    question: "How far is the Flam cruise pier from the railway station?",
    answer:
      "Most cruise berths are five to ten minutes on foot from Flam Railway Station and the main visitor area. Signage leads from the waterfront to ticket desks and excursion meeting points.",
  },
  {
    question: "Do cruise ships tender in Flam or dock at the pier?",
    answer:
      "Most vessels dock alongside the Flam waterfront or dedicated cruise pier. Tender operations are less common but can occur, check your cruise app on the morning of arrival for the final method.",
  },
  {
    question: "Are there restrooms and WiFi near the Flam cruise port?",
    answer:
      "Yes. Restrooms, cafés, and visitor services sit near the station and harbour front. Free WiFi is available in much of the village centre, though speeds vary on busy port days.",
  },
  {
    question: "How early should cruise passengers return to the ship in Flam?",
    answer:
      "Plan to be back at the gangway at least 30 to 45 minutes before all aboard. Queues for the railway, fjord cruises, and security screening can eat into that buffer on peak summer days.",
  },
] as const;

export default function FlamPortGuidePage() {
  return (
    <ContentPage
      title="Flam Port Guide for Cruise Passengers"
      lead="Everything you need to navigate Flam cruise port, pier location, walking routes, facilities, and how to reach shore excursions without losing precious port time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Where cruise ships dock in Flam</h2>
        <p>
          Flam is a deep water fjord port built for tourism. Large cruise ships
          typically berth along the village waterfront or at the purpose built
          cruise pier near Flamsbrygga and the railway station. From most
          gangways you can see the Aurlandsfjord, excursion boats, and the red
          Flamsbana trains waiting at the platform.
        </p>
        <p>
          Confirm your exact berth on the ship&apos;s app the night before arrival.
          Our{" "}
          <Link href="/flam-cruise-ship-schedule">cruise ship schedule guide</Link>{" "}
          explains how to align your day with published arrival and departure
          times.
        </p>
      </section>

      <section>
        <h2>Walking from the pier to key locations</h2>
        <ul>
          <li>
            <strong>Flam Railway Station:</strong> 5 to 10 minutes on foot from most
            berths
          </li>
          <li>
            <strong>Fjord cruise boarding:</strong> along the harbour, often visible
            from the ship
          </li>
          <li>
            <strong>Visitor centre and restrooms:</strong> clustered near the
            station and marina
          </li>
          <li>
            <strong>Excursion coach pickup:</strong> signed zones near the pier or
            station car park
          </li>
        </ul>
        <p>
          Flam village is flat and compact, ideal for cruise passengers with
          limited mobility who still want easy access to the main sights.
        </p>
      </section>

      <section>
        <h2>Port facilities cruise passengers use most</h2>
        <p>
          You will find ticket desks for the Flamsbana and fjord cruises, souvenir
          shops, bakeries, sit down restaurants, and a small grocery store. Card
          payments are widely accepted, but contactless speeds up purchases when
          queues form after multiple ships arrive.
        </p>
        <ul>
          <li>Flamsbana ticket office at the railway station</li>
          <li>Fjord cruise check in along the waterfront</li>
          <li>ATM and banking services in the village centre</li>
          <li>Public restrooms near the harbour and visitor areas</li>
        </ul>
      </section>

      <section>
        <h2>Tender vs dock: what to expect</h2>
        <p>
          Docking is the norm in Flam, which means you walk straight ashore without
          waiting for tender boats. If your captain anchors in the fjord instead,
          follow crew instructions for tender boarding and allow extra time both
          directions, tender queues can delay your return to ship on time if you
          cut it too close.
        </p>
      </section>

      <section>
        <h2>Meeting shore excursions at the port</h2>
        <p>
          Ship sponsored tours usually gather at signed meeting points near the
          gangway or on the quay. Independent operators often instruct guests to
          meet at Flam station or a numbered bus bay. Read your voucher carefully
          the night before and screenshot directions in case mobile signal is slow.
        </p>
        <p>
          Ready to pick a tour? Browse our{" "}
          <Link href="/flam-shore-excursions">Flam shore excursions</Link> guide
          for cruise friendly options that start close to the pier.
        </p>
      </section>

      <section>
        <h2>Busy port days and return to ship planning</h2>
        <p>
          When two or more large ships visit Flam on the same day, expect longer
          queues at the railway, crowded cafés, and slower walking through the
          harbour area. Start ashore early if your cruise line allows it, and keep
          the final hour free near the pier.
        </p>
        <p>
          Build your itinerary with our{" "}
          <Link href="/one-day-in-flam">one day in Flam</Link> planner, always
          leaving margin to return to ship on time before the gangway closes.
        </p>
      </section>

      <section>
        <p>
          Continuing your Norwegian cruise? Many itineraries also visit Stavanger.
          See our{" "}
          <a
            href="https://stavangershoreexcursions.com"
            className="font-medium text-blue-700 underline-offset-2 hover:underline"
          >
            Stavanger Shore Excursions
          </a>{" "}
          guide for Lysefjord cruises, walking tours and cruise planning resources.
        </p>
      </section>
    </ContentPage>
  );
}
