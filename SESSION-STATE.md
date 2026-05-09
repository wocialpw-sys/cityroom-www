# SESSION-STATE — Cityroom-www

**Stan repo na koniec sesji 09.05.2026.** Pełen log sesji: [`Cityroom\sesje_2026-05\01_foundation-faza-1-sesja-geo.md`](../Cityroom/sesje_2026-05/01_foundation-faza-1-sesja-geo.md).

---

## Stan: 🟡 Częściowo zamknięte

- **Faza 1 foundation:** ✅
- **Sesja GEO/AEO 10 bloków:** ✅ (wszystkie dokumenty w `docs/`)
- **Pierwsza cluster page `/gwarancja-czynszu-poznan/`:** ❌ **DO REWRITE** (design crap, voice do edycji — feedback Pawła)
- **Hello world index:** ❌ **DO REWRITE** (nie wykorzystuje reference implementation)

---

## Co jest LIVE

- **Repo:** https://github.com/wocialpw-sys/cityroom-www
- **Vercel:** auto-deploy z `main` (free tier)
- **Stage live:**
  - https://www.melawini.pl/ — hello world (do rewrite)
  - https://www.melawini.pl/gwarancja-czynszu-poznan/ — pierwsza cluster page (do rewrite)
  - https://melawini.pl/ (apex) — DNS propagacja, SSL po pełnej propagacji (do 2 h od zmiany DNS)
- **Stage SEO:** `Disallow: /` w `robots.txt` + `noindex, nofollow` w meta — nikt nie indeksuje, nikt poza Pawłem nie widzi

## Commity

| Hash | Co |
|---|---|
| `1c8c40d` | Foundation: Astro 6 + TS + Tailwind 4 + brand tokens + dokumenty placeholdery |
| `11f895e` | Sesja GEO/AEO 10 bloków — wszystkie dokumenty w `docs/` wypełnione |
| `a0aaf94` | Pierwsza cluster page `/gwarancja-czynszu-poznan/` + Content Collections + schema helpers |

---

## Następna sesja — start tutaj

### 1. Wczytaj kontekst (auto)

- Skill `cityroom-marketing-strategy` (auto-load) — strategia + voice
- Skill `cityroom-geo-strategy` (auto-load) — GEO + baseline PromptEye
- Memory `cityroom_audit.md` — pełny audyt + GEO baseline
- Ten plik (`SESSION-STATE.md`) — stan repo
- [`Cityroom\sesje_2026-05\01_foundation-faza-1-sesja-geo.md`](../Cityroom/sesje_2026-05/01_foundation-faza-1-sesja-geo.md) — pełen log sesji 09.05

### 2. Pierwsze 5 min — review reference implementation

**Paweł otwiera lokalnie:** [`docs/brand/reference_implementation/ui_kits/owners/index.html`](docs/brand/reference_implementation/ui_kits/owners/index.html)

To pełen interaktywny mockup home Cityroom z 8 sekcjami (Nav + Hero + Stats + How it works + Services + Testimonial + ContactForm + Footer). Plus [`preview.png`](docs/brand/reference_implementation/ui_kits/owners/preview.png) jako screenshot.

### 3. Decyzja Pawła — pierwszy ruch

Powiedz Rocky'emu **jedną z dwóch rzeczy:**

**Opcja A:** *"Tak, recreate reference implementation pixel-perfect"*
→ Rocky recreate Nav → review → Hero → review → Stats → review (sekcja po sekcji, 60-90 min). Hero copy: 3 warianty wariant z mojej strony, ty wybierasz.

**Opcja B:** *"Nie, mam inną wizję"*
→ Daj 2-3 linki do referencji stron które ci się podobają (B2B premium nieruchomościowych). 30 min designu razem przed kodem.

### 4. Decyzja hero copy

3 warianty (jeden wybierasz):

- **A. Generic z handoffu:** *"Twoje mieszkanie pracuje. Ty odpoczywasz."*
- **B. Strategiczny z UM + proof:** *"Stały czynsz 10. dnia każdego miesiąca. Niezależnie od obłożenia."* + subhead 130 mieszkań / retention 95 % / od 2017
- **C. UM jako headline:** *"Regularna niezawodność. Co miesiąc i w kryzysie."* + subhead z COVID 2020 jako proof

### 5. Tryb pracy

- **Bez batch produkcji.** Jeden artefakt → review → kolejny.
- **Bez "może lepiej".** Rocky stawia tezę "to spełnia brief, idziemy dalej" i jej broni.
- **Reference implementation = blueprint** (pixel-perfect recreate), nie inspiracja.
- **Voice = strategia Cityroom**, nie generic Claude Design.

---

## Struktura repo

```
cityroom-www/
├── src/
│   ├── pages/
│   │   ├── index.astro                      ← hello world (DO REWRITE)
│   │   └── gwarancja-czynszu-poznan.astro   ← pierwsza cluster page (DO REWRITE)
│   ├── content/
│   │   └── pages/
│   │       └── gwarancja-czynszu-poznan.md  ← Markdown content (1500 słów, voice do edycji)
│   ├── content.config.ts                    ← Content Collections schema (DZIAŁA)
│   ├── lib/schema/                          ← Schema.org TS helpers (DZIAŁA)
│   │   ├── types.ts
│   │   ├── organization.ts
│   │   ├── localBusiness.ts
│   │   ├── service.ts
│   │   ├── faqPage.ts
│   │   ├── breadcrumb.ts
│   │   └── index.ts
│   ├── layouts/
│   │   └── Base.astro                       ← HTML shell, lang="pl", meta + OG + font preload (DZIAŁA)
│   └── styles/
│       ├── tokens.css                       ← brand tokens z handoffu (DZIAŁA, single source of truth)
│       └── global.css                       ← tokens + Tailwind 4 @theme + .prose (DZIAŁA)
├── public/
│   ├── fonts/                               ← Ibrand-PL + Manrope 7 weights (self-hosted, DZIAŁA)
│   ├── brand/                               ← logo, punktor, 19 illustrations (DZIAŁA)
│   ├── llms.txt                             ← AI search index, struktura 5-sekcji (DZIAŁA)
│   └── robots.txt                           ← stage = Disallow / (production wariant w komentarzu)
├── docs/
│   ├── brand/                               ← brand handoff Claude Design
│   │   ├── HANDOFF.md
│   │   ├── SYSTEM.md
│   │   ├── SKILL.md
│   │   └── reference_implementation/        ← BLUEPRINT do recreate (preview.png + 8 JSX + index.html)
│   ├── ia-mapa.md                           ← pillar + cluster mapa, 10 stron, KPI per strona
│   ├── brief-agenta-content.md              ← brief agenta AI (audiencja, voice, struktura, per-typ-strony)
│   ├── proof-points.md                      ← ~50 AI-readable units, single source of truth
│   ├── schema-map.md                        ← schema.org per typ strony
│   ├── faq-master.md                        ← 40 pytań (do uzupełnienia 50+ z Pawłem)
│   ├── brand-mentions.md                    ← digital PR plan 12 tygodni
│   ├── pomiar-geo.md                        ← pomiar GEO 3 poziomy + KPI
│   ├── url-slugs-validation.md              ← slug walidacja vs PromptEye
│   ├── writing-rules.md                     ← kompendium reguł pisania
│   └── design-system.md                     ← design system reference
├── migration/
│   ├── url-map.csv                          ← do uzupełnienia przed cutover
│   ├── audit-current-site.md                ← audyt obecnej cityroom.pl (TBD)
│   ├── cutover-checklist.md                 ← T-7 / T-1 / T0 / T+1 / monitoring
│   └── redirect-rules.md                    ← Vercel redirects format
├── CLAUDE.md                                ← instrukcje dev (linki do skili + writing rules)
└── README.md
```

---

## Otwarte cross-cutting (NIE blokują pracy nad stroną)

Te 3 punkty robi Paweł / Błażej **niezależnie od strony**, w międzyczasie między sesjami:

1. **Pomiar źródła leada w rozmowach** (od maja 2026)
   - Każda rozmowa zaczyna się od *"Skąd Pan / Pani o nas wie?"*
   - Kategorie: Google / polecenie / powracający / social / **ChatGPT/AI** (nowa) / inne
   - Zapis: arkusz Google / Notion / pamięć Pawła do agregatu po 3 mies.

2. **Uznanie polecających BEZ pieniędzy** (od maja 2026)
   - Telefon / SMS / mail Pawła do polecającego po podpisaniu umowy *"dziękujemy za polecenie X, on też jest u nas w zarządzaniu"*
   - Decyzja strategiczna z `cityroom_strategy_execution.md` § "Reward"

3. **Dodanie Claude jako 5. modelu w PromptEye + rozszerzenie listy promptów** do 20-25
   - 5-7 dodatkowych passive looking promptów
   - 3-4 prompty pokojowe
   - 2-3 prompty pricing-related
   - Pełna lista w `docs/pomiar-geo.md`

---

## Co jest GOTOWE i nie wymaga zmian

Cała ta lista to fundament — nic nie ruszamy:

- ✅ Astro 6 + TypeScript strict + Tailwind 4 + Vercel deploy
- ✅ Brand integration (Ibrand-PL + Manrope + blue gradient + tokens) — pixel-perfect z handoffu
- ✅ Self-hosted fonty (Ibrand-PL × 3 + Manrope × 7)
- ✅ Brand assets (logo, punktor SVG/PNG, 19 illustrations)
- ✅ `Base.astro` — HTML shell, `lang="pl"`, meta + OG + Twitter + font preload + schema slot
- ✅ Schema.org TypeScript helpers — 5 typów (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList) + types + barrel
- ✅ Astro Content Collections v6 — type-safe schema
- ✅ `tokens.css` + `global.css` (Tailwind 4 `@theme` mostkujący brand tokens + `.prose` dla Markdown body)
- ✅ `llms.txt` w strukturze 5-sekcji 2026
- ✅ `robots.txt` stage (production wariant gotowy w komentarzu)
- ✅ DNS dla melawini.pl (apex A 216.198.79.1, www CNAME vercel-dns-017.com)
- ✅ Wszystkie dokumenty `docs/` jako ground truth
- ✅ `CLAUDE.md` z instrukcjami dev + linki do skili + writing rules
- ✅ Memory + skille zaktualizowane
- ✅ Feedback memory `feedback_design_implementation.md` zapisana

---

## Co Rocky musi zrobić w pierwszych 5 min nowej sesji

1. **NIE batchuj.** Jeden artefakt → review → kolejny.
2. **OBEJRZYJ `preview.png`** zanim napiszesz znak kodu. Plus index.html w przeglądarce. Plus 8 JSX.
3. **Zapytaj Pawła:** *"Recreate pixel-perfect czy inna wizja?"*
4. **Zapytaj Pawła:** *"Hero — który wariant z 3 (A/B/C)?"*
5. **Zacznij od Nav.** Najprostsza sekcja. Pokaż Pawłowi przed Hero.

---

## Rocky lessons learned (do zapamiętania w kolejnych sesjach)

1. **Reference implementation z brand handoffu ≠ inspiracja, = blueprint.** Otwórz wszystkie pliki graficzne PRZED kodem. Pixel-perfect recreate, nie reinterpretacja.
2. **"Nie pytaj więcej" ≠ produkuj batch bez review.** Meta-instrukcje dotyczą trywialnych meta-decyzji. Pierwszy artefakt nowej kategorii ZAWSZE przez review.
3. **"Może lepiej" to mój problem, nie Pawła.** Mam tezę "to jest done" i ją bronię. Tendencja AI do nieskończonej iteracji = sabotuje decyzyjność.
4. **Brand handoff Claude Design = generic, voice do reframe na strategię Cityroom.** Hero z handoffu ("Twoje mieszkanie pracuje. Ty odpoczywasz.") nie może być copy-paste — musi być reframe na UM "Regularna niezawodność" + proof points.
5. **Skala iteracji vs sesji.** 1 sesja = 1-2 deliverables, nie 3. Foundation + sesja GEO + cluster page w jednej sesji = za dużo. Po pierwszym artefakcie KAŻDEJ nowej kategorii — review planu, nie tylko artefaktu.
6. **Negative outcome dokumentować jak positive.** Diagnoza błędu = lekcja, nie porażka.

Pełne lessons w `Cityroom\sesje_2026-05\01_foundation-faza-1-sesja-geo.md` § 9.
