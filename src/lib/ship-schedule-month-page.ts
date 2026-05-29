import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/site-metadata";
import { siteImages } from "@/lib/site-images";
import {
  requireShipScheduleMonth,
  type ShipScheduleMonth,
} from "@/lib/ship-schedule-months";

export function buildShipScheduleMonthMetadata(monthSlug: string): Metadata {
  const month = requireShipScheduleMonth(monthSlug);

  return buildPageMetadata({
    title: month.title,
    description: month.description,
    path: `/ship-schedule/${monthSlug}`,
    ogImage: siteImages.hero,
    ogImageAlt:
      "Flam cruise port on the Aurlandsfjord with ships docked at the village pier",
  });
}

export function getShipScheduleMonthOverview(month: ShipScheduleMonth): string {
  return `This ${month.label} timetable shows every cruise ship scheduled to visit Flam, with arrival and departure times to help you plan shore excursions around your port day. Search by ship name, date, or cruise line, then sort any column to find your call quickly.`;
}

export function getShipScheduleMonthPlanning(month: ShipScheduleMonth): string[] {
  return [
    `Use this ${month.label} schedule to match Flam shore excursions to your ship's hours ashore. Treat your cruise line app as the source of truth for all-aboard times — build a personal buffer of 30–45 minutes before that deadline.`,
    `On busy days when multiple ships call Flam, disembark early and head straight to your excursion meeting point. Compare overlapping calls across months if your itinerary is flexible.`,
    `Times listed here are indicative for planning. Weather, fjord traffic, and operational changes can shift arrival or departure after schedules are published.`,
  ];
}

export function getShipScheduleMonthLead(month: ShipScheduleMonth): string {
  return `Plan your ${month.label.split(" ")[0]} port day in Flam with arrival and departure times for every cruise call. Match shore excursions to your ship's hours ashore.`;
}

export function getShipScheduleMonthBreadcrumbLabel(
  month: ShipScheduleMonth,
): string {
  return month.label;
}
