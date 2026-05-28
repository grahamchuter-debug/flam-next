import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { ShipScheduleMonthLinks } from "@/components/ship-schedule-month-links";
import { ShipScheduleShell } from "@/components/ship-schedule-shell";
import { ShipScheduleTable } from "@/components/ship-schedule-table";
import { loadFlamCruiseSchedule } from "@/lib/flam-cruise-schedule";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  requireShipScheduleMonth,
  shipScheduleHub,
} from "@/lib/ship-schedule-months";
import { siteImages } from "@/lib/site-images";
import { buildWebPageSchema } from "@/lib/site-schema";

export const dynamic = "force-dynamic";

const monthSlug = "june-2026";
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

export default function June2026ShipSchedulePage() {
  const schedule = loadFlamCruiseSchedule(month.monthKey);

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
        title="Flam Cruise Ship Schedule June 2026"
        lead="Plan your June port day in Flam with arrival and departure times for every cruise call. Match shore excursions to your ship's hours ashore."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ship Schedule", href: shipScheduleHub.path },
          { label: "June 2026" },
        ]}
      >
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-4 text-gray-700">
            <p className="text-base leading-7 sm:text-lg">
              This June 2026 timetable helps cruise passengers visiting Flam
              match shore excursions to their ship&apos;s port hours. Search by
              ship name, date, or cruise line, then sort any column to find your
              call at a glance.
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
