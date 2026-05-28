const images = {
  hero:
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Fl%C3%A5m_fr%C3%A5_cruiseskip_ved_kai.jpg",
  fjordCruise:
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/N%C3%A6r%C3%B8yfjord_-_The_world%27s_most_beautiful_fjord_%2831250274463%29.jpg",
  stegastein:
    "https://upload.wikimedia.org/wikipedia/commons/2/21/Stegastein_viewpoint_showing_Aurlandsfjord.jpg",
  flamRailway:
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/Fl%C3%A5msbana_-_Crowned_the_most_beautiful_train_journey_in_the_world_%2832021608906%29.jpg",
} as const;

const navLinks = [
  { label: "Excursions", href: "#tours" },
  { label: "About Flam", href: "#about" },
  { label: "Cruise Tips", href: "#tips" },
] as const;

const trustBadges = [
  "Return to ship on time",
  "Cruise passenger friendly",
  "Norway fjord specialists",
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-900/90 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
          <a href="#" className="text-base font-bold tracking-tight sm:text-lg">
            Flam Shore Excursions
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#tours"
            className="rounded-full bg-blue-600 px-3.5 py-1.5 text-xs font-semibold transition hover:bg-blue-500 sm:px-4 sm:py-2 sm:text-sm"
          >
            Book a Tour
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url('${images.hero}')` }}
      >
        <div className="bg-black/50">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center text-white sm:px-6 sm:py-28 md:py-32">
            <h1 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
              Flam Shore Excursions
            </h1>

            <p className="mx-auto mb-6 max-w-3xl text-base sm:mb-8 sm:text-xl md:text-2xl">
              Discover unforgettable Norway fjord adventures designed for cruise
              passengers.
            </p>

            <a
              href="#tours"
              className="inline-block rounded-full bg-blue-600 px-6 py-3 text-base font-semibold transition hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-lg"
            >
              View Excursions
            </a>

            <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
              {trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:px-4 sm:text-sm"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-6 text-4xl font-bold">Explore Flam Like a Local</h2>

        <p className="text-lg leading-8 text-gray-700">
          Welcome to Flam Shore Excursions, your specialist guide to Norway cruise
          experiences. Discover scenic fjord cruises on the UNESCO-listed
          Naeroyfjord, breathtaking viewpoints like Stegastein above the
          Aurlandsfjord, mountain railways and small-group tours carefully
          selected for cruise ship guests visiting Flam.
        </p>
      </section>

      {/* Tour Cards */}
      <section id="tours" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <h2 className="mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl">
          Popular Flam Tours
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <img
              src={images.fjordCruise}
              alt="Naeroyfjord scenic cruise near Flam, Norway"
              className="h-40 w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-3.5 md:p-4">
              <h3 className="mb-1.5 text-base font-semibold">
                Flam Fjord Cruise
              </h3>

              <p className="mb-3 flex-1 text-sm leading-5 text-gray-600">
                Experience dramatic fjords and waterfalls on a scenic cruise
                through the Naeroyfjord from Flam.
              </p>

              <button className="w-fit rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-black">
                View Tour
              </button>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <img
              src={images.stegastein}
              alt="Stegastein viewpoint overlooking Aurlandsfjord near Flam"
              className="h-40 w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-3.5 md:p-4">
              <h3 className="mb-1.5 text-base font-semibold">
                Stegastein Viewpoint Tour
              </h3>

              <p className="mb-3 flex-1 text-sm leading-5 text-gray-600">
                Visit one of Norway&apos;s most famous panoramic viewpoints above
                the Aurlandsfjord.
              </p>

              <button className="w-fit rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-black">
                View Tour
              </button>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <img
              src={images.flamRailway}
              alt="Flamsbana scenic railway through the mountains above Flam"
              className="h-40 w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-3.5 md:p-4">
              <h3 className="mb-1.5 text-base font-semibold">
                Flam Railway Experience
              </h3>

              <p className="mb-3 flex-1 text-sm leading-5 text-gray-600">
                Ride one of the world&apos;s most scenic railway journeys through
                Norway&apos;s mountains on the Flamsbana.
              </p>

              <button className="w-fit rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-black">
                View Tour
              </button>
            </div>
          </article>
        </div>
      </section>

      <section id="tips" className="border-t bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-4 text-3xl font-bold">Cruise Day Tips</h2>
          <p className="text-lg leading-8 text-gray-700">
            Most ships dock right in Flam village, steps from the railway station
            and fjord cruise piers. Book popular excursions early on busy days, and
            allow time to return before all aboard.
          </p>
        </div>
      </section>
    </main>
  );
}
