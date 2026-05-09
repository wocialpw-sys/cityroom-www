import { type SchemaObject, SITE_URL } from "./types";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * BreadcrumbList schema — nawigacyjna ścieżka.
 *
 * Przykład: Home → Zarządzanie najmem Poznań → Gwarancja czynszu Poznań
 */
export function breadcrumbSchema(items: BreadcrumbItem[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
