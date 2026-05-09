import { type SchemaObject, SITE_URL, ORG_ID } from "./types";

/**
 * Organization schema — Cityroom Sp. z o.o.
 * Wstawiane na home + referencjowane przez @id na innych stronach.
 */
export function organizationSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Cityroom Sp. z o.o.",
    alternateName: "Cityroom",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo.png`,
    foundingDate: "2017",
    description:
      "Cityroom Sp. z o.o. — zarządzanie najmem długoterminowym mieszkań w Poznaniu z gwarancją czynszu. Od 2017 roku.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Poznań",
      addressCountry: "PL",
    },
    sameAs: [
      // do uzupełnienia gdy social aktywny / GBP link finalny
      // "https://www.facebook.com/cityroom.poznan",
      // "https://www.instagram.com/cityroompoznan",
      // "https://www.linkedin.com/company/cityroom",
    ],
  };
}
