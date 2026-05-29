import Link from "next/link";

import {
  getShipScheduleMonthPath,
  shipScheduleHub,
  shipScheduleMonths,
  type ShipScheduleMonth,
} from "@/lib/ship-schedule-months";

type ShipScheduleMonthLinksProps = {
  currentSlug?: string;
  heading?: string;
};

export function ShipScheduleMonthLinks({
  currentSlug,
  heading = "Browse schedules by month",
}: ShipScheduleMonthLinksProps) {
  const otherMonths = shipScheduleMonths.filter(
    (month) => month.slug !== currentSlug,
  );

  return (
    <section className="border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
          {heading}
        </h2>
        <ul className="flex flex-wrap gap-3">
          <li>
            <Link
              href={shipScheduleHub.path}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300"
            >
              All schedules
            </Link>
          </li>
          {otherMonths.map((month) => (
            <li key={month.slug}>
              <Link
                href={getShipScheduleMonthPath(month.slug)}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300"
              >
                {month.label}
                {!month.available ? " (coming soon)" : ""}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type ShipScheduleMonthCardsProps = {
  months?: ShipScheduleMonth[];
};

export function ShipScheduleMonthCards({
  months = shipScheduleMonths,
}: ShipScheduleMonthCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {months.map((month) => (
        <article
          key={month.slug}
          className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:border-gray-300 hover:shadow-md"
        >
          <div className="border-b border-gray-100 bg-gray-900 px-5 py-4">
            <h2 className="text-xl font-bold text-white">{month.label}</h2>
            <p className="mt-1 text-sm text-white/75">
              {month.available
                ? "Searchable timetable with arrival and departure times"
                : "Schedule publishing soon"}
            </p>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="flex-1 text-sm leading-6 text-gray-600">
              {month.available
                ? "View every cruise call in Flam for this month and plan shore excursions around your ship's hours ashore."
                : `We are preparing the ${month.label} cruise ship timetable. Check back soon or browse an available month in the meantime.`}
            </p>
            <Link
              href={getShipScheduleMonthPath(month.slug)}
              className={`mt-5 inline-flex w-fit rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                month.available
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "border border-gray-300 bg-white text-gray-800 hover:border-gray-400"
              }`}
            >
              {month.available ? `View ${month.label} schedule` : "Coming soon"}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
