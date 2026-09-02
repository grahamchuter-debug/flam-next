import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleMonthCards } from "@/components/ship-schedule-month-cards";
import {
  flamScheduleIntegrity,
  formatScheduleDate,
  getFlamMonthSummaries,
  scheduleDisclaimer,
  shipScheduleHubPath,
} from "@/lib/flam-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Flam Cruise Ship Schedule",
  description:
    "Browse Flam cruise ship schedules by month. View arrival times, departure times, and cruise lines visiting Flam, Norway to plan your shore excursions.",
  path: shipScheduleHubPath,
});

export default function ShipScheduleHubPage() {
  const months = getFlamMonthSummaries();
  const firstLabel = flamScheduleIntegrity.firstDate
    ? formatScheduleDate(flamScheduleIntegrity.firstDate)
    : "";
  const lastLabel = flamScheduleIntegrity.lastDate
    ? formatScheduleDate(flamScheduleIntegrity.lastDate)
    : "";

  return (
    <ContentPage
      title="Flam cruise ship schedule"
      lead={`Published calls for Flam from ${firstLabel} to ${lastLabel}. Find your month, check arrival and departure times, then choose a railway, fjord or village plan that fits.`}
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath={shipScheduleHubPath}
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule" },
      ]}
      ctaTitle="Plan your Flam port day"
      ctaText="Once you know your hours ashore, compare railway, fjord and viewpoint options with a clear return buffer."
      ctaHref="/one-day-in-flam"
      ctaButtonLabel="Plan your Flam day"
      relatedLinks={[
        { label: "Flam shore excursions", href: "/flam-shore-excursions" },
        { label: "One day in Flam", href: "/one-day-in-flam" },
        { label: "Port guide", href: "/flam-port-guide" },
        { label: "How to read Flam schedules", href: "/flam-cruise-ship-schedule" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This local timetable is filtered from the Norway Shore Excursions master
          schedule: {flamScheduleIntegrity.total} Flam calls,{" "}
          {flamScheduleIntegrity.byYear["2026"] ?? 0} in 2026 and{" "}
          {flamScheduleIntegrity.byYear["2027"] ?? 0} in 2027, across{" "}
          {flamScheduleIntegrity.uniqueShips} ships.
        </p>
      </section>

      <section>
        <h2>Browse by month</h2>
        <ShipScheduleMonthCards months={months} />
      </section>

      <section>
        <h2>Why ship times matter in Flam</h2>
        <p>
          A short call usually suits one highlight: railway or fjord, not both.
          A longer day still does not prove that two ticketed experiences will
          line up. Always leave a clear buffer before all aboard.
        </p>
        <p>
          Continue to{" "}
          <Link href="/one-day-in-flam">one day in Flam</Link>,{" "}
          <Link href="/flam-shore-excursions">excursion options</Link>, the{" "}
          <Link href="/flam-port-guide">port guide</Link>, or the editorial{" "}
          <Link href="/flam-cruise-ship-schedule">schedule reading guide</Link>.
        </p>
      </section>
    </ContentPage>
  );
}
