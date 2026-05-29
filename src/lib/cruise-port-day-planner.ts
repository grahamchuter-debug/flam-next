export type PortTimeTier = {
  minHours: number;
  maxHours: number | null;
  label: string;
  recommendations: readonly string[];
};

export type CruisePortDayPlannerConfig = {
  portName: string;
  tiers: readonly PortTimeTier[];
};

export const flamPortDayPlannerConfig: CruisePortDayPlannerConfig = {
  portName: "Flam",
  tiers: [
    {
      minHours: 0,
      maxHours: 4,
      label: "Under 4 hours",
      recommendations: ["Short scenic tours", "Local walking tours"],
    },
    {
      minHours: 4,
      maxHours: 6,
      label: "4–6 hours",
      recommendations: ["Stegastein Viewpoint", "Flam Railway"],
    },
    {
      minHours: 6,
      maxHours: 10,
      label: "6–10 hours",
      recommendations: ["Fjord Cruise", "Full day excursions"],
    },
    {
      minHours: 10,
      maxHours: null,
      label: "10+ hours",
      recommendations: ["Multiple excursions", "Independent exploration"],
    },
  ],
};

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
