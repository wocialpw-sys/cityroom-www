// HowItWorks.jsx
const HowItWorks = () => {
  const steps = [
    { t: 'Oglądamy mieszkanie.',    d: 'Spotykamy się u Ciebie, robimy zdjęcia, ustalamy czynsz.' },
    { t: 'Znajdujemy najemcę.',     d: 'Weryfikacja BIK, historia najmu, zatrudnienie. Średnio 9 dni.' },
    { t: 'Podpisujemy umowę.',      d: 'Umowa najmu okazjonalnego u notariusza. Pełna ochrona.' },
    { t: 'Prowadzimy najem.',       d: 'Czynsz, media, naprawy. Co miesiąc — raport i przelew.' },
  ];
  return (
    <section id="how" className="cr-how">
      <div className="cr-container">
        <div className="cr-section-head">
          <div className="cr-eyebrow">Jak to działa</div>
          <h2 className="cr-h2">Cztery kroki. Bez Twojego udziału.</h2>
        </div>
        <ol className="cr-how__list">
          {steps.map((s, i) => (
            <li key={i} className="cr-how__item">
              <span className="cr-how__n">{String(i+1).padStart(2,'0')}</span>
              <span className="cr-punktor" aria-hidden="true" />
              <div>
                <h3 className="cr-how__t">{s.t}</h3>
                <p className="cr-how__d">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

window.HowItWorks = HowItWorks;
