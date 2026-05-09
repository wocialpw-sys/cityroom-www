# Pomiar GEO — protokół + KPI

**Status:** v0.1 — sesja GEO 09.05.2026 (Blok 8). Aktywacja od pierwszego cluster page (Faza 2).

---

## Filozofia pomiaru

> *"To, co nie jest mierzone, nie istnieje."*

GEO bez pomiaru = wiara. Z pomiarem = decyzje. Mamy już PromptEye (44 % brand visibility, baseline) — nie zaczynamy od zera.

**Trzy poziomy pomiaru:**

1. **PromptEye** (automat, tygodniowy snapshot) — najszerszy obraz
2. **Manualny test** (raz / tydzień, 30 min) — głęboka weryfikacja
3. **Source of lead "skąd Pan o nas wie"** w rozmowach (od maja 2026) — realna konwersja

Wszystkie trzy działają razem. PromptEye mówi *czy nas widać*, manualny *jak dokładnie cytują*, source of lead *czy generuje to leady*.

---

## 1. PromptEye — snapshot tygodniowy

### Aktualny stan
- **10 promptów monitorowanych** × 4 LLM-y (GPT-4o, Perplexity, DeepSeek, Gemini)
- **Brand Visibility: 44 %** (Fair) — baseline maj 2026
- **Citation Score: 66 %** (Good)
- **Top model: Perplexity**
- **Average position: 3**
- **Pozycja konkurencyjna: #1 w Poznaniu**

### Akcje natychmiastowe (do zrobienia w tym tygodniu)

- [ ] **Dodać Claude jako 5. model** w PromptEye (nasza naturalna domena — long-form, comprehensive guides). PromptEye prawdopodobnie ma to w settings projektu.
- [ ] **Rozszerzyć listę promptów do 20-25:**
  - Dodać 5-7 dodatkowych passive looking promptów (segment gdzie mamy 0-29 % visibility):
    - "Co zrobić z mieszkaniem które stoi puste w Poznaniu?"
    - "Jak nie tracić nerwów na wynajem mieszkania?"
    - "Czy warto oddać mieszkanie pod zarząd?"
    - "Jak działa firma z gwarancją czynszu?"
    - "Czym różni się gwarancja czynszu od prowizji?"
  - Dodać 3-4 prompty pokojowe (specjalizacja):
    - "Kto w Poznaniu specjalizuje się w wynajmie pokojowym?"
    - "Jak prowadzić wynajem pokoi dla studentów w Poznaniu?"
  - Dodać 2-3 prompty pricing-related (kwota / opłacalność):
    - "Ile zarobię oddając mieszkanie firmie zarządzającej w Poznaniu?"
    - "Czy gwarancja czynszu jest opłacalna?"

### Tygodniowy snapshot — co zapisujemy

Każdy poniedziałek rano (Paweł / Rocky):

| Metryka | Stan |
|---|---|
| **Brand Visibility (overall)** | 44 % → ? |
| **Citation Score** | 66 % → ? |
| **Top Model** | Perplexity → ? |
| **Average Position** | 3 → ? |
| **Pozycja konkurencyjna** | #1 → ? |
| **Krytyczna luka "Jakie są najlepsze rozwiązania..."** | 0 % → ? |
| **Top 3 cluster page targets** | gwarancja: 46 %, pokoje: 54 %, "jak nie zajmować": 0 % |
| **Δ vs poprzedni tydzień** | (overall change) |
| **Top 5 cytowanych resources** | (lista) — nasze vs konkurencja |

Snapshot trafia do `migration/promptey-snapshots/YYYY-MM-DD.md`. Build chain auto-archiwizuje.

### Cele KPI Tor A (do 30.06.2026)

| KPI | Baseline (09.05.2026) | Cel 30.06.2026 |
|---|---|---|
| Brand Visibility | 44 % | **60 %+** |
| Citation Score | 66 % | **75 %+** |
| Average Position | 3 | **2** |
| "Jakie są najlepsze rozwiązania..." | 0 % | **30 %+** |
| "Co wybrać..." | 18 % | **40 %+** |
| "Czy się opłaca..." | 29 % | **45 %+** |
| Top resource: cityroom.pl/* | 3 wpisy w top 7 | **4-5 wpisów w top 7** |

---

## 2. Manualny test — protokół

### Częstotliwość
**Raz w tygodniu, każdy poniedziałek lub wtorek, 30-45 minut.**

### Procedura

1. **Otwórz 4 LLM-y w osobnych zakładkach:**
   - ChatGPT (z Search włączonym)
   - Claude (z Web Search włączonym)
   - Gemini
   - Perplexity

2. **Wpisz 5 kontrolnych promptów (ten sam zestaw co tydzień, dla porównywalności):**
   1. *"Jaka firma w Poznaniu zarządza najmem mieszkań z gwarancją czynszu?"*
   2. *"Polecisz firmę zarządzającą wynajem mieszkania w Poznaniu?"*
   3. *"Jak nie zajmować się najmem mieszkania w Poznaniu?"* (dawniej krytyczna luka)
   4. *"Kto specjalizuje się w wynajmie pokojowym dla studentów w Poznaniu?"*
   5. *"Co lepsze: samodzielny wynajem czy firma zarządzająca w Poznaniu?"*

3. **Per LLM, per prompt notuj:**
   - **Cytowany?** (Tak / Nie)
   - **Pozycja w odpowiedzi:** 1-N
   - **Cytat (krótki snippet):** *"Cityroom oferuje gwarancję czynszu od 2017..."*
   - **Z jakiej strony cytat:** cityroom.pl/?, cityroom.pl/zarzadzanie..., podstrona, brak
   - **Konkurencja w odpowiedzi:** kto inny cytowany, na której pozycji
   - **Sentyment:** pozytywny / neutralny / negatywny
   - **Pojawia się umowa § 2 / gwarancja / 130 mieszkań / 8 lat?** Tak / Nie (czy proof points przebijają się)

4. **Zapisz do `migration/manual-tests/YYYY-MM-DD.md`** w jednolitym formacie.

### Co wyciągamy z manuala

- **Wzorce cytowania:** który LLM cytuje którą stronę najczęściej
- **Wzorce odpowiedzi:** czy LLM-y używają naszych proof points (130 mieszkań, retention 95 %, COVID)
- **Wzorce pominięcia:** dlaczego NIE jesteśmy cytowani (brak content? brak schema? wolniejsza świeżość?)
- **Konkurencja:** kogo trzeba podgonić

PromptEye automatyzuje ilość, manual daje **jakość**.

---

## 3. Source of lead — pomiar w rozmowach

### Decyzja strategiczna (z `cityroom_strategy_execution.md` § "Reward")

**Od maja 2026, każda rozmowa z leadem zaczyna się od pytania:**

> *"Skąd Pan / Pani o nas wie?"*

### Kategorie odpowiedzi

1. **Google search** (organic / ads — dopytaj)
2. **Polecenie** (kto polecił — imię / "od znajomego")
3. **Powracający klient** (mieliśmy już mieszkanie u nich)
4. **Social media** (FB / IG / LinkedIn — dopytaj który)
5. **ChatGPT / AI search** ← **NOWA KATEGORIA, od maja 2026**
6. **Inne** (free text)

### Zapis

- **Lokalnie:** arkusz Google / Notion (Paweł + Błażej oboje wpisują)
- **Po 3 mies.:** dane wpadają do `migration/source-of-lead-summary.md` jako agregaty
- **Po 6 mies.:** decyzja strategiczna o reward systemie polecających (Q3/Q4 2026)

### KPI — kategoria AI

| Tydzień | Liczba leadów "ChatGPT/AI" | % wszystkich leadów |
|---|---|---|
| Tydzień 1 (maj 2026) | baseline 0 | 0 % |
| Tydzień 12 (lipiec 2026, post-cutover) | cel: 1-2 / mies. | ~5 % |
| Tydzień 24 (październik 2026) | cel: 3-5 / mies. | ~10-15 % |

**To jest realny pomiar GEO ROI** — czy strona faktycznie generuje leady przez AI search. Bez tego PromptEye = vanity metric.

---

## 4. Server logs — bot crawl monitoring

### Co mierzymy

- **Frequency:** ile razy / tydz GPTBot, ClaudeBot, PerplexityBot, Google-Extended crawlują
- **Depth:** ile stron jednorazowo skanują (1 = tylko home, 5 = pillar + 4 cluster)
- **HTTP status codes:** czy są błędy (4xx, 5xx)
- **Anomalie:** nagłe spadki = sprawdzić robots.txt / firewall / Vercel limits

### Narzędzia

- **Vercel Analytics** (built-in, Pro tier opcjonalnie)
- **Manual analyze:** Vercel logs eksport → `migration/bot-logs/YYYY-MM-DD.csv`

### Częstotliwość

- **Tygodniowy summary** (Paweł / Rocky) razem z PromptEye snapshot

---

## 5. Stack pomiarowy — podsumowanie

| Narzędzie | Cena | Co mierzy | Kiedy używamy |
|---|---|---|---|
| **PromptEye** | (już mamy, model TBD) | Visibility per prompt × LLM | Tygodniowo, automatycznie |
| **GA4** | Free | Traffic, AI source channel grouping | Codziennie / tygodniowo |
| **Google Search Console** | Free | SEO impressions, position, queries | Tygodniowo |
| **Vercel Analytics** | Free / Pro | Server logs, performance | Tygodniowo |
| **Manual test 4 LLM-ów** | Free | Jakość cytowań, sentyment | Tygodniowo, 30-45 min |
| **Source of lead w rozmowach** | Free | Real konwersja | Codziennie (Paweł / Błażej) |
| **Google Alerts** | Free | Brand mentions monitoring | Auto (codziennie email) |
| **Ahrefs / Semrush** | $99-200/mies (opcjonalnie) | Backlinks audit | Bi-tygodniowo (jeśli mamy) |

**Total stack na MVP: ~0 zł** (PromptEye już mamy, reszta darmowa).

---

## 6. Pierwszy raport — 14.05.2026 (czwartek)

5 dni od dziś. Pierwszy oficjalny snapshot porównawczy:
- PromptEye baseline 09.05 → 14.05 (Δ — czy quick wins na obecnej stronie wpływają — nawet jak ich nie robimy, to test stabilności)
- Manual test 4 LLM-ów
- Bot crawls obecnej cityroom.pl + nowej cityroom-www.vercel.app

Format: `migration/reports/2026-05-14-week-01.md`. Template w fazie 2.

---

## Update log

- **2026-05-09 v0.1** — pierwsza wersja w sesji GEO Blok 8. Trzy poziomy pomiaru, KPI Tor A, stack pomiarowy.
