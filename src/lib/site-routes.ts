export const siteRoutes = [
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
    path: "/ship-schedule",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/ship-schedule/june-2026",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/ship-schedule/july-2026",
    priority: 0.7,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/flam-cruise-ship-schedule",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
] as const;
