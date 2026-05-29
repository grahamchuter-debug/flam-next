import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { flamRailwayExcursion } from "@/lib/excursions/flam-railway";
import { buildPageMetadata } from "@/lib/site-metadata";

const excursion = flamRailwayExcursion;

export const metadata: Metadata = buildPageMetadata({
  title: excursion.metaTitle,
  description: excursion.metaDescription,
  path: excursion.path,
  ogImage: excursion.heroImage,
  ogImageAlt: excursion.heroImageAlt,
});

export default function FlamRailwayPage() {
  return <ExcursionDetailPage excursion={excursion} />;
}
