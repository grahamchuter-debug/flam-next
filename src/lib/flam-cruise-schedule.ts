import { readFileSync } from "node:fs";
import path from "node:path";

import type { CruiseScheduleEntry } from "@/lib/flam-cruise-schedule-types";
import type { ShipScheduleMonth } from "@/lib/ship-schedule-months";

export type { CruiseScheduleEntry } from "@/lib/flam-cruise-schedule-types";

const DATA_DIR = path.join(process.cwd(), "public/data");

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current.trim());
  return values;
}

function parseCsvEntries(raw: string): CruiseScheduleEntry[] {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) {
    return [];
  }

  return lines
    .slice(1)
    .map((line) => {
      const [date, ship, arrival, departure, cruiseLine = ""] = parseCsvLine(line);

      return {
        date,
        ship,
        arrival,
        departure,
        cruiseLine: cruiseLine.trim(),
      };
    })
    .filter((entry) => entry.date && entry.ship);
}

export function loadFlamCruiseSchedule(month: ShipScheduleMonth): CruiseScheduleEntry[] {
  const csvPath = path.join(DATA_DIR, month.csvFile);
  const raw = readFileSync(csvPath, "utf-8");
  const entries = parseCsvEntries(raw);

  return entries.filter((entry) => entry.date.startsWith(month.monthKey));
}

export function countFlamCruiseSchedule(month: ShipScheduleMonth): number {
  return loadFlamCruiseSchedule(month).length;
}
