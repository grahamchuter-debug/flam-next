import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { stegasteinViewpointExcursion } from "@/lib/excursions/stegastein-viewpoint";
import { buildPageMetadata } from "@/lib/site-metadata";

const excursion = stegasteinViewpointExcursion;

export const metadata: Metadata = buildPageMetadata({
  title: excursion.metaTitle,
  description: excursion.metaDescription,
  path: excursion.path,
  ogImage: excursion.heroImage,
  ogImageAlt: excursion.heroImageAlt,
});

export default function StegasteinViewpointPage() {
  return <ExcursionDetailPage excursion={excursion} />;
}
