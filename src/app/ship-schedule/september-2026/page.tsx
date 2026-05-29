import { ShipScheduleMonthPage } from "@/components/ship-schedule-month-page";
import { buildShipScheduleMonthMetadata } from "@/lib/ship-schedule-month-page";

export const dynamic = "force-dynamic";

const monthSlug = "september-2026";

export const metadata = buildShipScheduleMonthMetadata(monthSlug);

export default function September2026ShipSchedulePage() {
  return <ShipScheduleMonthPage monthSlug={monthSlug} />;
}
