# FAQ master list — z dystrybucją po stronach

**Status:** v0.1 — wstępna lista 40 pytań (sesja GEO 09.05.2026 Blok 9). **Wymaga sesji dump'u Pawła** z 8 lat rozmów — realnych pytań klientów, ich dokładnego frazowania, najczęstszych kontrargumentów.

---

## Cel

50+ pytań klientów (właścicieli mieszkań), które realnie padają w rozmowach sprzedażowych. Dystrybucja po cluster pages — każda 3-5 pytań w sekcji FAQ (FAQPage schema → +1,8× cytowań w AI Overviews + Q&A pattern dla LLM).

**Zasada formułowania pytań:** dokładnie tak, jak klient pisze do LLM-a lub szuka w Google. **NIE** parafraza marketingowa. Często znaczy: pierwsza osoba, "Czy", "Jak", "Co", "Ile".

---

## Format zapisu (do agenta AI)

```yaml
- pytanie: "Jak działa gwarancja czynszu jeśli mieszkanie stoi puste?"
  odpowiedz: |
    Gwarancja czynszu działa niezależnie od obłożenia mieszkania. Wypłacamy ustaloną kwotę 10. dnia każdego miesiąca, nawet gdy szukamy najemcy lub gdy mieszkanie jest puste między najmami. Mechanizm: bierzemy mieszkanie w najem jako spółka Cityroom — to my, a nie Ty, ponosimy ryzyko pustostanu. Działamy w tym modelu od 2017 roku.
  strona: /gwarancja-czynszu-poznan/
  kategoria: gwarancja
  priorytet: P1
```

**Konwencja odpowiedzi:**
- 50-100 słów
- Pierwsza zdanie = direct answer
- Drugie zdanie = mechanizm
- Trzecie zdanie = proof point (data + liczba)
- Samodzielnie zrozumiała (LLM może wyciąć i zacytować)

---

## Kategoryzacja

1. **Gwarancja czynszu** — jak działa, co jeśli pustostan, długość, kwota
2. **Prowizja / koszty** — ile się płaci, czy są opłaty startowe, ukryte koszty
3. **Proces** — jak zacząć, ile trwa, kto się czym zajmuje
4. **Najemcy** — jak weryfikujecie, kto wybiera, co jeśli problem
5. **Usterki / serwis** — kto naprawia, kto płaci, kto kontaktuje
6. **Umowa** — co zawiera, jak długo, jak rozwiązać
7. **Wynajem pokojowy** — specjalizacja, dla kogo, jak działa
8. **Rozliczenia / podatki** — jak wygląda raport, kto wystawia rachunki, ryczałt vs zasady ogólne
9. **Zakończenie współpracy** — wypowiedzenie, oddanie mieszkania, ostatnie rozliczenia
10. **Przypadki specjalne** — expat, dystans, dziedzic, świeży inwestor, po remoncie

---

## Lista 40 pytań (v0.1 — do walidacji + uzupełnienia przez Pawła)

### A. Gwarancja czynszu (P1, → `/gwarancja-czynszu-poznan/`)

1. Jak działa gwarancja czynszu, jeśli mieszkanie stoi puste?
2. Co się dzieje, gdy najemca przestaje płacić czynsz?
3. Czy gwarantowany czynsz jest niższy od rynkowego?
4. Na jak długo podpisujemy umowę z gwarancją czynszu?
5. Kiedy dostaję pierwszy przelew po podpisaniu umowy?
6. Czy mogę wcześniej zerwać umowę z gwarancją?
7. Co jeśli nieruchomości w okolicy zaczną tanieć — zmienisz mi gwarancję?
8. Co jeśli najemca zniszczy mieszkanie?
9. Co jeśli zaczyna brakować najemców na rynku — np. pandemia?
10. Czy gwarancja obejmuje też okresy pomiędzy najemcami (rotacja)?

### B. Koszty i prowizja (P1, → `/gwarancja-czynszu-poznan/` + porównanie w `/samodzielny-wynajem-czy-firma-zarzadzajaca/`)

11. Jaka jest u Was prowizja? *(Cityroom: nie ma prowizji — model gwarancji)*
12. Czy są jakieś opłaty startowe lub abonament miesięczny?
13. Kto płaci za ogłoszenia i marketing mieszkania?
14. Kto pokrywa koszty napraw i serwisu?
15. Ile zarobię w skali roku, jeśli oddam mieszkanie w gwarancję?

### C. Proces współpracy (P1, → `/jak-dziala-cityroom/`)

16. Od czego zaczynamy współpracę z Cityroom?
17. Ile trwa proces od pierwszej rozmowy do pierwszego przelewu?
18. Czy moje mieszkanie wymaga remontu przed oddaniem w zarząd?
19. Co dzieje się, jeśli moje mieszkanie potrzebuje przygotowania?
20. Kto przygotowuje sesję zdjęciową i ogłoszenia?

### D. Najemcy i weryfikacja

21. Jak weryfikujecie najemców?
22. Kto decyduje, kogo wynająć — Wy czy ja?
23. Co jeśli ja chcę odrzucić konkretnego najemcę?
24. Skąd biorą się Wasi najemcy — w jakim profilu?
25. Co jeśli najemca zacznie być uciążliwy dla sąsiadów?

### E. Usterki, naprawy, serwis

26. Kto kontaktuje się z najemcą w sprawie usterek?
27. Kto płaci za naprawę pralki, lodówki, pieca?
28. Czy macie własny serwis czy podwykonawców?
29. Co jeśli najemca uszkodzi mieszkanie?

### F. Wynajem pokojowy (P1, → `/wynajem-pokoi-studenci-poznan/`)

30. Czy obsługujecie wynajem mieszkań na pokoje dla studentów?
31. Jaka jest różnica między najmem na pokoje a całym mieszkaniem?
32. Kiedy wynajem pokojowy bardziej się opłaca niż całe mieszkanie?
33. Jak wygląda sezon najmu studenckiego w Poznaniu?

### G. Umowa (P3, → `/umowa-cityroom/`)

34. Czy mogę zobaczyć Waszą umowę przed pierwszą rozmową?
35. Jak długo trwa umowa standardowa z Cityroom?
36. Co znajduje się w paragrafie 2 umowy?
37. Czy umowa jest standardowa czy każdorazowo negocjowana?

### H. Rozliczenia i podatki

38. Jak wygląda comiesięczne rozliczenie?
39. Czy wystawiacie mi rachunki / faktury?
40. Czy współpraca z Wami wpływa na mój sposób rozliczania podatku?

---

## Co potrzebujemy uzupełnić — sesja dump z Pawłem

### Pytania, których nie znam (8 lat doświadczenia Pawła):

- Jakie są **najczęściej powtarzające się obawy** klientów (top 5-10)?
- Jakie są **najczęstsze nieporozumienia** (klient myśli X, w rzeczywistości jest Y)?
- Jakie są **kontrargumenty na "za mała kwota gwarancji"** (poza scriptem W1-W4 z `cityroom_strategy_execution.md`)?
- Jakie są **specyficzne pytania expat / dystans** (Warszawa/Wrocław inwestor)?
- Jakie są **specyficzne pytania po remoncie** (push force B)?
- Jakie są **specyficzne pytania po traumie** (push force C)?
- Jakie są **najgłupsze pytania**, które jednak zadają (= klient nie zna podstaw)?
- Jakie są **najmądrzejsze pytania**, które robią różnicę w rozmowie?

### Format dump'u Pawła

W osobnej sesji albo w arkuszu Google: Paweł zapisuje ~40-50 pytań **w dokładnym frazowaniu klientów**, plus krótkie notatki "co odpowiadam zwykle". Rocky przerabia na konwencję powyżej (50-100 słów odpowiedź z proof point).

---

## Dystrybucja po stronach (po dump'ie Pawła)

| Strona | Liczba FAQ | Kategorie pytań |
|---|---|---|
| `/zarzadzanie-najmem-poznan/` (pillar) | 7 | Mix: A, B, C, D — pytania ogólne |
| `/gwarancja-czynszu-poznan/` | 5 | A — gwarancja, kawałek B (koszty) |
| `/jak-nie-zajmowac-sie-najmem-mieszkania/` | 5 | C, D, E — proces + obsługa |
| `/wynajem-pokoi-studenci-poznan/` | 5 | F — pokojowy + kawałek A |
| `/jak-dziala-cityroom/` | 5 | C, D, E |
| `/samodzielny-wynajem-czy-firma-zarzadzajaca/` | 5 | Mix: B, C, F |
| `/zarzadzanie-najmem-poznan-opinie/` | 3 | "Co mówią właściciele" — selected |
| `/o-nas/` | 3 | Historia, zespół, motywacja |
| `/umowa-cityroom/` | 5 | G — umowa |

**Łącznie:** ~43 pytań rozproszonych po 9 stronach. Każde pytanie pojawia się tylko raz (na stronie najbardziej relewantnej).

---

## Walidacja FAQ (przed merge agenta)

- [ ] Pytanie sformułowane **dokładnie tak, jak klient pyta** (krótko, naturalnie, pierwszej osobie)
- [ ] Odpowiedź 50-100 słów
- [ ] Pierwsze zdanie = direct answer
- [ ] Drugie zdanie = mechanizm
- [ ] Trzecie zdanie = proof point (data + liczba)
- [ ] Odpowiedź samodzielnie zrozumiała (passes "vacuum test")
- [ ] **Bez wykrzykników, emoji, startup vocab**
- [ ] FAQPage JSON-LD schema dodany (każde pytanie jako `mainEntity`)

---

## Update log

- **2026-05-09 v0.1** — pierwsza wersja w sesji GEO Blok 9. 40 pytań, kategoryzacja, dystrybucja, format. **Wymaga sesji dump z Pawłem dla 50+ pytań w realnym frazowaniu.**
