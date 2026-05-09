import { type SchemaObject, SITE_URL, ORG_ID } from "./types";

/**
 * Service schema — dla cluster pages typu mechanika/proces.
 *
 * @param opts.serviceName — np. "Gwarancja czynszu", "Wynajem pokojowy"
 * @param opts.description — krótki opis usługi (1-2 zdania)
 * @param opts.areaServed — domyślnie "Poznań, Polska"
 * @param opts.url — URL strony usługi
 */
export function serviceSchema(opts: {
  serviceName: string;
  description: string;
  url: string;
  areaServed?: string;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.serviceName,
    description: opts.description,
    url: opts.url,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: opts.areaServed?.split(",")[0].trim() ?? "Poznań",
    },
    serviceType: "Property Management",
    audience: {
      "@type": "Audience",
      audienceType: "Apartment owners",
    },
  };
}
