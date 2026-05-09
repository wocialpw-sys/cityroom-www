# Information Architecture — pillar + cluster mapa

**Status:** v0.1 — wypełniona w sesji GEO/AEO 09.05.2026 (Blok 1). Do walidacji w trakcie produkcji content.

---

## Architektura — dwa pillar

| Rola | URL | Audiencja | Cel |
|---|---|---|---|
| **Home / brand pillar** | `cityroom.pl/` | brand‑aware (50 % organic = brand search), bezpośredni, kanały social | Konwersja → kalkulator + telefon. Treść kompresowana, sales‑oriented. |
| **Pillar tematyczny** | `cityroom.pl/zarzadzanie-najmem-poznan/` | unaware (SEO + GEO), długi ogon kategorii | Ranking #1 na intencyjne "zarządzanie najmem Poznań" + GEO citation source. Treść rozszerzona, edukacyjna, content‑rich. |

**Dlaczego dwa pillar (a nie jeden):** konkurencja wygrywa AI citations dokładnie tym wzorcem (`m2rent.pl/zarzadzanie-najmem-poznan` = 46 mentions, osobna strona). Gemini silnie premiuje keyword‑match w slug. Home obciążona dwoma celami (brand + unaware) zwykle przegrywa oba.

---

## Mapa stron MVP — 10 stron, 4 priorytety

| # | URL | Funkcja | Priorytet | Główny intent (PromptEye baseline + cel) |
|---|---|---|---|---|
| 1 | `cityroom.pl/` | Home / brand pillar | **P0** | brand‑aware, konwersja |
| 2 | `/zarzadzanie-najmem-poznan/` | Pillar tematyczny | **P0** | "Jaka firma w Poznaniu zajmuje się zarządzaniem najmem mieszkań dla właścicieli?" (39 % → 65 %) |
| 3 | `/gwarancja-czynszu-poznan/` | Mechanika gwarancji + proof | **P1** | "Która firma oferuje właścicielom mieszkań w Poznaniu gwarantowany czynsz za wynajem?" (46 %, pos 1.1 → 70 %) + "Jak działa najem z gwarancją czynszu w Poznaniu?" (43 % → 70 %) |
| 4 | `/jak-nie-zajmowac-sie-najmem-mieszkania/` | Listicle "5 sposobów" | **P1** | "Jakie są najlepsze rozwiązania dla właściciela mieszkania, który nie chce zajmować się najemcami?" (**0 % → 40 %** — krytyczna luka, single highest‑leverage gap) + "Jak bezpiecznie wynająć mieszkanie w Poznaniu bez samodzielnej obsługi najemców?" (57 %) |
| 5 | `/wynajem-pokoi-studenci-poznan/` | Specjalizacja pokojowa | **P1** | "Jakie firmy w Poznaniu obsługują wynajem mieszkań na pokoje dla studentów?" (54 %, pos 3.5 → 65 %, pos 1.5) |
| 6 | `/jak-dziala-cityroom/` | Proces 5–6 kroków + HowTo schema | **P2** | trust + pre‑decision research |
| 7 | `/zarzadzanie-najmem-poznan-opinie/` | Opinie z GBP, twarze klientów | **P2** | "Cityroom opinie", trust verification (już cytowane 29 mentions) |
| 8 | `/samodzielny-wynajem-czy-firma-zarzadzajaca/` | Listicle porównawczy + TCO | **P2** | "Co wybrać: samodzielny wynajem mieszkania czy firma zarządzająca najmem w Poznaniu?" (18 % → 40 %) + "Czy oddanie mieszkania firmie zarządzającej najmem w Poznaniu się opłaca?" (29 % → 45 %) + "Komu warto powierzyć mieszkanie..." (50 % → 65 %) |
| 9 | `/o-nas/` | Paweł + Błażej + zespół, 8 lat historii | **P2** | trust, twarze, pre‑decision research |
| 10 | `/umowa-cityroom/` | Umowa po § 2 jako proof | **P3** | trust deepening, late funnel |

**Cutover MVP = P0 + P1 = 5 stron** (home + pillar tematyczny + 3 cluster). P2‑P3 dochodzą iteracyjnie post‑cutover, agentem AI.

---

## Hierarchia internal linking

```
cityroom.pl/                                    [HOME — brand pillar]
├── /zarzadzanie-najmem-poznan/                 [PILLAR tematyczny]
│   ├── /gwarancja-czynszu-poznan/              [P1 cluster]
│   ├── /jak-nie-zajmowac-sie-najmem-mieszkania/  [P1 cluster — krytyczna luka]
│   ├── /wynajem-pokoi-studenci-poznan/         [P1 cluster]
│   ├── /jak-dziala-cityroom/                   [P2 cluster]
│   ├── /samodzielny-wynajem-czy-firma-zarzadzajaca/  [P2 cluster]
│   └── /zarzadzanie-najmem-poznan-opinie/      [P2 cluster — działa już 29 mentions]
├── /o-nas/                                     [P2 — z nav, nie z pillar]
└── /umowa-cityroom/                            [P3 — z /jak-dziala-cityroom/ + stopka]
```

### Cross‑linking cluster ↔ cluster

- **`gwarancja-czynszu` ↔ `samodzielny-vs-firma`** — klient porównujący ostatecznie ląduje na gwarancji
- **`pokoje-studenci` ↔ `gwarancja-czynszu`** — gwarancja szczególnie wartościowa w pokojowym (wyższa rotacja)
- **`jak-nie-zajmowac` ↔ wszystkie** — listicle "5 sposobów" wymienia "delegować firmie z gwarancją" jako jeden wariant → linki out do gwarancji + jak‑dziala‑cityroom + opinie
- **`opinie` ↔ wszystkie** — każda strona ma sekcję "co mówią właściciele" z linkiem do `/zarzadzanie-najmem-poznan-opinie/`

### Wzorzec "Powiązane" na końcu każdej cluster page

3 linki do innych cluster pages — wzmacnia GEO topical authority + UX. Schema: `relatedItem` w `Article` schema.

---

## Cele KPI per strona (po cutover, 30.06.2026)

| URL | Brand Visibility (PromptEye) | Avg position |
|---|---|---|
| `/zarzadzanie-najmem-poznan/` (pillar) | dla "Jaka firma..." 39 % → **65 %** | 5.4 → **2** |
| `/gwarancja-czynszu-poznan/` | dla "Która firma..." 46 % → **75 %** | 1.1 → **1** |
| `/gwarancja-czynszu-poznan/` | dla "Jak działa..." 43 % → **70 %** | 1.8 → **1** |
| `/jak-nie-zajmowac-sie-najmem-mieszkania/` | dla "Jakie są najlepsze..." **0 % → 40 %** | None → **2** |
| `/wynajem-pokoi-studenci-poznan/` | dla "Jakie firmy... pokoje studenci" 54 % → **65 %** | 3.5 → **1.5** |
| `/samodzielny-wynajem-czy-firma-zarzadzajaca/` | dla "Co wybrać..." 18 % → **40 %** | 4.5 → **2.5** |
| **Ogółem** | **44 % → 60 %+** | 3 → **2** |

---

## Otwarte do następnych bloków sesji

- [ ] **Blok 2 — Crawlability + indexability** (Step 2 Aleyda): robots.txt production, AI bots, SSR, canonicals
- [ ] **Blok 3 — Chunk‑level retrieval + answer synthesis** (Step 4-5): zasady pisania per typ strony, TLDR pattern, listicle structure → wpisać do `brief-agenta-content.md`
- [ ] **Blok 4 — Citation‑worthiness + proof points** (Step 6): wypełnienie `proof-points.md` proof pointami zdefiniowanymi jako AI‑readable units
- [ ] **Blok 5 — Schema.org map** (per typ strony): Organization, LocalBusiness PropertyManagementCompany, Service, FAQPage, HowTo, Article, Person, Review, AggregateRating, ItemList
- [ ] **Blok 6 — llms.txt + llms‑full.txt**: finalna struktura, search intents, external references
- [ ] **Blok 7 — Brand mentions / digital PR** (Step 7): lista 5–10 placów (branżowe media, fora, Reddit Polska)
- [ ] **Blok 8 — Pomiar GEO** (Step 10): protokół tygodniowych snapshotów PromptEye + manualne testy w 5 LLM‑ach (z Claude dodanym)
- [ ] **Blok 9 — FAQ master list** (sesja dump pytań od Pawła z 8 lat rozmów) → `faq-master.md`
- [ ] **Blok 10 — URL slug walidacja**: czy proponowane slugi są keyword‑optymalne? Audyt vs konkurencja w PromptEye

---

## Pełen kontekst

- Skill `cityroom-marketing-strategy` — strategia, JTBD
- Skill `cityroom-geo-strategy` — Aleyda 10 Steps, baseline PromptEye
- Memory `cityroom_audit.md` — GEO baseline maj 2026
- Memory `cityroom_strategy_foundation.md` — UM, proof points
- Memory `cityroom_strategy_execution.md` — pricing block (W1‑W4), DONE PL stopka

## Update log

- **2026‑05‑09 v0.1** — pierwsza wersja po sesji GEO Blok 1. Decyzje: dwa pillar, MVP 5 stron, internal linking hierarchy, KPI per strona.
