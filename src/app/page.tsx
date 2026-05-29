import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildItemListSchema, buildWebPageSchema } from "@/lib/site-schema";
import { siteImages } from "@/lib/site-images";

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
  ogImageAlt:
    "Flam cruise port on the Aurlandsfjord with ships docked at the village pier",
  absoluteTitle: true,
});

const trustBadges = [
  "Return to ship on time",
  "Cruise passenger friendly",
  "Norway fjord specialists",
] as const;

const popularTours = [
  {
    name: "Flam Fjord Cruise",
    description:
      "Scenic Naeroyfjord cruise for cruise passengers departing from Flam pier.",
  },
  {
    name: "Stegastein Viewpoint Tour",
    description:
      "Panoramic Aurlandsfjord viewpoint tour above Flam for cruise guests.",
  },
  {
    name: "Flam Railway Experience",
    description:
      "Flamsbana railway journey from Flam station for cruise ship visitors.",
  },
] as const;

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(popularTours),
        ]}
      />
      <main className="min-h-screen bg-white text-gray-900">
        <section
          role="img"
          aria-label="Flam cruise port on the Aurlandsfjord with ships docked at the village pier"
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url('${siteImages.hero}')` }}
        >
          <div className="bg-black/50">
            <div className="mx-auto max-w-6xl px-4 py-20 text-center text-white sm:px-6 sm:py-28 md:py-32">
              <h1 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
                Flam Shore Excursions
              </h1>

              <p className="mx-auto mb-6 max-w-3xl text-base sm:mb-8 sm:text-xl md:text-2xl">
                Discover unforgettable Norway fjord adventures designed for cruise
                passengers.
              </p>

              <a
                href="#tours"
                className="inline-block rounded-full bg-blue-600 px-6 py-3 text-base font-semibold transition hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-lg"
              >
                View Excursions
              </a>

              <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
                {trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:px-4 sm:text-sm"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Explore Flam Like a Local
          </h2>

          <p className="text-base leading-8 text-gray-700 sm:text-lg">
            Welcome to Flam Shore Excursions, your specialist guide to Norway cruise
            experiences. Discover scenic fjord cruises on the UNESCO-listed
            Naeroyfjord, breathtaking viewpoints like Stegastein above the
            Aurlandsfjord, mountain railways and small-group tours carefully
            selected for cruise ship guests visiting Flam.
          </p>
        </section>

        <section
          id="tours"
          className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24"
        >
          <h2 className="mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl">
            Popular Flam Tours
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <img
                src={siteImages.fjordCruise}
                alt="Naeroyfjord scenic cruise boat surrounded by steep fjord cliffs near Flam, Norway"
                className="h-40 w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-3.5 md:p-4">
                <h3 className="mb-1.5 text-base font-semibold">
                  Flam Fjord Cruise
                </h3>

                <p className="mb-3 flex-1 text-sm leading-5 text-gray-600">
                  Experience dramatic fjords and waterfalls on a scenic cruise
                  through the Naeroyfjord from Flam.
                </p>

                <Link
                  href="/excursions/flam-fjord-cruise"
                  className="w-fit rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-black"
                >
                  View Tour
                </Link>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <img
                src={siteImages.stegastein}
                alt="Stegastein viewpoint platform overlooking the Aurlandsfjord near Flam, Norway"
                className="h-40 w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-3.5 md:p-4">
                <h3 className="mb-1.5 text-base font-semibold">
                  Stegastein Viewpoint Tour
                </h3>

                <p className="mb-3 flex-1 text-sm leading-5 text-gray-600">
                  Visit one of Norway&apos;s most famous panoramic viewpoints above
                  the Aurlandsfjord.
                </p>

                <Link
                  href="/excursions/stegastein-viewpoint"
                  className="w-fit rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-black"
                >
                  View Tour
                </Link>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <img
                src={siteImages.flamRailway}
                alt="Flamsbana scenic train on a mountainside above the Flam valley in Norway"
                className="h-40 w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-3.5 md:p-4">
                <h3 className="mb-1.5 text-base font-semibold">
                  Flam Railway Experience
                </h3>

                <p className="mb-3 flex-1 text-sm leading-5 text-gray-600">
                  Ride one of the world&apos;s most scenic railway journeys through
                  Norway&apos;s mountains on the Flamsbana.
                </p>

                <Link
                  href="/excursions/flam-railway"
                  className="w-fit rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-black"
                >
                  View Tour
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section id="tips" className="border-t bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Cruise Day Tips</h2>
            <p className="text-base leading-8 text-gray-700 sm:text-lg">
              Most ships dock right in Flam village, steps from the railway station
              and fjord cruise piers. Book popular excursions early on busy days, and
              allow time to return before all aboard.
            </p>
          </div>
        </section>

        <section className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Check your ship time before booking
            </h2>
            <p className="mb-6 text-base leading-8 text-gray-700 sm:text-lg">
              Match excursions to your arrival and departure times so you can enjoy
              Flam and still return before all aboard.
            </p>
            <ul className="flex flex-wrap gap-3">
              <li>
                <Link
                  href="/ship-schedule/june-2026"
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300"
                >
                  June 2026 schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/ship-schedule/july-2026"
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300"
                >
                  July 2026 schedule
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
