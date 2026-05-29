import Link from "next/link";

import {
  getShipScheduleMonthPath,
  shipScheduleHub,
  shipScheduleMonths,
  type ShipScheduleMonth,
} from "@/lib/ship-schedule-months";

export type ShipScheduleMonthCardData = ShipScheduleMonth & {
  shipCount: number;
};

const planningLinks = [
  { label: "Port Guide", href: "/flam-port-guide" },
  { label: "One Day in Flam", href: "/one-day-in-flam" },
] as const;

type ShipScheduleMonthLinksProps = {
  currentSlug?: string;
  heading?: string;
};

export function ShipScheduleMonthLinks({
  currentSlug,
  heading = "Browse schedules and plan your port day",
}: ShipScheduleMonthLinksProps) {
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
              Ship Schedule Hub
            </Link>
          </li>
          {shipScheduleMonths.map((month) => (
            <li key={month.slug}>
              <Link
                href={getShipScheduleMonthPath(month.slug)}
                aria-current={currentSlug === month.slug ? "page" : undefined}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  currentSlug === month.slug
                    ? "border-blue-200 bg-blue-50 text-blue-800"
                    : "border-gray-200 bg-white text-gray-800 hover:border-gray-300"
                }`}
              >
                {month.label} Schedule
              </Link>
            </li>
          ))}
          {planningLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type ShipScheduleMonthCardsProps = {
  months: ShipScheduleMonthCardData[];
};

export function ShipScheduleMonthCards({ months }: ShipScheduleMonthCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {months.map((month) => (
        <Link
          key={month.slug}
          href={getShipScheduleMonthPath(month.slug)}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:border-blue-200 hover:shadow-md"
        >
          <div className="border-b border-gray-100 bg-gray-900 px-5 py-4 transition group-hover:bg-gray-800">
            <h2 className="text-lg font-bold text-white sm:text-xl">
              {month.cardTitle}
            </h2>
            <p className="mt-1 text-sm text-white/75">{month.cardDescription}</p>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="text-3xl font-bold text-gray-900">{month.shipCount}</p>
            <p className="mt-1 text-sm text-gray-500">
              {month.shipCount === 1 ? "cruise ship scheduled" : "cruise ships scheduled"}
            </p>
            <span className="mt-5 inline-flex w-fit rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-blue-500">
              View schedule
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
