import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { siteNavLinks } from "@/lib/site-nav";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="text-lg font-bold tracking-tight">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Independent cruise port guides for passengers visiting Flam,
              Norway. Plan shore excursions with enough time to return to your
              ship before all aboard.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Flam guides
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  Home
                </Link>
              </li>
              {siteNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-5 text-white/60">
          © {year} {siteConfig.copyrightEntity}. Cruise passenger guides for
          Flam, Aurlandsfjord, and Naeroyfjord shore days.
        </p>
      </div>
    </footer>
  );
}
