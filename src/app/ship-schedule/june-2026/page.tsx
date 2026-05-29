import { ShipScheduleMonthPage } from "@/components/ship-schedule-month-page";
import { buildShipScheduleMonthMetadata } from "@/lib/ship-schedule-month-page";

const monthSlug = "june-2026";

export const metadata = buildShipScheduleMonthMetadata(monthSlug);

export default function June2026ShipSchedulePage() {
  return <ShipScheduleMonthPage monthSlug={monthSlug} />;
}
