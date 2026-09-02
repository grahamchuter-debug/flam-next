import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TourCard } from "@/components/tour-card";
import {
  flamScheduleIntegrity,
  formatScheduleDate,
} from "@/lib/flam-schedules";
import { flamTourCards, flamTourListItems } from "@/lib/flam-tours";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";

const pageMeta = {
  title:
    "Flam Shore Excursions | Cruise Port Tours & Fjord Guides for Passengers",
  description:
    "Plan your Flam cruise port day with shore excursion guides, Naeroyfjord cruises, Flamsbana railway tips, and advice to return to your ship on time.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const homeFaqs = [
  {
    question: "Is this site for cruise passengers calling at Flam?",
    answer:
      "Yes. This is an independent Flam cruise-port planning site. It helps you understand railway, fjord and village options, check published ship calls, and leave a return buffer. Confirm final timings with your cruise line.",
  },
  {
    question: "Should I choose the railway or a fjord cruise?",
    answer:
      "They are different days. Flamsbana is a mountain railway from the village station. A fjord cruise is time on the water from the pier. Pick the one you care about most unless you already hold tickets for both and still have a generous buffer.",
  },
  {
    question: "Can I combine the railway and a fjord cruise because my ship stays all day?",
    answer:
      "Published arrival and departure times are not enough to prove a combination will work. Train and boat slots, queues and delays sit outside the ship timetable. Treat two headline experiences as a stretch, not a default.",
  },
  {
    question: "Can I book shore excursions on this site?",
    answer:
      "This site is for planning and discovery. There is no live booking checkout here. Use the excursion pages and guides to understand options, then arrange tickets through operators or your usual booking channel.",
  },
] as const;

export default function Home() {
  const firstLabel = flamScheduleIntegrity.firstDate
    ? formatScheduleDate(flamScheduleIntegrity.firstDate)
    : "";
  const lastLabel = flamScheduleIntegrity.lastDate
    ? formatScheduleDate(flamScheduleIntegrity.lastDate)
    : "";

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(flamTourListItems),
          buildFaqSchema(homeFaqs),
        ]}
      />
      <main>
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <p className="hero-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
            {siteConfig.name}
          </p>
          <h1 className="font-display mb-5 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Your ship is in Flam. Railway, fjord, or the village?
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Most ships dock beside the station and piers. Choose one main
            experience, then keep time to walk back.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/flam-shore-excursions"
              className="btn-primary w-full justify-center sm:w-auto"
            >
              Explore Flam excursions
            </Link>
            <Link
              href="/ship-schedule"
              className="btn-secondary w-full justify-center sm:w-auto"
            >
              Check your ship schedule
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">What kind of Flam day?</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Four realistic shapes, not one stacked itinerary
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Flam packs railway, fjord water and a viewpoint road into a small
              village. Hours ashore decide how many of those you can attempt,
              not how many you should promise yourself.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border-t border-[var(--border-light)] pt-5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Flamsbana
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Station is in the village. A round trip to Myrdal is the
                  classic rail day if you can hold tickets and still leave a
                  return buffer.
                </p>
                <Link
                  href="/excursions/flam-railway"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  Flam Railway
                </Link>
              </div>
              <div className="border-t border-[var(--border-light)] pt-5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Fjord water
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Scenic boats leave from the pier into the Naeroyfjord. This is
                  a water day, not a substitute for the train.
                </p>
                <Link
                  href="/excursions/flam-fjord-cruise"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  Fjord cruise
                </Link>
              </div>
              <div className="border-t border-[var(--border-light)] pt-5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Stegastein
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A coach outing to the viewpoint above the Aurlandsfjord. Road
                  time sits on top of any village wandering.
                </p>
                <Link
                  href="/excursions/stegastein-viewpoint"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  Viewpoint tour
                </Link>
              </div>
              <div className="border-t border-[var(--border-light)] pt-5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Stay local
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Short calls still work if you keep to the village, station
                  area and waterfront rather than stacking headline tours.
                </p>
                <Link
                  href="/one-day-in-flam"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  One day guidance
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Find your ship</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Check when your ship is in Flam
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {flamScheduleIntegrity.total} published Flam calls from{" "}
              {firstLabel} to {lastLabel}. Arrival and departure times shape
              what is realistic ashore. Always confirm with your cruise line.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ship-schedule" className="btn-outline-dark">
                Open Flam ship schedule
              </Link>
              <Link
                href="/flam-cruise-ship-schedule"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
              >
                How to read Flam schedules
              </Link>
            </div>
          </div>
        </section>

        <section id="tours" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Excursion options</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Experiences already on this site
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Railway, fjord cruise and Stegastein. Durations are approximate.
              Keep a return buffer. This site does not sell tickets.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {flamTourCards.map((tour) => (
                <TourCard key={tour.href} {...tour} />
              ))}
            </div>
            <p className="mt-8">
              <Link
                href="/flam-shore-excursions"
                className="text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
              >
                Compare Flam shore excursions
              </Link>
            </p>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Railway and fjord</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Do not treat a long call as a combination ticket
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Ship times tell you when you must be back on board. They do not
              tell you whether Flamsbana and a fjord sailing will both have
              seats, run on time, or leave you a safe walk to the gangway.
              Confirm each ticket separately. If either is tight, choose one.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              The{" "}
              <Link
                href="/one-day-in-flam"
                className="font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
              >
                one day in Flam
              </Link>{" "}
              guide is for shaping hours, not for promising two headline
              experiences from the timetable alone.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">First time in Flam</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Useful planning guides
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/flam-port-guide",
                  title: "Cruise port guide",
                  text: "Village layout from the pier to the station and fjord boats.",
                },
                {
                  href: "/one-day-in-flam",
                  title: "One day in Flam",
                  text: "Sample shapes for short, classic and longer port calls.",
                },
                {
                  href: "/is-flam-worth-visiting",
                  title: "Is Flam worth visiting?",
                  text: "Honest context if you are deciding how to spend hours ashore.",
                },
              ].map((item) => (
                <li
                  key={item.href}
                  className="border-t border-[var(--border-light)] pt-5"
                >
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    <Link
                      href={item.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Port-day planning</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Think in hours, pace and return buffer
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Use published times as a planning start, then leave margin before
              all aboard. This planner helps you think through the day. It does
              not invent a guaranteed railway or boat fit.
            </p>
            <div className="mt-8">
              <CruisePortDayPlanner />
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Return to ship</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Flam is compact. Queues are not.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Walking distances are short. Station and pier queues are not. Your
              cruise line sets all aboard. Build your own buffer after any train
              or boat ends.
            </p>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Norway beyond Flam</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Planning other Norwegian ports?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              For multi-port itineraries, the national planning site covers the
              wider Norway cruise picture.
            </p>
            <a
              href={siteConfig.nationalAuthorityUrl}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
            >
              Norway Shore Excursions
            </a>
          </div>
        </section>

        <section className="border-b border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Flam cruise questions
            </h2>
            <dl className="mt-8 space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-navy py-14 text-white sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Flam planning concierge
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              {siteConfig.contactEmailVerified
                ? `Questions about shaping a Flam port day? Email ${siteConfig.contactEmail}.`
                : "A destination email is being prepared. Until then, use the schedule, one-day guide and excursion pages on this site."}
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Contact
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
