// Hero.jsx
const Hero = () => (
  <section id="top" className="cr-hero">
    <div className="cr-hero__blob" aria-hidden="true" />
    <div className="cr-container cr-hero__inner">
      <div className="cr-hero__copy">
        <div className="cr-eyebrow">Dla właścicieli mieszkań · Poznań</div>
        <h1 className="cr-hero__title">
          Twoje mieszkanie <br/>pracuje. <span className="text-gradient">Ty odpoczywasz.</span>
        </h1>
        <p className="cr-hero__lead">
          Prowadzimy Twój najem w Poznaniu — od pierwszego oglądania po comiesięczny
          przelew na Twoje konto. Bez telefonów o pralce.
        </p>
        <div className="cr-hero__ctas">
          <a href="#contact" className="cr-btn cr-btn--accent">Umów spokojną rozmowę</a>
          <a href="#how" className="cr-btn cr-btn--ghost">Zobacz, jak to działa</a>
        </div>
        <div className="cr-hero__trust">
          <i data-lucide="shield-check" width="18" height="18"></i>
          <span>Umowa okazjonalna · rozliczenia co miesiąc · pełna ochrona właściciela</span>
        </div>
      </div>
      <div className="cr-hero__art">
        <img src="../../assets/illustrations/account-management.png" alt="" />
      </div>
    </div>
  </section>
);

window.Hero = Hero;
