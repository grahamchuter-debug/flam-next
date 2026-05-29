"use client";

import { useMemo, useState } from "react";

import {
  calculatePortMinutes,
  flamPortDayPlannerConfig,
  formatPortDuration,
  getTierForPortMinutes,
  type CruisePortDayPlannerConfig,
} from "@/lib/cruise-port-day-planner";

type CruisePortDayPlannerProps = {
  config?: CruisePortDayPlannerConfig;
  heading?: string;
  description?: string;
};

export function CruisePortDayPlanner({
  config = flamPortDayPlannerConfig,
  heading = "Cruise port day planner",
  description = `Enter your ship's arrival and departure times to see how long you have in ${config.portName} and which excursion types typically fit.`,
}: CruisePortDayPlannerProps) {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  const result = useMemo(() => {
    if (!arrival || !departure) {
      return null;
    }

    const totalMinutes = calculatePortMinutes(arrival, departure);

    if (totalMinutes === null) {
      return { error: "Enter valid arrival and departure times." as const };
    }

    const tier = getTierForPortMinutes(totalMinutes, config.tiers);

    return {
      totalMinutes,
      durationLabel: formatPortDuration(totalMinutes),
      tier,
    };
  }, [arrival, config.tiers, departure]);

  return (
    <section
      aria-labelledby="port-day-planner-heading"
      className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6"
    >
      <h2
        id="port-day-planner-heading"
        className="!mt-0 text-xl font-bold text-gray-900 sm:text-2xl"
      >
        {heading}
      </h2>
      <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
        {description}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Arrival time</span>
          <input
            type="time"
            value={arrival}
            onChange={(event) => setArrival(event.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Departure time
          </span>
          <input
            type="time"
            value={departure}
            onChange={(event) => setDeparture(event.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </label>
      </div>

      {result ? (
        <div className="mt-5 rounded-lg border border-blue-100 bg-white p-4 sm:p-5">
          {"error" in result ? (
            <p className="text-sm text-red-700">{result.error}</p>
          ) : (
            <>
              <p className="text-sm font-medium text-gray-500">
                Total time in port
              </p>
              <p className="mt-1 text-2xl font-bold text-gray-900">
                {result.durationLabel}
              </p>
              <p className="mt-4 text-sm font-semibold text-blue-800">
                {result.tier.label} — recommended excursion types
              </p>
              <ul className="mt-2 space-y-1.5">
                {result.tier.recommendations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ) : (
        <p className="mt-5 text-sm text-gray-500">
          Add your ship&apos;s port times to see excursion recommendations.
        </p>
      )}
    </section>
  );
}
