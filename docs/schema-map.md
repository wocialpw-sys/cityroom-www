# Schema.org map — co JSON‑LD na której stronie

**Status:** placeholder. Wypełnić w sesji GEO/AEO (Blok 5: Schema.org strategy).

## Reguły ogólne (z skill `cityroom-geo-strategy`)

- **JSON‑LD only** (nie microdata, nie RDFa)
- Wstrzykiwane przez `<slot name="schema">` w `Base.astro`
- Walidacja: schema.org validator + Google Rich Results Test przed merge
- Helper functions w `src/lib/schema/` (Organization, LocalBusiness, Service, FAQPage, HowTo, Article, Person, Review, AggregateRating)

## Strona główna (homepage / pillar)

- `Organization` + `sameAs` (FB, IG, LinkedIn, GBP)
- `LocalBusiness` (subtyp `PropertyManagementCompany`, fallback `RealEstateAgent`)
- `aggregateRating` z GBP (4,9 / 103)
- `address`, `geo`, `openingHours`, `telephone`

## Cluster pages

- `Service` — typ usługi (zarządzanie najmem, gwarancja czynszu, wynajem pokojowy)
- `FAQPage` — sekcja Q&A pattern na dole
- `BreadcrumbList`

## Strona "O nas"

- `Person` dla Pawła i Błażeja (`jobTitle`, `worksFor`, photo)
- `Organization` z `founder`

## Blog / artykuły

- `Article` + `author` (Person)
- `datePublished`, `dateModified` (kluczowe dla freshness)
- `BlogPosting` dla wpisów blogowych

## Listicle / "Top N" content

- **Triple stack:** `ItemList` + `FAQPage` + `Article` (1,8× cytowań w AI Overviews)

## Proof points

- `Review` + `AggregateRating`
- `HowTo` dla procesu współpracy ("Jak zacząć współpracę z Cityroom — 5 kroków")

## Implementacja

```ts
// src/lib/schema/organization.ts
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cityroom Sp. z o.o.",
    // ... TODO
  };
}
```

```astro
---
// src/pages/index.astro
import { organizationSchema } from "../lib/schema/organization";
const schema = organizationSchema();
---

<Base title="..." description="...">
  <script type="application/ld+json" slot="schema" set:html={JSON.stringify(schema)} />
  ...
</Base>
```

## Następne kroki

- [ ] Sesja GEO/AEO — finalizacja mapy schema
- [ ] Implementacja helperów w `src/lib/schema/`
- [ ] Walidacja każdej strony przed merge
