import {
  getFlamMonthSummaries,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/flam-schedules";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/flam-shore-excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/flam-fjord-cruise",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/stegastein-viewpoint",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/flam-railway",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/flam-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-flam",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-flam-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-flam",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: shipScheduleHubPath,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/flam-cruise-ship-schedule",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
] as const;

export function getSiteRoutes() {
  const monthRoutes = getFlamMonthSummaries().map((month) => ({
    path: shipScheduleMonthPath(month.slug),
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));
  return [...staticRoutes, ...monthRoutes];
}

export const siteRoutes = staticRoutes;
