import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { ShipScheduleMonthLinks } from "@/components/ship-schedule-month-links";
import { ShipScheduleShell } from "@/components/ship-schedule-shell";
import { ShipScheduleTable } from "@/components/ship-schedule-table";
import { loadFlamCruiseSchedule } from "@/lib/flam-cruise-schedule";
import {
  getShipScheduleMonthBreadcrumbLabel,
  getShipScheduleMonthLead,
  getShipScheduleMonthOverview,
  getShipScheduleMonthPlanning,
} from "@/lib/ship-schedule-month-page";
import {
  requireShipScheduleMonth,
  shipScheduleHub,
} from "@/lib/ship-schedule-months";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";

type ShipScheduleMonthPageProps = {
  monthSlug: string;
};

export function ShipScheduleMonthPage({ monthSlug }: ShipScheduleMonthPageProps) {
  const month = requireShipScheduleMonth(monthSlug);
  const schedule = loadFlamCruiseSchedule(month);
  const path = `/ship-schedule/${monthSlug}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Ship Schedule", href: shipScheduleHub.path },
    { label: getShipScheduleMonthBreadcrumbLabel(month) },
  ] as const;

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path,
            title: `${month.title} | Flam Shore Excursions`,
            description: month.description,
          }),
          buildBreadcrumbSchema(breadcrumbs, path),
        ]}
      />
      <ShipScheduleShell
        title={month.title}
        lead={getShipScheduleMonthLead(month)}
        breadcrumbs={[...breadcrumbs]}
        ctaTitle="See Flam shore excursions for your cruise day"
        ctaHref="/flam-shore-excursions"
        ctaLabel="View Flam shore excursions"
      >
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-4 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">
              {month.label} overview
            </h2>
            <p className="text-base leading-7 sm:text-lg">
              {getShipScheduleMonthOverview(month)}
            </p>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
              Daily cruise ship schedule
            </h2>
            <ShipScheduleTable entries={schedule} />
          </div>

          <p className="mt-6 text-sm leading-6 text-gray-500">
            Times are indicative for planning purposes. Your cruise line app
            remains the authoritative source for arrival, all aboard, and
            departure.
          </p>

          <div className="mx-auto mt-12 max-w-3xl space-y-4 border-t border-gray-200 pt-10 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">
              Cruise passenger planning
            </h2>
            {getShipScheduleMonthPlanning(month).map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 sm:text-lg">
                {paragraph}
              </p>
            ))}
            <p className="text-base leading-7 sm:text-lg">
              Browse{" "}
              <Link
                href="/flam-shore-excursions"
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                Flam shore excursions
              </Link>
              , read the{" "}
              <Link
                href="/flam-port-guide"
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                Flam port guide
              </Link>
              , or plan your day with our{" "}
              <Link
                href="/one-day-in-flam"
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                one day in Flam
              </Link>{" "}
              itinerary.
            </p>
          </div>
        </section>

        <ShipScheduleMonthLinks currentSlug={monthSlug} />
      </ShipScheduleShell>
    </>
  );
}
