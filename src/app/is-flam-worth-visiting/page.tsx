import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Is Flam Worth Visiting on a Cruise?",
  description:
    "Honest guide for cruise passengers asking if Flam is worth visiting, with pros, crowds, costs, and the best shore excursions from the pier.",
  path: "/is-flam-worth-visiting",
  ogImage: siteImages.flamRailway,
  ogImageAlt:
    "Flamsbana scenic train on a mountainside above the Flam valley in Norway",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Shore excursions", href: "/flam-shore-excursions" },
  { label: "One day in Flam", href: "/one-day-in-flam" },
  { label: "Flam port guide", href: "/flam-port-guide" },
  { label: "Cruise ship schedule", href: "/flam-cruise-ship-schedule" },
] as const;

const faqs = [
  {
    question: "Is Flam worth it for first time cruise passengers in Norway?",
    answer:
      "Yes. Flam concentrates iconic fjord scenery, the Flamsbana railway, and Naeroyfjord cruises within steps of the cruise pier, an efficient use of a single port day.",
  },
  {
    question: "Will Flam feel too crowded when my cruise ship visits?",
    answer:
      "It can on peak summer days when multiple vessels call at once. Arrive ashore early, book in advance excursions, and you can still enjoy the highlights while planning to return to ship on time.",
  },
  {
    question: "Is Flam still worth visiting in the rain?",
    answer:
      "Often yes. Low cloud can add drama to the fjords and waterfalls along the railway. Viewpoint tours may have limited visibility, so prioritise the Flamsbana or a sheltered fjord cruise on wet days.",
  },
  {
    question: "Do I need an excursion to enjoy Flam?",
    answer:
      "No, but most cruise passengers book at least one organised tour or railway ticket. The village alone is small; the value is in the fjord and mountain experiences reachable from the port.",
  },
] as const;

export default function IsFlamWorthVisitingPage() {
  return (
    <ContentPage
      title="Is Flam Worth Visiting?"
      lead="An honest answer for cruise passengers: Flam is one of the most rewarding fjord ports if you plan around your ship's hours and book the right shore excursion."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>The short answer for cruise passengers</h2>
        <p>
          Flam is worth visiting for most cruise guests who want dramatic Norwegian
          scenery without long transfers. The Aurlandsfjord, Naeroyfjord, Flamsbana
          railway, and Stegastein viewpoint are all reachable from the cruise pier
         , a rare combination that makes excellent use of limited port time.
        </p>
      </section>

      <section>
        <h2>What makes Flam stand out</h2>
        <ul>
          <li>
            UNESCO listed Naeroyfjord scenery on cruises that depart from the
            harbour
          </li>
          <li>
            The Flamsbana, one of the steepest and most scenic railways in the
            world
          </li>
          <li>
            Stegastein&apos;s panoramic platform above the Aurlandsfjord
          </li>
          <li>
            Compact, walkable port layout ideal for cruise passenger convenience
          </li>
          <li>
            Excursions designed around typical half day and full day ship schedules
          </li>
        </ul>
        <p>
          Explore options in our{" "}
          <Link href="/flam-shore-excursions">Flam shore excursions</Link> guide.
        </p>
      </section>

      <section>
        <h2>When Flam delivers the most value</h2>
        <p>
          You will get the most from Flam when your ship stays at least six hours
          and you book in advance one headline experience. Photography lovers, railway
          enthusiasts, and first time fjord visitors consistently rate the port among
          their cruise highlights. Families appreciate the short walks and clear
          signage from pier to attractions.
        </p>
        <p>
          Use our{" "}
          <Link href="/one-day-in-flam">one day in Flam</Link> planner to match
          activities to your timetable and protect time to return to ship on time.
        </p>
      </section>

      <section>
        <h2>Honest drawbacks cruise passengers notice</h2>
        <p>
          Flam exists primarily for tourism, so prices for food, souvenirs, and
          tours reflect that demand. Summer crowds can mean queues at the railway
          and crowded harbourfront cafés when several ships overlap. Independent
          travellers must watch the clock themselves, missing all aboard is your
          responsibility unless you booked a ship sponsored tour with a guarantee.
        </p>
        <ul>
          <li>Higher excursion and dining prices than quieter Norwegian villages</li>
          <li>Limited taxi supply compared with larger cities</li>
          <li>Weather can hide mountain views on viewpoint tours</li>
        </ul>
      </section>

      <section>
        <h2>Who should prioritise a Flam port call</h2>
        <p>
          Prioritise Flam if fjord landscapes are the reason you chose a Norway
          cruise. It suits passengers who want a structured, photogenic day with
          minimal logistics. It may frustrate travellers who dislike organised
          tourism or prefer unstructured wandering, though even they often admit
          the fjord itself exceeds expectations.
        </p>
      </section>

      <section>
        <h2>How to make Flam worth it on your cruise</h2>
        <p>
          Check the{" "}
          <Link href="/flam-cruise-ship-schedule">Flam cruise ship schedule</Link>,
          read the <Link href="/flam-port-guide">port guide</Link>, book one or two
          experiences in advance, and keep a hard stop for returning to the gangway.
          Cruise passengers who prepare ahead rarely leave disappointed, they leave
          with fjord photos they will talk about for years.
        </p>
      </section>
    </ContentPage>
  );
}
