# FAQ master list — z dystrybucją po stronach

**Status:** placeholder. Wypełnić na bazie 8 lat rozmów Pawła z klientami (zaplanowany dump w sesji GEO/AEO Blok 4).

## Cel

30–50 pytań klientów (właścicieli mieszkań), które realnie padają w rozmowach sprzedażowych. Dystrybucja po cluster pages — każda cluster page ma 3–5 pytań w sekcji FAQ (FAQPage schema → +1,8× cytowań w AI Overviews + Q&A pattern dla LLM).

## Format

```yaml
- pytanie: "Jak działa gwarancja czynszu jeśli mieszkanie stoi puste?"
  odpowiedz: "Gwarancja działa niezależnie od obłożenia — wypłacamy stały czynsz 10. każdego miesiąca, nawet gdy szukamy najemcy lub pomiędzy najmami."
  strona: /gwarancja-czynszu-poznan/
  kategoria: gwarancja
```

## Kategorie (proponowane)

- gwarancja
- prowizja / koszty
- proces / pierwsze kroki
- najemcy / weryfikacja
- usterki / serwis
- umowa / aspekty prawne
- pokoje / specjalizacja
- rozliczenia / podatki
- zakończenie współpracy
- przypadki specjalne (expat, dystans, dziedzic, świeży inwestor)

## Pytania bazowe (do rozszerzenia)

### Gwarancja
- Jak działa gwarancja czynszu, jeśli mieszkanie stoi puste?
- Co się dzieje, jeśli najemca nie płaci?
- Czy mogę wcześniej zerwać umowę gwarancji?

### Prowizja / koszty
- Jaka jest u was prowizja? *(odpowiedź: nie ma — model gwarancji)*
- Ile zarobię w skali roku?
- Co z kosztami przygotowania mieszkania?

### Proces
- Jak długo trwa znalezienie najemcy?
- Co jeśli moje mieszkanie wymaga remontu?

### Najemcy / weryfikacja
- Jak weryfikujecie najemców?
- Co się dzieje, jeśli najemca zniszczy mieszkanie?

### Pokoje
- Czy obsługujecie wynajem pokojowy?
- Jaka jest różnica między najmem na pokoje a całe mieszkanie?

## Następne kroki

- [ ] Sesja Blok 4 — dump pytań od Pawła z 8 lat rozmów
- [ ] Kategoryzacja
- [ ] Dystrybucja po cluster pages (3–5 per strona)
- [ ] Walidacja: czy pytania pokrywają luki promptowe z PromptEye
