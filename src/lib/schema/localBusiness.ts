import {
  type SchemaObject,
  SITE_URL,
  LOCAL_BUSINESS_ID,
  ORG_ID,
} from "./types";

/**
 * LocalBusiness schema — subtyp PropertyManagementCompany.
 *
 * Premia GEO 2026: Google AI Overviews silnie premiuje LocalBusiness
 * + AggregateRating dla local intent ("zarządzanie najmem Poznań").
 */
export function localBusinessSchema(opts: {
  rating: number; // 4.9
  reviewCount: number; // 103
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RealEstateAgent"],
    "@id": LOCAL_BUSINESS_ID,
    name: "Cityroom Sp. z o.o.",
    description:
      "Zarządzanie najmem długoterminowym mieszkań w Poznaniu z gwarancją czynszu wypłacanego 10. dnia każdego miesiąca, niezależnie od obłożenia.",
    url: SITE_URL,
    image: `${SITE_URL}/brand/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Poznań",
      addressRegion: "Wielkopolska",
      addressCountry: "PL",
    },
    areaServed: {
      "@type": "City",
      name: "Poznań",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: opts.rating.toFixed(1),
      reviewCount: opts.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    parentOrganization: { "@id": ORG_ID },
  };
}
