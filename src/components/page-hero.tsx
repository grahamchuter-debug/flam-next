type PageHeroProps = {
  image: string;
  imageAlt: string;
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
};

export function PageHero({
  image,
  imageAlt,
  children,
  centered = false,
  className = "",
}: PageHeroProps) {
  return (
    <section
      role="img"
      aria-label={imageAlt}
      className={`page-hero relative ${className}`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="page-hero-overlay">
        <div
          className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 ${
            centered ? "text-center" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
