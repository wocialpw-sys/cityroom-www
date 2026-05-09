// Services.jsx
const Services = () => {
  const items = [
    { img: 'customer-experience.png',   t: 'Znalezienie najemcy',      d: 'Ogłoszenia, zdjęcia, oglądania w Twoim imieniu.' },
    { img: 'crm.png',                   t: 'Weryfikacja i umowa',      d: 'BIK, dochód, umowa okazjonalna u notariusza.' },
    { img: 'customer-analytics.png',    t: 'Rozliczenia co miesiąc',   d: 'Czynsz, media, salda. Raport PDF + przelew.' },
    { img: 'customer-support.png',      t: 'Obsługa i naprawy',        d: 'Telefon od najemcy trafia do nas, nie do Ciebie.' },
    { img: 'market-research.png',       t: 'Optymalizacja czynszu',    d: 'Raz w roku analizujemy stawkę pod rynek Poznania.' },
    { img: 'office-work.png',           t: 'Odbiór i hand-back',       d: 'Protokół zdawczy, kaucja, rozliczenie końcowe.' },
  ];
  return (
    <section id="services" className="cr-services">
      <div className="cr-container">
        <div className="cr-section-head">
          <div className="cr-eyebrow">Oferta</div>
          <h2 className="cr-h2">Wszystko, czego nie chcesz robić sam.</h2>
        </div>
        <div className="cr-services__grid">
          {items.map((it, i) => (
            <article key={i} className="cr-service">
              <img className="cr-service__img" src={`../../assets/illustrations/${it.img}`} alt="" />
              <h3 className="cr-service__t">{it.t}</h3>
              <p className="cr-service__d">{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Services = Services;
