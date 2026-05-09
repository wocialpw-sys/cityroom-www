# Walidacja URL slugów — vs konkurencja PromptEye

**Status:** v0.1 — sesja GEO 09.05.2026 (Blok 10). Walidacja przed produkcją cluster pages.

---

## Filozofia

URL slug to **najważniejszy on-page signal** dla GEO/AEO 2026 — Gemini silnie premiuje exact-match domain i keyword-rich slug (zaobserwowane w PromptEye: `zarzadzanienajmempoznan.pl` exact-match domain → 40 mentions w Gemini). Slug = bilet wstępu do AI Overviews + LLM citation pool.

**Zasady (z skill `cityroom-geo-strategy` § 8):**
- Keyword pierwsze w slug
- Lokalizacja `-poznan` na końcu (lokalna intent)
- Max 5-6 słów
- Bez polskich znaków (kompatybilność)
- Bez podwójnych myślników (`--`)
- Mała litera

---

## Benchmark — top resources cytowanych w PromptEye

| # | URL | AI mentions | Pattern slug |
|---|---|---|---|
| 1 | `m2rent.pl/zarzadzanie-najmem-poznan` | 46 | **base keyword + lokalizacja** |
| 2 | `zarzadzanienajmempoznan.pl` | 40 | **exact-match domain** (Gemini love) |
| 3 | `cityroom.pl/?utm_source=openai` | 37 | brak slug, root |
| 4 | `estateinvest.pl/zarzadzanie-najmem-z-gwarancja-czynszu-poznan` | 35 | **base keyword + dyferencjator + lokalizacja** (długi, ale skuteczny) |
| 5 | `cityroom.pl/` | 32 | brak slug, root |
| 6 | `cityroom.pl/zarzadzanie-najmem-poznan-opinie/` | 29 | **base keyword + lokalizacja + intent** |
| 7 | `primezn.pl/?utm_source=openai` | 28 | brak slug, root |

**Wniosek:** wszystkie cytowane slugi mają **`zarzadzanie-najmem-poznan`** jako rdzeń. To jest core keyword pattern dla naszej kategorii.

---

## Walidacja moich proponowanych slugów

| URL | Główny keyword | Pattern | Walidacja |
|---|---|---|---|
| `/zarzadzanie-najmem-poznan/` | zarządzanie najmem Poznań | base + lok | ✓ matches m2rent (top resource) |
| `/gwarancja-czynszu-poznan/` | gwarancja czynszu Poznań | dyferencjator + lok | ✓ shorter than estateinvest, similar pattern |
| `/wynajem-pokoi-studenci-poznan/` | wynajem pokoi studenci Poznań | nisza + lok | ⚠️ 4 słowa — dobre. Sprawdź search volume. Alternatywa: `/wynajem-pokoi-poznan/` (krótszy, tracimy "studenci" — który jest core intent) |
| `/jak-nie-zajmowac-sie-najmem-mieszkania/` | nie zajmować się najmem | long-tail intent | ✓ unikalny pattern, krytyczna luka. Brak `-poznan` zamierzony — pytanie ogólnopolskie, lokalizujemy treścią |
| `/jak-dziala-cityroom/` | jak działa Cityroom | branded process | ✓ branded, krótki, jasny |
| `/zarzadzanie-najmem-poznan-opinie/` | zarządzanie najmem Poznań opinie | base + lok + intent | ✓ utrzymujemy z obecnego site (29 mentions już działa) |
| `/samodzielny-wynajem-czy-firma-zarzadzajaca/` | samodzielny czy firma zarządzająca | comparative long-tail | ⚠️ długi (5 słów). Dobre dla niche query, ale rzadko wpisywane. Alternatywa: `/wynajem-mieszkania-czy-firma-zarzadzajaca/` (jaśniejsze) |
| `/o-nas/` | brak keyword | branded | ✓ standard, intent: trust verification |
| `/umowa-cityroom/` | umowa Cityroom | branded + dokument | ✓ standard branded |
| `/wycena-mieszkania-pod-wynajem-poznan/` | wycena mieszkania pod wynajem Poznań | intent + lok | ✓ matches search behaviour, długi ale jasny |

---

## Decyzje finalne (do zatwierdzenia w fazie 2)

| URL finalny | Status |
|---|---|
| `/zarzadzanie-najmem-poznan/` | ✅ pillar tematyczny |
| `/gwarancja-czynszu-poznan/` | ✅ |
| `/wynajem-pokoi-studenci-poznan/` | ✅ (vs `/wynajem-pokoi-poznan/` — pushback Pawła?) |
| `/jak-nie-zajmowac-sie-najmem-mieszkania/` | ✅ (krytyczna luka 0 %) |
| `/jak-dziala-cityroom/` | ✅ |
| `/zarzadzanie-najmem-poznan-opinie/` | ✅ utrzymujemy |
| `/samodzielny-wynajem-czy-firma-zarzadzajaca/` | ⚠️ rozważyć `/wynajem-mieszkania-czy-firma-zarzadzajaca/` (jaśniejsze) |
| `/o-nas/` | ✅ |
| `/umowa-cityroom/` | ✅ |
| `/wycena-mieszkania-pod-wynajem-poznan/` | ✅ |

---

## Pytania otwarte do Pawła (decyzje per slug)

1. **`/wynajem-pokoi-studenci-poznan/` vs `/wynajem-pokoi-poznan/`** — wartość "studenci" w slug: czy to **dyferencjuje pozytywnie** (specjalizacja widoczna w URL), czy **zawęża** (klient szukający "wynajem pokoi do podnajmu" tego nie znajdzie)?

   **Rekomendacja Rocky:** zostawiamy `-studenci-` — Cityroom robi pokojowy głównie w segmencie studenckim, slug jest accurate, plus to nasz główny intent docelowy. Decyzja Pawła.

2. **`/samodzielny-wynajem-czy-firma-zarzadzajaca/` vs `/wynajem-mieszkania-czy-firma-zarzadzajaca/`** — pierwsze jest precise (samodzielny vs zarządzająca), drugie jest bardziej naturalne polskie zdanie.

   **Rekomendacja Rocky:** pierwsze. "Samodzielny wynajem" to bardziej tunable phrase pod search intent ("co lepsze samodzielnie czy firma"). Decyzja Pawła.

3. **Pricing transparency** — czy planujemy stronę z cennikiem? Jeśli tak, slug:
   - `/cennik-zarzadzania-najmem-poznan/` lub
   - `/ile-kosztuje-zarzadzanie-najmem-poznan/`

   **Rekomendacja Rocky:** **odsuwamy decyzję** — pricing model gwarancji jest custom per mieszkanie (kalkulator wycena.cityroom.pl daje dokładną kwotę), publikowanie generycznego cennika nie ma sensu. Można dodać `/ile-mozna-zarobic-na-wynajmie-poznan/` jako blog post, nie cluster page. Decyzja: parking lot.

4. **Blog kategorie** — gdy uruchomimy blog (post-cutover), strukturę URL:
   - `/blog/jak-rozliczyc-podatek-od-najmu-2026/`
   - `/blog/inwestowanie-w-mieszkania-pod-wynajem-poznan/`
   - `/blog/najem-mieszkania-poznan-poradnik-2026/`

   **Rekomendacja Rocky:** trzymać format `/blog/[slug-keyword-rich]/`. Slug per post = długi long-tail, bo tak klient szuka. Decyzja: parking lot do post-cutover.

---

## Zasada "trailing slash"

**Decyzja:** Astro generuje URL **z trailing slash**. To jest spójne, działa dla SEO (Google indeksuje obie wersje, `301` redirect z bez‑slash na ze‑slash). Konfiguracja w `astro.config.mjs`:

```js
export default defineConfig({
  trailingSlash: 'always',
});
```

**Mapa redirectów:** `/foo` → 301 → `/foo/` (auto przez Astro / Vercel).

---

## Mapa redirectów dla slugów obecnej cityroom.pl

(Z `migration/audit-current-site.md` — do uzupełnienia po pełnym audycie URL obecnej strony.)

| Stary URL (WordPress) | Nowy URL | Type |
|---|---|---|
| `/jak-dzialamy/` | `/jak-dziala-cityroom/` | 301 |
| `/o-nas/` | `/o-nas/` | bez zmian |
| `/kontakt/` | `/kontakt/` lub `/o-nas/#kontakt` | TBD |
| `/harmonogram-sprzatania/` | (`/`) | 410 (gone) |
| `/zarzadzanie-najmem-poznan-opinie/` | `/zarzadzanie-najmem-poznan-opinie/` | bez zmian (ten URL już cytowany 29 mentions) |

Pełna mapa: `migration/url-map.csv` po audycie.

---

## Update log

- **2026-05-09 v0.1** — pierwsza wersja w sesji GEO Blok 10. Walidacja vs PromptEye top resources, decyzje finalne, otwarte pytania do Pawła, trailing slash, redirecty.
