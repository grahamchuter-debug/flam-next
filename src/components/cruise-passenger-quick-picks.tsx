const quickPicks = [
  {
    icon: "🏆",
    label: "Best Overall Month",
    month: "June",
    accent: "border-amber-200 bg-amber-50",
    labelColor: "text-amber-800",
  },
  {
    icon: "☀️",
    label: "Warmest Month",
    month: "July",
    accent: "border-orange-200 bg-orange-50",
    labelColor: "text-orange-800",
  },
  {
    icon: "📸",
    label: "Best Photography Month",
    month: "September",
    accent: "border-violet-200 bg-violet-50",
    labelColor: "text-violet-800",
  },
  {
    icon: "🚢",
    label: "Quietest Cruise Month",
    month: "May",
    accent: "border-emerald-200 bg-emerald-50",
    labelColor: "text-emerald-800",
  },
  {
    icon: "👨‍👩‍👧",
    label: "Best Family Month",
    month: "August",
    accent: "border-sky-200 bg-sky-50",
    labelColor: "text-sky-800",
  },
] as const;

export function CruisePassengerQuickPicks() {
  return (
    <section
      aria-labelledby="quick-picks-heading"
      className="border-b border-gray-200 bg-gray-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h2
          id="quick-picks-heading"
          className="text-center text-lg font-bold tracking-tight text-gray-900 sm:text-xl"
        >
          Cruise Passenger Quick Picks
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-600 sm:text-base">
          At-a-glance month recommendations for planning your Flam port day.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {quickPicks.map((pick) => (
            <li
              key={pick.label}
              className={`flex flex-col rounded-xl border p-4 shadow-sm ${pick.accent}`}
            >
              <span className="text-2xl" aria-hidden="true">
                {pick.icon}
              </span>
              <span
                className={`mt-2 text-xs font-semibold uppercase tracking-wide ${pick.labelColor}`}
              >
                {pick.label}
              </span>
              <span className="mt-1 text-2xl font-bold text-gray-900">
                {pick.month}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
