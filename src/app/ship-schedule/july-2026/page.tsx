import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { ShipScheduleMonthLinks } from "@/components/ship-schedule-month-links";
import { ShipScheduleShell } from "@/components/ship-schedule-shell";
import { ShipScheduleTable } from "@/components/ship-schedule-table";
import { loadFlamCruiseSchedule } from "@/lib/flam-cruise-schedule";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  getShipScheduleMonthPath,
  requireShipScheduleMonth,
  shipScheduleHub,
} from "@/lib/ship-schedule-months";
import { siteImages } from "@/lib/site-images";
import { buildWebPageSchema } from "@/lib/site-schema";

export const dynamic = "force-dynamic";

const monthSlug = "july-2026";
const month = requireShipScheduleMonth(monthSlug);

const pageMeta = {
  title: month.title,
  description: month.description,
  path: `/ship-schedule/${monthSlug}`,
  ogImage: siteImages.hero,
  ogImageAlt:
    "Flam cruise port on the Aurlandsfjord with ships docked at the village pier",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

export default function July2026ShipSchedulePage() {
  const schedule = loadFlamCruiseSchedule(month);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: `${pageMeta.title} | Flam Shore Excursions`,
            description: pageMeta.description,
          }),
        ]}
      />
      <ShipScheduleShell
        title="Flam Cruise Ship Schedule July 2026"
        lead="Plan your July port day in Flam with arrival and departure times for every cruise call. Match shore excursions to your ship's hours ashore."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ship Schedule", href: shipScheduleHub.path },
          { label: "July 2026" },
        ]}
        ctaTitle="See Flam shore excursions for your cruise day"
        ctaHref="/flam-shore-excursions"
        ctaLabel="View Flam shore excursions"
      >
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-4 text-gray-700">
            <p className="text-base leading-7 sm:text-lg">
              This July 2026 timetable helps cruise passengers visiting Flam
              match shore excursions to their ship&apos;s port hours. Search by
              ship name, date, or cruise line, then sort any column to find your
              call at a glance.
            </p>
            <p className="text-base leading-7 sm:text-lg">
              Use your arrival and departure times to choose{" "}
              <Link
                href="/flam-shore-excursions"
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                Flam shore excursions
              </Link>{" "}
              that fit your hours ashore — with enough buffer to return to ship
              on time before all aboard.
            </p>
            <p className="text-sm leading-6 text-gray-600">
              Browse the{" "}
              <Link
                href={shipScheduleHub.path}
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                ship schedule hub
              </Link>
              , compare with the{" "}
              <Link
                href={getShipScheduleMonthPath("june-2026")}
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                June 2026 schedule
              </Link>
              , or jump straight to shore excursion options for your cruise day.
            </p>
          </div>

          <div className="mt-10">
            <ShipScheduleTable entries={schedule} />
          </div>

          <p className="mt-6 text-sm leading-6 text-gray-500">
            Times are indicative for planning purposes. Your cruise line app
            remains the authoritative source for arrival, all-aboard, and
            departure.
          </p>
        </section>

        <ShipScheduleMonthLinks currentSlug={monthSlug} />
      </ShipScheduleShell>
    </>
  );
}
