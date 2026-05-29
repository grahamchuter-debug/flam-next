import type { ReactNode } from "react";

export type ExploreNorwegianPortsConfig = {
  intro: ReactNode;
  cardTitle: string;
  cardTitleHref: string;
  cardDescription: string;
  ctaLabel: string;
  ctaHref: string;
};

type ExploreNorwegianPortsProps = {
  config: ExploreNorwegianPortsConfig;
};

export function ExploreNorwegianPorts({ config }: ExploreNorwegianPortsProps) {
  return (
    <section
      id="norwegian-cruise-ports"
      className="border-t bg-gray-50"
      aria-labelledby="explore-norwegian-ports-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <h2
          id="explore-norwegian-ports-heading"
          className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          <span aria-hidden="true" className="mr-2">
            🇳🇴
          </span>
          Explore More Norwegian Cruise Ports
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch">
          <div className="text-base leading-8 text-gray-700 sm:text-lg">
            {config.intro}
          </div>

          <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
            <div
              className="relative flex h-40 shrink-0 items-center justify-center bg-gradient-to-br from-gray-800 to-blue-700 sm:h-44"
              aria-hidden="true"
            >
              <span className="text-5xl opacity-90">🇳🇴</span>
            </div>

            <div className="flex flex-1 flex-col p-3.5 md:p-4">
              <h3 className="mb-1.5 text-base font-semibold text-gray-900">
                <a
                  href={config.cardTitleHref}
                  className="text-gray-900 underline-offset-2 transition hover:text-blue-700 hover:underline"
                >
                  {config.cardTitle}
                </a>
              </h3>

              <p className="mb-3 flex-1 text-sm leading-5 text-gray-600">
                {config.cardDescription}
              </p>

              <a
                href={config.ctaHref}
                className="w-fit rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-black"
              >
                {config.ctaLabel}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export const explorePortsFromFlam: ExploreNorwegianPortsConfig = {
  intro: (
    <>
      Many Norwegian fjord cruises visit multiple ports during the same itinerary.
      If Stavanger is also on your route, discover fjord cruises, walking tours and
      cruise planning tools designed specifically for cruise passengers — including{" "}
      <a
        href="https://stavangershoreexcursions.com"
        className="font-medium text-blue-700 underline-offset-2 hover:underline"
      >
        Stavanger Shore Excursions
      </a>{" "}
      and a detailed{" "}
      <a
        href="https://stavangershoreexcursions.com/stavanger-port-guide"
        className="font-medium text-blue-700 underline-offset-2 hover:underline"
      >
        Stavanger Port Guide
      </a>
      .
    </>
  ),
  cardTitle: "Stavanger Shore Excursions",
  cardTitleHref: "https://stavangershoreexcursions.com",
  cardDescription:
    "Explore Lysefjord cruises, local walking tours, Stavanger port guides and cruise planning resources.",
  ctaLabel: "Visit Stavanger",
  ctaHref: "https://stavangershoreexcursions.com",
};
