import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { CruisePassengerQuickPicks } from "@/components/cruise-passenger-quick-picks";
import { buildPageMetadata } from "@/lib/site-metadata";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Time to Visit Flam on a Cruise",
  description:
    "Definitive guide for cruise passengers on the best time to visit Flam, Norway — weather by month, peak season crowds, shore excursions, and photography tips.",
  path: "/best-time-to-visit-flam",
  ogImage: siteImages.naeroyfjord,
  ogImageAlt:
    "Naeroyfjord scenery near Flam, Norway, with steep cliffs and calm fjord water",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Best Time to Visit Flam" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/flam-shore-excursions" },
  { label: "One day in Flam", href: "/one-day-in-flam" },
  { label: "Flam port guide", href: "/flam-port-guide" },
  { label: "Ship schedule hub", href: "/ship-schedule" },
  { label: "Is Flam worth visiting?", href: "/is-flam-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What is the best month to visit Flam?",
    answer:
      "June is the best overall month for most cruise passengers. You get long daylight, reliable excursion operations, comfortable temperatures, and world-class fjord scenery — with slightly less peak crowding than July.",
  },
  {
    question: "Is Flam crowded in July?",
    answer:
      "July is the busiest month on the Norwegian fjords cruise calendar. Multiple ships often call Flam on the same day, which can mean queues at the railway and fuller fjord boats. Arrive ashore early and pre-book excursions to manage the crowds.",
  },
  {
    question: "Does it rain often in Flam?",
    answer:
      "Flam receives regular rainfall throughout the cruise season, especially from late summer into autumn. Showers are common but often brief. Pack a waterproof layer and prioritise sheltered experiences like the Flamsbana or a fjord cruise on wet days.",
  },
  {
    question: "Are shore excursions available all season?",
    answer:
      "Core excursions — the Flamsbana, Naeroyfjord cruises, and Stegastein tours — run from May through September when cruise ships call Flam. May and September may have slightly reduced frequency, so pre-booking is wise on shoulder-season sailings.",
  },
  {
    question: "How long do cruise ships stay in Flam?",
    answer:
      "Most cruise ships spend 6–10 hours in Flam, though some calls are shorter. Typical arrival windows are morning to mid-morning, with departure in the late afternoon or early evening. Check your ship's schedule and our monthly timetables for exact times.",
  },
] as const;

const weatherByMonth = [
  {
    month: "May",
    temperature: "6–14°C (43–57°F)",
    daylight: "15–18 hours",
    traffic: "Low to moderate — season opening",
    excursion:
      "Flamsbana and early-season fjord cruises; fewer competing ships",
  },
  {
    month: "June",
    temperature: "9–17°C (48–63°F)",
    daylight: "18–19 hours",
    traffic: "High — 17 scheduled calls in June 2026",
    excursion:
      "All excursions at full operation; ideal for railway and fjord combos",
  },
  {
    month: "July",
    temperature: "11–20°C (52–68°F)",
    daylight: "18 hours",
    traffic: "Peak — 21 scheduled calls in July 2026",
    excursion:
      "Book ahead; fjord cruises and Stegastein for warmest weather",
  },
  {
    month: "August",
    temperature: "10–18°C (50–64°F)",
    daylight: "15–16 hours",
    traffic: "High — 18 scheduled calls in August 2026",
    excursion:
      "Fjord cruises and viewpoint tours; still busy but family-friendly",
  },
  {
    month: "September",
    temperature: "7–14°C (45–57°F)",
    daylight: "12–13 hours",
    traffic: "Moderate — 15 scheduled calls in September 2026",
    excursion:
      "Photography-focused fjord cruises; autumn colour on mountain slopes",
  },
] as const;

const quickAnswers = [
  { label: "Best overall month", value: "June" },
  { label: "Warmest month", value: "July" },
  { label: "Least crowded month", value: "May or September" },
  { label: "Best month for shore excursions", value: "June" },
  { label: "Best month for photography", value: "June" },
] as const;

export default function BestTimeToVisitFlamPage() {
  return (
    <ContentPage
      title="Best Time to Visit Flam on a Cruise"
      lead="Flam sits deep in the Aurlandsfjord, and the month your cruise calls can shape everything from daylight for excursions to how crowded the village feels. This guide helps cruise passengers pick the right season, plan around peak traffic, and book shore excursions that fit their ship's port hours."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle="Book Flam shore excursions for your cruise month"
      ctaText="Whether you arrive in June sunshine or a September shower, browse cruise-friendly tours timed around your ship's hours in port."
      belowHero={<CruisePassengerQuickPicks />}
    >
      <section>
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="!mt-0 text-xl font-bold text-gray-900 sm:text-2xl">
            Quick answer
          </h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {quickAnswers.map((item) => (
              <div key={item.label} className="rounded-lg bg-white px-4 py-3 shadow-sm">
                <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section>
        <h2>Flam weather by month</h2>
        <p>
          Flam has a mild fjord climate influenced by the Gulf Stream — cooler
          than southern Europe but warmer than you might expect for Norway.
          Temperatures below are typical daytime ranges for cruise season; always
          pack layers and a rain jacket regardless of month.
        </p>
        <div className="overflow-x-auto">
          <table className="mt-4 w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-3 py-3 font-semibold text-gray-900">Month</th>
                <th className="px-3 py-3 font-semibold text-gray-900">
                  Average temperature
                </th>
                <th className="px-3 py-3 font-semibold text-gray-900">
                  Daylight hours
                </th>
                <th className="px-3 py-3 font-semibold text-gray-900">
                  Cruise ship traffic
                </th>
                <th className="px-3 py-3 font-semibold text-gray-900">
                  Recommended excursion
                </th>
              </tr>
            </thead>
            <tbody>
              {weatherByMonth.map((row) => (
                <tr key={row.month} className="border-b border-gray-100">
                  <td className="px-3 py-3 font-medium text-gray-900">
                    {row.month}
                  </td>
                  <td className="px-3 py-3">{row.temperature}</td>
                  <td className="px-3 py-3">{row.daylight}</td>
                  <td className="px-3 py-3">{row.traffic}</td>
                  <td className="px-3 py-3">{row.excursion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600">
          Cruise call counts reference the 2026 Flam ship schedule and vary year
          to year. Shoulder months (May and September) generally feel quieter
          at the pier even when weather is cooler.
        </p>
      </section>

      <section>
        <h2>Cruise ship season in Flam</h2>
        <p>
          Flam&apos;s cruise season runs from May through September, with{" "}
          <strong>peak season in June, July, and August</strong>. During these
          months the Aurlandsfjord sees the highest concentration of cruise
          calls, and the village of Flam — with a population under 500 — can
          feel busy when two or three large ships dock on the same day.
        </p>
        <p>
          Crowding is not constant. It depends on how many vessels share your
          arrival date, how early you disembark, and whether you pre-booked
          excursions. On a single-ship day Flam feels spacious; on a triple-call
          Tuesday in July, queues at the Flamsbana ticket office and fuller
          fjord boats are common.
        </p>
        <p>
          The best way to plan around traffic is to check the monthly ship
          schedule before your sailing. Our timetables list every scheduled call
          with arrival and departure times so you can see overlapping ships and
          choose excursions with enough buffer to return on time:
        </p>
        <ul>
          <li>
            <Link href="/ship-schedule/june-2026">June 2026 ship schedule</Link>
          </li>
          <li>
            <Link href="/ship-schedule/july-2026">July 2026 ship schedule</Link>
          </li>
          <li>
            <Link href="/ship-schedule/august-2026">
              August 2026 ship schedule
            </Link>
          </li>
          <li>
            <Link href="/ship-schedule/september-2026">
              September 2026 ship schedule
            </Link>
          </li>
        </ul>
        <p>
          Compare your ship&apos;s date against others on the same day. If
          multiple vessels call Flam, disembark at the first opportunity and
          head straight to your excursion meeting point rather than lingering in
          the village centre.
        </p>
      </section>

      <section>
        <h2>Best Flam shore excursions by season</h2>
        <p>
          Each month suits different highlights. Match your excursion to the
          weather, daylight, and crowd level you can expect on your cruise day.
        </p>
        <h3>May and September — shoulder season</h3>
        <p>
          Cooler and quieter, with fewer competing ships. The{" "}
          <Link href="/excursions/flam-railway">Flam Railway</Link> is a strong
          choice — sheltered, reliable, and spectacular even in changeable
          weather. A{" "}
          <Link href="/excursions/flam-fjord-cruise">Naeroyfjord cruise</Link>{" "}
          rewards patient photographers with moody light and fewer boats on the
          water.
        </p>
        <h3>June — best all-round month</h3>
        <p>
          Long daylight and full excursion availability make June ideal for
          combining experiences. Take the{" "}
          <Link href="/excursions/flam-railway">Flamsbana</Link> in the morning,
          then board an afternoon{" "}
          <Link href="/excursions/flam-fjord-cruise">fjord cruise</Link> if your
          ship stays eight hours or more. The extended golden hour is excellent
          for fjord photography.
        </p>
        <h3>July and August — peak summer</h3>
        <p>
          Warmest temperatures and highest traffic. Pre-book every excursion.
          The{" "}
          <Link href="/excursions/stegastein-viewpoint">
            Stegastein viewpoint
          </Link>{" "}
          tour delivers the classic aerial fjord photograph and works well when
          skies are clear. On rainy peak-season days, prioritise the railway or
          a sheltered fjord cruise over open-air viewpoints.
        </p>
        <p>
          Browse all options on our{" "}
          <Link href="/flam-shore-excursions">Flam shore excursions</Link> page,
          or read the{" "}
          <Link href="/flam-port-guide">Flam port guide</Link> for walking
          distances from the pier to each meeting point.
        </p>
      </section>

      <section>
        <h2>Practical tips for cruise passengers</h2>
        <ul>
          <li>
            <strong>Pack layers:</strong> fjord weather shifts quickly; a light
            fleece and waterproof shell cover most cruise-season days.
          </li>
          <li>
            <strong>Book early in peak months:</strong> July and August sell out
            popular railway departures and fjord cruise slots.
          </li>
          <li>
            <strong>Use daylight wisely:</strong> in June you can fit more
            ashore; in September plan one focused excursion rather than two.
          </li>
          <li>
            <strong>Protect your return window:</strong> keep 30–45 minutes
            before all-aboard free near the pier, especially on multi-ship days.
          </li>
        </ul>
        <p>
          Not sure how to structure your port day? Our{" "}
          <Link href="/one-day-in-flam">one day in Flam</Link> itinerary walks
          through sample timelines by ship length.
        </p>
      </section>
    </ContentPage>
  );
}
