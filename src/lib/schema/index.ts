/**
 * Cityroom — Schema.org barrel export.
 *
 * Użycie:
 *   import { serviceSchema, faqPageSchema, breadcrumbSchema } from "../lib/schema";
 *
 * Konwencja: każda strona buduje array `schemas: SchemaObject[]` w frontmatter
 * i renderuje przez .map z JSON.stringify w slot="schema" w Base.astro.
 */

export type { SchemaObject } from "./types";
export type { FaqItem } from "./faqPage";
export type { BreadcrumbItem } from "./breadcrumb";

export { organizationSchema } from "./organization";
export { localBusinessSchema } from "./localBusiness";
export { serviceSchema } from "./service";
export { faqPageSchema } from "./faqPage";
export { breadcrumbSchema } from "./breadcrumb";
