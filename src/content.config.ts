import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* ============================================================
   Cityroom — Astro Content Collections schemas

   Zasady:
   - Wszystkie cluster pages = collection `pages`
   - Blog (post-cutover) = collection `blog`
   - FAQ master jako struktura w docs/, nie collection (to brief, nie content)

   Frontmatter validation = TypeScript first. Każda strona musi mieć:
   - title, description (meta)
   - slug (musi pasować do nazwy pliku)
   - pageType (do schema selection)
   - intent[] (do internal linking + GEO mapping)
   - publishedAt, updatedAt (freshness signal)
   - faq[] (FAQPage schema)
   - relatedPages[] (sekcja "Powiązane")
   ============================================================ */

const pageTypes = [
  "pillar",
  "cluster-mechanics",
  "cluster-listicle",
  "cluster-opinie",
  "cluster-process",
  "about",
  "umowa",
] as const;

const schemaTypes = ["Service", "Article", "HowTo"] as const;

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    pageType: z.enum(pageTypes),

    /** Search intents (od PromptEye lub planowane) — do GEO mapping */
    intent: z.array(z.string()).default([]),

    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),

    /** Sekcja "Powiązane" na końcu — 3 cluster pages */
    relatedPages: z
      .array(
        z.object({
          slug: z.string(),
          title: z.string(),
        }),
      )
      .default([]),

    /** FAQ section — będzie renderowane jako FAQPage JSON-LD + visible HTML */
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .default([]),

    /** Główny schema type (dodatkowe schema dodajemy zawsze: BreadcrumbList) */
    schemaType: z.enum(schemaTypes).default("Service"),

    /** Service schema dane (jeśli schemaType === "Service") */
    serviceData: z
      .object({
        serviceName: z.string(),
        areaServed: z.string().default("Poznań, Polska"),
      })
      .optional(),

    /** Hero CTA — opcjonalnie override */
    heroCta: z
      .object({
        primary: z.object({ label: z.string(), href: z.string() }),
        secondary: z
          .object({ label: z.string(), href: z.string() })
          .optional(),
      })
      .optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
};
