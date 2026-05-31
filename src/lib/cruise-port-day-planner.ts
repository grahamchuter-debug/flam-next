export type PlannerExcursionLink = {
  label: string;
  href?: string;
};

export type PortTimeTier = {
  minHours: number;
  maxHours: number | null;
  label: string;
  confidenceScore: number;
  confidenceLabel: string;
  confidenceMessage: string;
  excursions: readonly PlannerExcursionLink[];
  dayPlan: readonly string[];
};

export type CruisePortDayPlannerConfig = {
  portName: string;
  heading: string;
  subtitle: string;
  returnBufferNote: string;
  tiers: readonly PortTimeTier[];
};

export const flamPortDayPlannerConfig: CruisePortDayPlannerConfig = {
  portName: "Flam",
  heading: "Flam Cruise Smart Planner",
  subtitle: "Plan your shore excursions around your actual time in port.",
  returnBufferNote:
    "Always confirm your cruise line's official all aboard time, as this may be earlier than the published departure time.",
  tiers: [
    {
      minHours: 0,
      maxHours: 4,
      label: "Under 4 hours",
      confidenceScore: 4,
      confidenceLabel: "Limited Port Call",
      confidenceMessage:
        "Best suited to short local sightseeing. Avoid longer excursions or combining multiple activities.",
      excursions: [
        { label: "Flam village walking time" },
        { label: "Short local sightseeing" },
        { label: "Check ship schedule", href: "/ship-schedule" },
      ],
      dayPlan: [
        "Disembark promptly and stay close to the pier",
        "Choose one short activity: village stroll or quick photo stop",
        "Skip longer railway or fjord tours, not enough margin to return safely",
        "Be back at the gangway by your recommended return time",
      ],
    },
    {
      minHours: 4,
      maxHours: 6,
      label: "4 to 6 hours",
      confidenceScore: 6,
      confidenceLabel: "Moderate Port Call",
      confidenceMessage:
        "Good for shorter Flam excursions with a sensible return to ship buffer.",
      excursions: [
        { label: "Stegastein Viewpoint", href: "/excursions/stegastein-viewpoint" },
        { label: "Flam Railway", href: "/excursions/flam-railway" },
        {
          label: "Fjord Cruise if sailing time fits",
          href: "/excursions/flam-fjord-cruise",
        },
      ],
      dayPlan: [
        "Arrive in Flam and head straight to your excursion meeting point",
        "Morning or early afternoon: one main excursion, railway or Stegastein",
        "Allow time to return to the pier with your 45 minute buffer",
        "Skip stacking a second major tour unless times are confirmed tight",
      ],
    },
    {
      minHours: 6,
      maxHours: 10,
      label: "6 to 10 hours",
      confidenceScore: 9,
      confidenceLabel: "Excellent Port Call",
      confidenceMessage:
        "Plenty of time for most Flam shore excursions with comfortable return to ship margins.",
      excursions: [
        { label: "Fjord Cruise", href: "/excursions/flam-fjord-cruise" },
        { label: "Flam Railway", href: "/excursions/flam-railway" },
        { label: "Stegastein Viewpoint", href: "/excursions/stegastein-viewpoint" },
      ],
      dayPlan: [
        "Arrive in Flam",
        "Morning: Fjord Cruise or Flam Railway",
        "Midday: Time in Flam village",
        "Afternoon: Stegastein Viewpoint or relaxed sightseeing",
        "Return to port by recommended return time",
      ],
    },
    {
      minHours: 10,
      maxHours: null,
      label: "10+ hours",
      confidenceScore: 10,
      confidenceLabel: "Full Day in Flam",
      confidenceMessage:
        "Ideal for combining multiple experiences or enjoying a relaxed day ashore.",
      excursions: [
        { label: "Fjord Cruise", href: "/excursions/flam-fjord-cruise" },
        { label: "Flam Railway", href: "/excursions/flam-railway" },
        { label: "Stegastein Viewpoint", href: "/excursions/stegastein-viewpoint" },
        { label: "Multiple excursions / relaxed port day" },
      ],
      dayPlan: [
        "Arrive early and book or confirm your first excursion departure",
        "Morning: Fjord Cruise or Flam Railway",
        "Midday: Lunch in Flam village and explore the waterfront",
        "Afternoon: Stegastein Viewpoint or your second headline experience",
        "Keep the final hour free near the pier for a calm return to ship",
      ],
    },
  ],
};

export const RECOMMENDED_RETURN_BUFFER_MINUTES = 45;
export const LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES = 30;

export function parseTimeToMinutes(time: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time.trim());

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 59) {
    return null;
  }

  return hours * 60 + minutes;
}

export function formatTimeLabel(time: string): string {
  const minutes = parseTimeToMinutes(time);
  if (minutes === null) {
    return time;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export function subtractMinutesFromTime(
  time: string,
  subtractMinutes: number,
): string | null {
  const totalMinutes = parseTimeToMinutes(time);
  if (totalMinutes === null) {
    return null;
  }

  let result = totalMinutes - subtractMinutes;
  if (result < 0) {
    result += 24 * 60;
  }

  const hours = Math.floor(result / 60) % 24;
  const minutes = result % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function calculatePortMinutes(
  arrival: string,
  departure: string,
): number | null {
  const arrivalMinutes = parseTimeToMinutes(arrival);
  const departureMinutes = parseTimeToMinutes(departure);

  if (arrivalMinutes === null || departureMinutes === null) {
    return null;
  }

  let diff = departureMinutes - arrivalMinutes;

  if (diff <= 0) {
    diff += 24 * 60;
  }

  return diff;
}

export function formatPortDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  if (minutes === 0) {
    return `${hours} hour${hours === 1 ? "" : "s"}`;
  }

  return `${hours} hour${hours === 1 ? "" : "s"} ${minutes} minute${minutes === 1 ? "" : "s"}`;
}

export function getTierForPortMinutes(
  totalMinutes: number,
  tiers: readonly PortTimeTier[],
): PortTimeTier {
  const hours = totalMinutes / 60;

  return (
    tiers.find((tier) => {
      const meetsMinimum = hours >= tier.minHours;
      const belowMaximum = tier.maxHours === null || hours < tier.maxHours;
      return meetsMinimum && belowMaximum;
    }) ?? tiers[tiers.length - 1]
  );
}

export function getReturnGuidance(departure: string) {
  return {
    departureLabel: formatTimeLabel(departure),
    recommendedReturn: subtractMinutesFromTime(
      departure,
      RECOMMENDED_RETURN_BUFFER_MINUTES,
    ),
    latestComfortableReturn: subtractMinutesFromTime(
      departure,
      LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES,
    ),
  };
}

export function getConfidenceTone(score: number): {
  badge: string;
  bar: string;
} {
  if (score >= 9) {
    return { badge: "bg-emerald-100 text-emerald-800", bar: "bg-emerald-500" };
  }
  if (score >= 6) {
    return { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" };
  }
  return { badge: "bg-orange-100 text-orange-800", bar: "bg-orange-500" };
}
