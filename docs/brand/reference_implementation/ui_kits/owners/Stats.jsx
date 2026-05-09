// Stats.jsx — trust band
const Stats = () => {
  const stats = [
    { n: '9 dni',   l: 'Średni czas znalezienia najemcy' },
    { n: '97 %',    l: 'Obłożenie mieszkań w portfelu' },
    { n: '3,2 ×',   l: 'Szybciej niż samodzielny najem' },
    { n: '0',       l: 'Telefonów do właściciela' },
  ];
  return (
    <section id="stats" className="cr-stats">
      <div className="cr-container">
        <div className="cr-stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="cr-stat">
              <div className="cr-stat__n text-gradient">{s.n}</div>
              <div className="cr-stat__l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Stats = Stats;
