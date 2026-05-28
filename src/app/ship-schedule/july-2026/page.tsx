import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { ShipScheduleMonthLinks } from "@/components/ship-schedule-month-links";
import { ShipScheduleShell } from "@/components/ship-schedule-shell";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  getShipScheduleMonthPath,
  requireShipScheduleMonth,
  shipScheduleHub,
  shipScheduleMonths,
} from "@/lib/ship-schedule-months";
import { siteImages } from "@/lib/site-images";
import { buildWebPageSchema } from "@/lib/site-schema";

const monthSlug = "july-2026";
const month = requireShipScheduleMonth(monthSlug);

const juneMonth = shipScheduleMonths.find((entry) => entry.slug === "june-2026");

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
        lead="The July 2026 Flam cruise ship timetable is being prepared. Browse June 2026 in the meantime or return soon for the full schedule."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ship Schedule", href: shipScheduleHub.path },
          { label: "July 2026" },
        ]}
      >
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-gray-50 px-6 py-10 text-center shadow-sm">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              July 2026 cruise schedule coming soon.
            </p>
            <p className="mt-3 text-base leading-7 text-gray-600">
              We are compiling arrival and departure times for cruise ships
              visiting Flam in July 2026. Check back shortly or view the
              available June timetable now.
            </p>
            {juneMonth ? (
              <Link
                href={getShipScheduleMonthPath(juneMonth.slug)}
                className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 sm:text-base"
              >
                View June 2026 schedule
              </Link>
            ) : null}
          </div>
        </section>

        <ShipScheduleMonthLinks currentSlug={monthSlug} />
      </ShipScheduleShell>
    </>
  );
}
