export type ShipScheduleMonth = {
  slug: string;
  label: string;
  title: string;
  description: string;
  cardTitle: string;
  cardDescription: string;
  available: boolean;
  monthKey: string;
  csvFile: string;
};

export const shipScheduleHub = {
  path: "/ship-schedule",
  title: "Flam Cruise Ship Schedule",
  description:
    "Browse Flam cruise ship schedules by month. View arrival times, departure times, and cruise lines visiting Flam, Norway to plan your shore excursions.",
} as const;

export const shipScheduleMonths: ShipScheduleMonth[] = [
  {
    slug: "june-2026",
    label: "June 2026",
    title: "Flam Cruise Ship Schedule June 2026",
    description:
      "View the Flam cruise ship schedule for June 2026 including arrival times, departure times, and cruise lines visiting Flam, Norway.",
    cardTitle: "June 2026 Cruise Schedule",
    cardDescription: "View all June cruise ship arrivals in Flam",
    available: true,
    monthKey: "2026-06",
    csvFile: "flam-cruise-schedule-2026.csv",
  },
  {
    slug: "july-2026",
    label: "July 2026",
    title: "Flam Cruise Ship Schedule July 2026",
    description:
      "View the Flam cruise ship schedule for July 2026 including arrival times, departure times, and cruise lines visiting Flam, Norway.",
    cardTitle: "July 2026 Cruise Schedule",
    cardDescription: "View all July cruise ship arrivals in Flam",
    available: true,
    monthKey: "2026-07",
    csvFile: "flam-cruise-schedule-july-2026.csv",
  },
  {
    slug: "august-2026",
    label: "August 2026",
    title: "Flam Cruise Ship Schedule August 2026",
    description:
      "View the Flam cruise ship schedule for August 2026 including arrival times, departure times, and cruise lines visiting Flam, Norway.",
    cardTitle: "August 2026 Cruise Schedule",
    cardDescription: "View all August cruise ship arrivals in Flam",
    available: true,
    monthKey: "2026-08",
    csvFile: "august-2026.csv",
  },
  {
    slug: "september-2026",
    label: "September 2026",
    title: "Flam Cruise Ship Schedule September 2026",
    description:
      "View the Flam cruise ship schedule for September 2026 including arrival times, departure times, and cruise lines visiting Flam, Norway.",
    cardTitle: "September 2026 Cruise Schedule",
    cardDescription: "View all September cruise ship arrivals in Flam",
    available: true,
    monthKey: "2026-09",
    csvFile: "september-2026.csv",
  },
];

export function getShipScheduleMonth(slug: string): ShipScheduleMonth | undefined {
  return shipScheduleMonths.find((month) => month.slug === slug);
}

export function requireShipScheduleMonth(slug: string): ShipScheduleMonth {
  const month = getShipScheduleMonth(slug);

  if (!month) {
    throw new Error(`Missing ship schedule config for ${slug}`);
  }

  return month;
}

export function getShipScheduleMonthPath(slug: string): string {
  return `/ship-schedule/${slug}`;
}
