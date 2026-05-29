import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import {
  ShipScheduleMonthCards,
} from "@/components/ship-schedule-month-links";
import { ShipScheduleShell } from "@/components/ship-schedule-shell";
import { countFlamCruiseSchedule } from "@/lib/flam-cruise-schedule";
import { buildPageMetadata } from "@/lib/site-metadata";
import { shipScheduleHub, shipScheduleMonths } from "@/lib/ship-schedule-months";
import { buildWebPageSchema } from "@/lib/site-schema";

export const dynamic = "force-dynamic";

const pageMeta = {
  title: shipScheduleHub.title,
  description: shipScheduleHub.description,
  path: shipScheduleHub.path,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

export default function ShipScheduleHubPage() {
  const featuredMonths = shipScheduleMonths
    .filter((month) => month.available)
    .map((month) => ({
      ...month,
      shipCount: countFlamCruiseSchedule(month),
    }));

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
        title="Flam Cruise Ship Schedule"
        lead="Browse Flam cruise ship schedules by month. Find arrival and departure times for your ship, then plan shore excursions that fit your port day."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ship Schedule" },
        ]}
      >
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-4 text-gray-700">
            <p className="text-base leading-7 sm:text-lg">
              Flam welcomes cruise ships throughout the summer season. Use these
              monthly timetables to see which vessels call at the port, when
              they arrive, and when they depart — so you can book excursions with
              enough time to return before all aboard.
            </p>
            <p className="text-base leading-7 sm:text-lg">
              Select a month below to view the full schedule. Times are
              indicative for planning — always confirm final port times on your
              cruise line app.
            </p>
          </div>

          <div className="mt-10">
            <ShipScheduleMonthCards months={featuredMonths} />
          </div>

          <p className="mt-8 text-sm leading-6 text-gray-500">
            Looking for planning advice beyond port times? Read our{" "}
            <Link
              href="/flam-cruise-ship-schedule"
              className="font-medium text-blue-700 underline underline-offset-2"
            >
              cruise ship schedule guide
            </Link>{" "}
            for tips on busy fjord days and return-to-ship timing.
          </p>
        </section>
      </ShipScheduleShell>
    </>
  );
}
