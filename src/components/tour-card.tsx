import Link from "next/link";

type TourCardProps = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  accent?: "blue" | "red";
};

export function TourCard({
  href,
  image,
  imageAlt,
  title,
  description,
  accent = "blue",
}: TourCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[var(--border-light)] bg-white">
      <div className="relative h-52 w-full shrink-0 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div
          className={`absolute bottom-0 left-0 h-1 w-full ${
            accent === "red" ? "accent-bar-red" : "accent-bar-blue"
          }`}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-slate-900">
          {title}
        </h3>

        <p className="mb-5 flex-1 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <Link href={href} className="btn-primary-on-light w-fit">
          View excursion
        </Link>
      </div>
    </article>
  );
}
