import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Flam Cruise Ship Schedule Guide",
  description:
    "How cruise passengers can read Flam port schedules, plan around busy fjord days, and book shore excursions that fit all-aboard times.",
  path: "/flam-cruise-ship-schedule",
  ogImage: siteImages.hero,
  ogImageAlt:
    "Flam cruise port on the Aurlandsfjord with ships docked at the village pier",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Flam port guide", href: "/flam-port-guide" },
  { label: "Shore excursions", href: "/flam-shore-excursions" },
  { label: "One day in Flam", href: "/one-day-in-flam" },
  { label: "Is Flam worth visiting?", href: "/is-flam-worth-visiting" },
] as const;

const faqs = [
  {
    question: "Where do cruise passengers find official Flam port times?",
    answer:
      "Your cruise line app, daily programme, and announcements from the bridge are authoritative. Use local schedules only as a secondary reference for how busy the village may be.",
  },
  {
    question: "How many cruise ships visit Flam on a typical summer day?",
    answer:
      "One ship is common, but peak weeks can see two or more large vessels on the same date. Overlapping calls mean longer queues and tighter excursion availability.",
  },
  {
    question: "Can port times change after I book a Flam excursion?",
    answer:
      "Yes. Weather, fjord traffic, and operational delays can shift arrival or departure. Choose tours with flexible cancellation where possible and monitor your ship's app all day.",
  },
  {
    question: "How much buffer should I leave before all aboard in Flam?",
    answer:
      "Treat 30–45 minutes before the published all-aboard time as your personal deadline. That margin helps you return to ship on time even if a tour runs long or pier queues build.",
  },
] as const;

export default function FlamCruiseShipSchedulePage() {
  return (
    <ContentPage
      title="Flam Cruise Ship Schedule"
      lead="How cruise passengers can read Flam port times, plan around busy fjord days, and book shore excursions that fit your ship's arrival and departure."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Your ship's schedule is the source of truth</h2>
        <p>
          Published port schedules on third-party websites are useful for guessing
          crowd levels, but only your cruise line confirms arrival, departure, tender
          status, and all-aboard times. Check the app the evening before Flam and
          again at breakfast on port day — captains adjust for weather and fjord
          pilot timing.
        </p>
      </section>

      <section>
        <h2>Understanding Flam port day timings</h2>
        <ul>
          <li>
            <strong>Arrival:</strong> when the gangway opens — not when the ship
            first enters the fjord
          </li>
          <li>
            <strong>All aboard:</strong> the last moment you must be on the vessel
            before departure
          </li>
          <li>
            <strong>Departure:</strong> when the ship leaves Flam — often 30–60
            minutes after all aboard
          </li>
        </ul>
        <p>
          Plan excursions using all-aboard, not departure. Cruise passengers who
          miss the gangway deadline risk being left in port regardless of tour
          bookings.
        </p>
      </section>

      <section>
        <h2>Flam cruise season overview</h2>
        <p>
          Most cruise calls happen between May and September, with the heaviest
          traffic in June, July, and August. Shoulder-season visits mean shorter
          queues at the Flamsbana and easier walk-up tickets. Peak weeks require
          advance booking for every major{" "}
          <Link href="/flam-shore-excursions">Flam shore excursion</Link>.
        </p>
        <ul>
          <li>May–September: daily calls on many fjord itineraries</li>
          <li>Peak summer: multiple ships possible on the same calendar date</li>
          <li>Off-season: fewer sailings and reduced local services</li>
        </ul>
      </section>

      <section>
        <h2>When several ships share Flam on one day</h2>
        <p>
          Overlapping schedules compress pier space, railway capacity, and fjord
          cruise slots. If your app shows another vessel in Flam the same day,
          disembark early and avoid booking back-to-back tours without buffer. The{" "}
          <Link href="/flam-port-guide">Flam port guide</Link> explains how walking
          routes and meeting points work when the harbour is busy.
        </p>
      </section>

      <section>
        <h2>Aligning excursions with your hours ashore</h2>
        <p>
          Match tour duration to guaranteed time on land, not the published
          itinerary from months ago. A delayed arrival can shrink a six-hour call
          to four usable hours. Build itineraries with our{" "}
          <Link href="/one-day-in-flam">one day in Flam</Link> guide and always
          reserve the final 45 minutes near the pier.
        </p>
        <ul>
          <li>4–5 hours ashore: one major tour only</li>
          <li>6–7 hours: one tour plus village time</li>
          <li>8+ hours: combine two experiences with strict timing</li>
        </ul>
      </section>

      <section>
        <h2>Return-to-ship checklist for Flam</h2>
        <p>
          Set a phone alarm for one hour before all aboard. Stop new activities
          two hours before that deadline. Carry your cruise card, know your berth
          location, and confirm whether your excursion includes a ship guarantee.
          Cruise passengers who treat the schedule seriously enjoy Flam without
          the stress of a last-minute sprint to the gangway.
        </p>
        <p>
          Wondering whether the port fits your cruise style? See{" "}
          <Link href="/is-flam-worth-visiting">is Flam worth visiting?</Link> for a
          balanced overview.
        </p>
      </section>
    </ContentPage>
  );
}
