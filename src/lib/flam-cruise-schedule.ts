import { readFileSync } from "node:fs";
import path from "node:path";

import type { CruiseScheduleEntry } from "@/lib/flam-cruise-schedule-types";

export type { CruiseScheduleEntry } from "@/lib/flam-cruise-schedule-types";

const CSV_PATH = path.join(
  process.cwd(),
  "public/data/flam-cruise-schedule-2026.csv",
);

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

export function loadFlamCruiseSchedule(monthKey?: string): CruiseScheduleEntry[] {
  const raw = readFileSync(CSV_PATH, "utf-8");
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) {
    return [];
  }

  const entries = lines.slice(1).map((line) => {
    const [date, ship, arrival, departure, cruiseLine = ""] = parseCsvLine(line);

    return {
      date,
      ship,
      arrival,
      departure,
      cruiseLine: cruiseLine.trim(),
    };
  });

  if (!monthKey) {
    return entries;
  }

  return entries.filter((entry) => entry.date.startsWith(monthKey));
}
