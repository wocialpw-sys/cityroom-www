# Schema.org map — co JSON-LD na której stronie

**Status:** v0.1 — wypełniona w sesji GEO 09.05.2026 (Blok 5). Implementacja w fazie 2 (content production).

---

## Reguły ogólne

- **JSON-LD only** (nie microdata, nie RDFa) — Google + LLM-y preferują
- **Wstrzykiwane przez `<slot name="schema">`** w `Base.astro` (już zaimplementowane)
- **Walidacja przed merge:**
  1. [Schema.org Validator](https://validator.schema.org/)
  2. [Google Rich Results Test](https://search.google.com/test/rich-results)
- **Helper functions** w `src/lib/schema/` — TypeScript, type-safe, reusable
- **Triple stack dla listicles:** Article + ItemList + FAQPage = **1,8× więcej cytowań** w AI Overviews (skill `cityroom-geo-strategy` § 3)

---

## Per typ strony

### Strona główna `cityroom.pl/`

| Schema | Cel |
|---|---|
| `Organization` | Brand identity, sameAs do social/GBP |
| `LocalBusiness` (subtyp `PropertyManagementCompany`, fallback `RealEstateAgent`) | Local SEO + GEO |
| `AggregateRating` | 4,9 / 103 z GBP — hero proof point |
| `BreadcrumbList` | nawigacyjny |

### Pillar tematyczny `/zarzadzanie-najmem-poznan/`

| Schema | Cel |
|---|---|
| `Service` | typ usługi: zarządzanie najmem długoterminowym |
| `FAQPage` | sekcja Q&A na końcu (5-7 pytań) |
| `BreadcrumbList` | `Home → Zarządzanie najmem Poznań` |

### Cluster — mechanika (`/gwarancja-czynszu-poznan/`, `/wynajem-pokoi-studenci-poznan/`)

| Schema | Cel |
|---|---|
| `Service` | usługa konkretna (gwarancja czynszu / wynajem pokojowy) |
| `FAQPage` | 3-5 pytań |
| `BreadcrumbList` | `Home → Pillar → Cluster` |

### Cluster — proces (`/jak-dziala-cityroom/`)

| Schema | Cel |
|---|---|
| `Service` | wprowadzenie usługi |
| `HowTo` | **5-6 stepów procesu** (kluczowe pod AI Overviews — HowTo schema priority) |
| `FAQPage` | 3-5 pytań |
| `BreadcrumbList` | |

### Cluster — listicle (`/jak-nie-zajmowac-sie-najmem-mieszkania/`, `/samodzielny-wynajem-czy-firma-zarzadzajaca/`)

**Triple stack** (1,8× cytowań):

| Schema | Cel |
|---|---|
| `Article` | meta + author + datePublished + dateModified |
| `ItemList` | numbered list (5 sposobów / 4 opcje) z `position` per item |
| `FAQPage` | 3-5 pytań |
| `BreadcrumbList` | |

### Cluster — opinie (`/zarzadzanie-najmem-poznan-opinie/`)

| Schema | Cel |
|---|---|
| `AggregateRating` | 4,9 / 103 (Cityroom) lub 4,93 / 168 (łącznie z Biuro) |
| `Review` × N | każda wyróżniona opinia jako osobny `Review` z `author`, `reviewRating`, `datePublished` |
| `Organization` | linkujący do reviewBody |
| `BreadcrumbList` | |

### O nas (`/o-nas/`)

| Schema | Cel |
|---|---|
| `Organization` | z `founder` = Paweł, Błażej |
| `Person` × 2 | Paweł Wocial + Błażej Wocial — `name`, `jobTitle`, `image`, `worksFor`, `sameAs` (LinkedIn jeśli aktywne) |
| `BreadcrumbList` | |

### Umowa (`/umowa-cityroom/`)

| Schema | Cel |
|---|---|
| `Article` | dokument informacyjny |
| `BreadcrumbList` | |

### Wycena bridge (`/wycena-mieszkania-pod-wynajem-poznan/`)

| Schema | Cel |
|---|---|
| `Service` | usługa wyceny |
| `BreadcrumbList` | |

### Blog (przyszłe `/blog/*`)

| Schema | Cel |
|---|---|
| `Article` lub `BlogPosting` | meta artykułu |
| `Author` (`Person`) | autor artykułu |
| `ItemList` + `FAQPage` | dla listicle posts (triple stack) |
| `BreadcrumbList` | |

---

## Helpers TypeScript — `src/lib/schema/`

Struktura modułów:

```
src/lib/schema/
  index.ts           — barrel export
  organization.ts    — buildOrganization()
  localBusiness.ts   — buildLocalBusiness() z PropertyManagementCompany
  service.ts         — buildService(type, name, description)
  faqPage.ts         — buildFaqPage(items: {q, a}[])
  howTo.ts           — buildHowTo(name, steps: {name, text}[])
  article.ts         — buildArticle(title, description, datePublished, dateModified, author)
  itemList.ts        — buildItemList(items: {name, position, url?}[])
  review.ts          — buildReview(author, rating, body, date) + buildAggregateRating(rating, count)
  person.ts          — buildPerson(name, jobTitle, image, sameAs)
  breadcrumb.ts      — buildBreadcrumb(items: {name, url}[])
```

### Przykład użycia w stronie Astro

```astro
---
import Base from "../layouts/Base.astro";
import { buildService, buildFaqPage, buildBreadcrumb } from "../lib/schema";

const title = "Gwarancja czynszu Poznań — Cityroom";
const description = "...";

const schema = [
  buildService({
    name: "Gwarancja czynszu",
    description: "Wypłata stałego czynszu 10. dnia każdego miesiąca, niezależnie od obłożenia.",
    provider: "Cityroom Sp. z o.o.",
  }),
  buildFaqPage([
    { q: "Jak działa gwarancja czynszu jeśli mieszkanie stoi puste?", a: "..." },
    { q: "Co się dzieje jeśli najemca nie płaci?", a: "..." },
  ]),
  buildBreadcrumb([
    { name: "Strona główna", url: "https://cityroom.pl/" },
    { name: "Zarządzanie najmem Poznań", url: "https://cityroom.pl/zarzadzanie-najmem-poznan/" },
    { name: "Gwarancja czynszu", url: "https://cityroom.pl/gwarancja-czynszu-poznan/" },
  ]),
];
---

<Base title={title} description={description}>
  {schema.map((s) => (
    <script type="application/ld+json" slot="schema" set:html={JSON.stringify(s)} />
  ))}
  <main>...</main>
</Base>
```

---

## Walidacja przed merge

Każda strona, na której zmieniamy schema, musi przejść przez:

1. **`npm run build`** — Astro przetwarza JSON-LD w `<head>`
2. **Schema.org Validator** — wklej URL preview Vercela → musi być zero errors
3. **Google Rich Results Test** — sprawdza eligibility do rich snippets (FAQ, HowTo, Review, AggregateRating widoczne w SERP)
4. **Manual sanity:** view-source w przeglądarce, grep `application/ld+json` — czy każdy script jest valid JSON

---

## Pułapki implementacyjne

- **Nie duplikujemy `Organization`** — wystarczy raz na home + raz w stopce. Inne strony tylko **referencjonują** przez `@id`.
- **Liczby w `aggregateRating`** zaokrąglamy do **1 miejsca po przecinku** (4,9, nie 4,90 ani 4,93).
- **`datePublished` + `dateModified`** muszą być w ISO 8601 (`2026-05-09T00:00:00+02:00`). Modified zawsze ≥ published.
- **`@id` dla każdego entitiy** — żeby LLM/Google rozumiał że dwa razy "Cityroom" w różnych schematach to ta sama firma.
- **Adresy w `Organization` / `LocalBusiness`** w PostalAddress, nie wolny tekst.

---

## Update log

- **2026-05-09 v0.1** — pierwsza wersja w sesji GEO Blok 5. Per typ strony, helpery TS, walidacja, pułapki.
