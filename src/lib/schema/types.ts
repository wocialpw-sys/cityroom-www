/**
 * Cityroom — Schema.org TypeScript types.
 *
 * Wszystkie buildery zwracają obiekty zgodne z `SchemaObject`. Stringify do
 * JSON-LD w komponencie strony przez `JSON.stringify`.
 */

export interface SchemaObject {
  "@context": "https://schema.org";
  "@type": string;
  "@id"?: string;
  [key: string]: unknown;
}

export const SITE_URL = "https://cityroom.pl";
export const ORG_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
