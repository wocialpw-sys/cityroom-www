# Brief — agent AI do produkcji content www

**Status:** v0.1 — wypełniony w sesji GEO/AEO 09.05.2026 (Bloki 2-3). Iteracja po pierwszym teście agenta na jednej cluster page.

---

## 0. Misja agenta

Agent produkuje **content cluster pages + blog** dla cityroom.pl pod **Tor A wykonawstwa marketingu** (maj-lipiec 2026). Output → Markdown w `src/content/` repo `cityroom-www`. Każdy artefakt przechodzi review Pawła + Rocky'ego przed merge. **Filozofia:** strategia przed egzekucją. Pierwszy agent = test (jedna cluster page), iteracja briefu, dopiero potem skalowanie.

---

## 1. Audiencja — Zmęczony Landlord (persona prymarna)

Pełna definicja: `cityroom_strategy_foundation.md` § "JTBD v1".

**TL;DR:** właściciel mieszkania w Poznaniu, który wynajmuje już **bezpośrednio** lub przez prowizyjną agencję. Dochodzi do momentu, w którym chce **delegować** zarządzanie. Klient B2B, considered purchase, długi cykl decyzyjny.

### 5 push forces (ranking wolumenowy nieustalony — do pomiaru)

| Kod | Push force | Stan emocjonalny | Messaging hook |
|---|---|---|---|
| **A** | Koniec dobrej passy — długi bezproblemowy najemca odchodzi | Antycypacyjny ból | "nie musisz znów przez to przechodzić" |
| **B** | Po remoncie — świeża inwestycja, racjonalna delegacja | Racjonalny, NIE zmęczony | "skoro włożyłeś 60 k, niech mieszkanie pracuje od dnia pierwszego" |
| **C** | Trauma rozstania — trudny najemca, windykacja, szkody | Najsilniejsza emocja, "nigdy więcej sam" | "od trzech lat nie odebrałam telefonu o zepsutej pralce" |
| **D** | Pustostan — miesiące bez przychodu, presja finansowa | Stres finansowy | "płacimy 10. każdego miesiąca, niezależnie od obłożenia" |
| **E** | Dystans fizyczny — przeprowadzka, expat | Logistyczna bezsilność | "Twoje mieszkanie pracuje. Ty odpoczywasz" |

**Wszystkie 5 = trigery REAKTYWNE, nie proaktywne.** Klient szuka pod presją. **Implikacja:** szybkość reakcji > nurturing, SEO intent ("teraz potrzebuję") > evergreen content.

### Kluczowy insight

**Klient nie szuka "z gwarancją"** — szuka *"zarządzania najmem"*. Gwarancja jest dyferencjatorem **wewnątrz** kategorii, nie nad nią. Mental model klienta: *"firma zarządzająca = prowizja od czynszu"*. Strona musi przełamać JEDNO założenie, nie uczyć wszystkiego.

**Klient 80 % gotowy, jeśli kwota OK.** 30-50 % odpadu na cenie. Konwersja Cityroom = funkcja **jednej liczby**. Reszta (trust, oferta, edukacja, positioning) = warunek konieczny, NIE wystarczający.

---

## 2. Voice & tone (z brand handoff)

### Język i osoba

- **Polski first.** Adres "Ty" (kapitalizowane: *Twoje mieszkanie*). Firma: **"my"** (*My zajmiemy się resztą*).
- **Profesjonalny‑konwersacyjny.** Spokojny, mierzony, zaufany.
- Krótkie zdania. Bez żargonu poza terminami prawnymi (*umowa najmu okazjonalnego, ryczałt*).

### Punktacja

- ❌ Wykrzykniki. Nigdy. (*Zarezerwuj teraz!*)
- ❌ Emoji. Nigdy.
- ✅ Em-dashy dla rytmu — *"Twoje mieszkanie pracuje — comiesięczny przelew na konto."*
- ✅ Polskie konwencje liczbowe: *2 400 zł*, *85 %*, *ul. Święty Marcin 58*
- ✅ Cudzysłowy: „low-high" w body copy, `"…"` w UI

### Casing

- Sentence case wszędzie — nagłówki, przyciski, nawigacja.
- `ALL CAPS` tylko dla **eyebrow labels** (12 px, `letter-spacing: 0.14em`, `--cr-blue-600`).

### Co odrzucamy

- **Startup vocabulary:** *platforma, ekosystem, rewolucjonizujemy, game-changer, najlepszy*
- **Aggressive CTA:** *Kup teraz!, Nie przegap!*
- ❌ *"nasz zespół profesjonalistów"* — zbyt korporacyjne
- ❌ *"gwarantujemy", "zapewniamy", "zobowiązujemy się", "dołożymy starań"* — używaj czasu teraźniejszego dokonanego: *"dostarczamy, płacimy, robimy, od 2017..."*
- ❌ Liczba "7" (lat / osób — nieaktualna, jest 8/9)
- ❌ Nazwy konkurencji (*Fiesta, InHarbor, M2Rent*) — używaj kategorii: *"agencje prowizyjne", "tradycyjne zarządzanie"*
- ❌ Daty względne (*"8 lat temu"*) — używaj absolutnych (*"od 2017"*)

---

## 3. Brand rules — Cityroom-specific

### Dwa wymiary UM "Regularna niezawodność" — ZAWSZE razem

W każdym materiale komunikacyjnym, w każdym dłuższym chunk'u:

| Wymiar A — Codzienna konsekwencja | Wymiar B — Odporność na stres |
|---|---|
| Każdy 10. dzień miesiąca — przelew na czas przez 8 lat | COVID 2020 — pełne czynsze mimo pustostanów |
| Każda usterka — bez angażowania właściciela | Trudni najemcy — przejmowane przez Cityroom |
| Każda umowa — realizowana jak opisana | Kryzys rynkowy — model działa tak samo |
| Każde rozliczenie — transparentne | |

**Pojedynczo każdy słabszy.** *"Firma działa tak samo, co miesiąc i w kryzysie."*

### Umowa po § 2 = argument sprzedażowy

Cytat do zastosowania: *"Przyślę Panu wzorzec umowy, sam Pan zobaczy."*

### Strategia kategorii (wariant B)

Strona pozycjonuje się jako *"zarządzanie najmem Poznań"* (klient tak szuka), gwarancja jako **dyferencjator wewnątrz** znanej kategorii. NIE jako osobna kategoria *"firma z gwarancją"* (klient takiej kategorii nie zna).

### ZAKAZ "nie komunikujemy tego"

Niczego, co dzieje się po stronie Cityroom w relacji z właścicielem, nie chowamy za kulisami. Każda decyzja musi przejść filtr *"czy umiemy to powiedzieć klientowi wprost"*. Marża na § 2 → komunikujemy wprost. Plan rozwoju → komunikujemy wprost.

### Strategia DONE PL

DONE PL = **proof point / trust mechanism w sekcji o standardzie mieszkania**, NIE równorzędny produkt. Hierarchia wizualna: baner DONE NIE większy niż sąsiednie sekcje gwarancji/UM. Informacja o DONE pojawia się POST-decyzyjnie w lejku — na stronie wzmianka subtelna (banner w sekcji "Standard mieszkania" + link w stopce). Pełna strona DONE PL → osobny projekt później.

---

## 4. Struktura pisania pod GEO/AEO 2026

### Pierwsze 200 słów = make-or-break

**Pierwszy paragraf (~150-200 słów) musi być:**
- **Direct answer** na główne pytanie strony
- Self-contained (zrozumiały bez kontekstu)
- Faktograficzny, nie marketingowy
- Z proof point lub liczbą

**Wzorzec TLDR pattern:**
> [Jedno zdanie direct answer.] [Drugie zdanie z proof point i datą.] [Trzecie zdanie z mechanizmem.] [Czwarte zdanie z why-it-matters dla klienta.] [Piąte zdanie z call do scrollu / next section.]

**Przykład dla `/gwarancja-czynszu-poznan/`:**
> Cityroom wypłaca właścicielowi mieszkania **stały czynsz 10. dnia każdego miesiąca, niezależnie od obłożenia**, przez cały okres umowy. Robimy to od 2017 roku, dla 130 mieszkań w Poznaniu. Mechanizm jest prosty: bierzemy mieszkanie w najem jako spółka, sami szukamy najemców, sami przejmujemy ryzyko pustostanu. W praktyce oznacza to, że Twoje miesięczne przychody są tak samo przewidywalne, jak pensja z etatu. Poniżej tłumaczymy, jak to działa, kiedy się opłaca, i dlaczego model gwarancji różni się od prowizyjnego zarządzania.

### Chunki 134-167 słów per H2/H3

Każda sekcja po H2 lub H3 = **134-167 słów**. To optymalna długość pod LLM retrieval (semantic completeness ≥ 8.5/10 → 4.2× więcej cytowań w AI Overviews).

**Każdy chunk:**
- Zaczyna od direct sentence (TLDR)
- Rozwija mechanizm / kontekst / przykład
- Kończy soft transition do następnej sekcji LUB pointer do innego cluster page

**"Vacuum test":** wytnij chunk z kontekstu. Czy nadal ma sens? Czy LLM może go zacytować bez okolicznych zdań? Jeśli nie — przepisz.

### Listicle format (74,2 % AI citations)

Dla typów: *"Top N", "X sposobów", "Y różnic", "Najczęstsze błędy"*.

**Struktura:**

1. **Hook + TLDR** (200 słów first paragraph) — direct answer, ranked summary
2. **Numbered list** (`<ol>` z `<h3>` per item)
3. **Każdy item:**
   - H3 z konkretną nazwą rozwiązania
   - 134-167 słów opis
   - Plus/minus (jeśli porównanie)
   - Inline citation (jeśli odsyłamy do badań/danych)
4. **FAQ section** (3-5 pytań, FAQPage schema)
5. **"Powiązane"** — 3 linki do cluster pages

**Schema:** triple stack `Article` + `ItemList` + `FAQPage` = 1,8× więcej cytowań w AI Overviews.

### FAQ pattern (FAQPage schema)

3-5 pytań na końcu każdej cluster page. Format: pytanie pełnym zdaniem ("Jak działa...?", "Co się dzieje, jeśli...?"), odpowiedź 50-100 słów, samodzielnie zrozumiała.

**Walidacja:** odpowiedź musi działać jako standalone snippet (LLM cytuje passage, nie stronę).

---

## 5. Per typ strony — specyfikacja

### Pillar tematyczny (`/zarzadzanie-najmem-poznan/`)

- **Długość:** 2 000-3 500 słów
- **Struktura:**
  1. Hero + TLDR (200 słów)
  2. **Co to jest zarządzanie najmem** (definitional, 200 słów chunk)
  3. **Trzy modele biznesowe** (prowizja / abonament / gwarancja) — H3 per każdy, 134-167 słów chunk
  4. **Jak wybrać firmę zarządzającą** (4-5 kryteriów, listicle wewnątrz pillara)
  5. **Czynsz gwarantowany — case Cityroom** (link do /gwarancja-czynszu/)
  6. **Specyfika rynku poznańskiego** (lokalna intent, 200 słów)
  7. **Najczęstsze obawy właścicieli** (z odpowiedziami — alias FAQ pre-section)
  8. **FAQPage** (5-7 pytań)
  9. "Powiązane" — 3 cluster pages
- **Schema:** `Service` + `FAQPage` + `BreadcrumbList` + linkujący do `Organization`

### Cluster page — mechanika (`/gwarancja-czynszu-poznan/`, `/wynajem-pokoi-studenci-poznan/`, `/jak-dziala-cityroom/`)

- **Długość:** 1 200-2 000 słów
- **Struktura:**
  1. Hero + TLDR (200 słów)
  2. 4-6 sekcji H2 (134-167 słów chunk każdy)
  3. Sekcja proof points (liczby + daty + linki)
  4. FAQPage (3-5 pytań)
  5. CTA do kalkulatora / telefonu
  6. "Powiązane" — 3 cluster pages
- **Schema:** `Service` + `FAQPage` + `BreadcrumbList`

### Cluster page — listicle (`/jak-nie-zajmowac-sie-najmem-mieszkania/`, `/samodzielny-wynajem-czy-firma-zarzadzajaca/`)

- **Długość:** 1 500-2 500 słów
- **Struktura:** patrz § 4 "Listicle format"
- **Schema:** **triple stack** `Article` + `ItemList` + `FAQPage` + `BreadcrumbList`

### Cluster page — opinie (`/zarzadzanie-najmem-poznan-opinie/`)

- **Długość:** 1 000-1 500 słów + lista opinii
- **Struktura:**
  1. Hero + TLDR (200 słów, kontekst opinii)
  2. **AggregateRating** wyróżniony (4,9 / 103)
  3. **5-8 wyróżnionych opinii** z imionami klientów (`Review` schema każda)
  4. **Co mówią właściciele najczęściej** (3 motywy, 134-167 słów chunk każdy)
  5. **Cały zestaw 168 opinii** — link do GBP
  6. CTA
- **Schema:** `Review` × N + `AggregateRating` + `Organization`

### O nas (`/o-nas/`)

- **Długość:** 800-1 500 słów
- **Struktura:**
  1. Hero — Paweł + Błażej (zdjęcia, imiona, role)
  2. Skąd się wzięliśmy (8 lat historii, krótko)
  3. Jak pracujemy (zespół, biuro, proces — krótko)
  4. Czym kierujemy się w decyzjach (UM "Regularna niezawodność", dwa wymiary)
  5. CTA
- **Schema:** `Person` × 2 (Paweł, Błażej) + `Organization` z `founder`

### Umowa (`/umowa-cityroom/`)

- **Długość:** 800-1 200 słów
- **Struktura:**
  1. Dlaczego pokazujemy umowę (krótko, 100 słów)
  2. Co znajduje się w umowie (lista głównych zapisów)
  3. § 2 — okres poszukiwań (wprost, jak proof point — *"przyjmujemy 4 tygodnie sztywno, jeśli szybciej, to upside dla nas — to marża operacyjna z tytułu przejęcia ryzyka"*)
  4. Pobierz wzorzec (link do PDF)
- **Schema:** `Article` + `BreadcrumbList`

---

## 6. Proof points — single source of truth

Patrz `docs/proof-points.md`. Agent **losuje** z tego katalogu, **NIE wymyśla**. Każdy proof point z datą absolutną, liczbą z kontekstem, linkiem weryfikującym (gdzie możliwe).

---

## 7. URL slugi (z `ia-mapa.md` § "Mapa stron MVP")

| URL | Główne keyword |
|---|---|
| `/zarzadzanie-najmem-poznan/` | zarządzanie najmem Poznań |
| `/gwarancja-czynszu-poznan/` | gwarancja czynszu Poznań |
| `/jak-nie-zajmowac-sie-najmem-mieszkania/` | nie zajmować się najmem |
| `/wynajem-pokoi-studenci-poznan/` | wynajem pokoi studenci Poznań |

**Zasada:** keyword w slug pierwsze, `-poznan` na końcu (lokalizacja), max 5-6 słów, bez polskich znaków.

---

## 8. Iteracja briefu — protokół

1. **Pierwszy test:** agent produkuje **jedną cluster page** (priorytet: `/gwarancja-czynszu-poznan/` — bo wygrywamy 46 % i skalujemy)
2. **Review:** Paweł + Rocky w 24 h, brutalnie krytyczny
3. **Iteracja briefu:** wnioski z review → update tego dokumentu
4. **Drugi test:** druga cluster page (`/jak-nie-zajmowac-sie-najmem-mieszkania/` — krytyczna luka, inny format listicle)
5. **Review + iteracja**
6. **Skalowanie:** dopiero po stabilizacji briefu agent dostaje skip list pozostałych P1 + P2

**NIE produkujemy 5 stron równolegle przed pierwszym review.** Każda iteracja eliminuje błędy systemowe.

---

## 9. Walidacja outputu agenta — checklist przed merge

### Treść

- [ ] Pierwsze 200 słów = direct, complete answer (TLDR pattern)
- [ ] Chunki 134-167 słów per H2/H3
- [ ] Każdy chunk samodzielnie zrozumiały (passes "vacuum test")
- [ ] Czas teraźniejszy dokonany ("dostarczamy"), nie przyszły
- [ ] Konkretne liczby + daty absolutne + źródła
- [ ] Listicle format gdzie pasuje
- [ ] FAQ section 3-5 pytań na końcu
- [ ] Inline citations + linki do źródeł
- [ ] Wzorzec "Powiązane" z 3 linkami do cluster pages

### Brand

- [ ] Zero wykrzykników w user‑facing copy
- [ ] Zero emoji
- [ ] Zero "7" (lat / osób)
- [ ] Zero nazw konkurencji (Fiesta, InHarbor, M2Rent — zastąpione "agencje prowizyjne")
- [ ] Sentence case (poza eyebrow)
- [ ] Polskie typo (spacje w liczbach, „cudzysłowy", em-dashy)
- [ ] **Dwa wymiary UM razem** — codzienna konsekwencja + COVID 2020 / odporność na stres
- [ ] Co najmniej 1 datowany proof point z liczbą
- [ ] § 2 umowy gdzie pasuje (proof point sprzedażowy)

### Technika (do weryfikacji przy merge przez Rocky'ego)

- [ ] Keyword‑rich URL slug
- [ ] Schema.org JSON‑LD odpowiedni dla typu (Article + ItemList + FAQPage dla listicles, Service + FAQPage dla cluster pages)
- [ ] H1 unique, H2/H3 hierarchia czysta
- [ ] Internal links z opisowym anchor text
- [ ] `dateModified` zaktualizowane
- [ ] Markdown version (`.md` siblings) wygenerowane

### GEO post‑publication

- [ ] Test prompt w ChatGPT/Perplexity/Gemini/Claude — czy nas cytuje (po 5-7 dni od publikacji)
- [ ] Dodanie do PromptEye monitoring (jeśli nowy critical prompt)

---

## 10. Konkretne briefy 3 P1 cluster pages

### `/gwarancja-czynszu-poznan/` (P1, pierwszy test agenta)

- **Główne pytania docelowe:** *"Która firma oferuje gwarantowany czynsz?"* (46 % → 75 %), *"Jak działa najem z gwarancją czynszu?"* (43 % → 70 %)
- **Sekcje H2:**
  1. Hero + TLDR (200 słów — direct answer + 4 proof pointy)
  2. **Jak działa gwarancja czynszu — krok po kroku** (5-6 kroków, każdy 60-80 słów, lista numerowana)
  3. **Czym różni się gwarancja od prowizji** (porównanie tabelaryczne + 134 słów chunk wprowadzający)
  4. **Co się dzieje, gdy mieszkanie stoi puste** (134-167 słów, COVID 2020 jako case)
  5. **Dwa wymiary regularnej niezawodności** (codzienna konsekwencja + odporność na stres, 200 słów)
  6. **Dla kogo gwarancja czynszu się opłaca** (3 profile: A/D/E z push forces)
  7. **Co mówi umowa** (link do `/umowa-cityroom/` — § 2 jako proof)
  8. FAQPage (5 pytań — patrz `faq-master.md`)
  9. CTA do kalkulatora + telefonu
  10. "Powiązane": `/jak-dziala-cityroom/` + `/zarzadzanie-najmem-poznan-opinie/` + `/samodzielny-wynajem-czy-firma-zarzadzajaca/`

### `/jak-nie-zajmowac-sie-najmem-mieszkania/` (P1, listicle, krytyczna luka)

- **Główne pytanie docelowe:** *"Jakie są najlepsze rozwiązania dla właściciela mieszkania, który nie chce zajmować się najemcami?"* (0 % → 40 %)
- **Format:** listicle "5 sposobów"
- **Lista (każdy 200-300 słów):**
  1. **Sprzedaż mieszkania** — krótko, dla kogo, plus/minus, kiedy nie ma sensu
  2. **Wynajem przez Airbnb / krótkoterminowy** — krótko, dla kogo, wysokie koszty czasu, zmiany prawne 2026
  3. **Agencja prowizyjna z administracją** — modela hybrydowy, co wchodzi w prowizję, gdzie luka
  4. **Najemca instytucjonalny** (PRS) — kiedy się opłaca, dla kogo
  5. **Firma zarządzająca z gwarancją czynszu** — Cityroom case, co dostajesz, dla kogo (link do `/gwarancja-czynszu-poznan/`)
- **TLDR pierwszy paragraf:** "Pięć sposobów. Najmniej angażujący to gwarancja czynszu. Najtańszy w długim terminie zależy od twojej sytuacji. Poniżej rozkładamy każdy z nich z plusami, minusami i kosztem operacyjnym."
- **FAQPage:** "Co jeśli moje mieszkanie wymaga remontu", "Jak długo trwa znalezienie najemcy", "Co jeśli najemca nie płaci"
- **Schema:** triple stack — `Article` + `ItemList` (5 items) + `FAQPage`

### `/wynajem-pokoi-studenci-poznan/` (P1, specjalizacja)

- **Główne pytanie docelowe:** *"Jakie firmy w Poznaniu obsługują wynajem mieszkań na pokoje dla studentów?"* (54 %, pos 3.5 → 65 %, pos 1.5)
- **Sekcje H2:**
  1. Hero + TLDR (Cityroom = jedyna specjalizacja pokojowa w Poznaniu — proof point)
  2. **Dlaczego wynajem pokojowy jest opłacalny w Poznaniu** (rynek studencki, kalkulacja)
  3. **Czym różni się zarządzanie pokojowe od mieszkania w całości** (rotacja, weryfikacja, obsługa)
  4. **Jak Cityroom prowadzi pokojowy** (proces, narzędzia, doświadczenie z N pokojami)
  5. **Specyfika rynku akademickiego w Poznaniu** (UAM, PUT, AWF, USoPM — sezony, kalendarz)
  6. **Gwarancja czynszu w pokojowym** (link do `/gwarancja-czynszu-poznan/` — wartość wyższa bo wyższa rotacja)
  7. FAQPage (5 pytań specyficznych dla pokojowego)
  8. CTA + Powiązane

---

## 11. Pełen kontekst (linki)

- Skill `cityroom-marketing-strategy` — strategia, JTBD, voice
- Skill `cityroom-geo-strategy` — GEO mechanika, schema, baseline PromptEye
- Memory `cityroom_audit.md` — GEO baseline maj 2026
- Memory `cityroom_strategy_foundation.md` — UM, JTBD v1
- Memory `cityroom_strategy_execution.md` — pricing block W1-W4
- `docs/ia-mapa.md` — pillar + cluster mapa
- `docs/proof-points.md` — single source of truth proof points
- `docs/faq-master.md` — FAQ master list
- `docs/writing-rules.md` — kompendium reguł pisania
- `docs/schema-map.md` — schema.org per typ strony

---

## Update log

- **2026-05-09 v0.1** — pierwsza wersja po sesji GEO Bloki 2-3. Audiencja, voice, brand rules, struktura GEO, per-typ-strony, walidacja, briefy 3 P1.
