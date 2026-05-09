// ContactForm.jsx
const ContactForm = () => {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" className="cr-contact">
      <div className="cr-container cr-contact__inner">
        <div className="cr-contact__copy">
          <div className="cr-eyebrow">Kontakt</div>
          <h2 className="cr-h2">Porozmawiajmy o Twoim mieszkaniu.</h2>
          <p className="cr-lead">
            Zadzwoń lub zostaw numer. Oddzwonimy w ciągu jednego dnia roboczego —
            bez presji, bez sprzedaży.
          </p>
          <ul className="cr-contact__meta">
            <li><i data-lucide="phone" width="18" height="18"></i> +48 600 000 000</li>
            <li><i data-lucide="mail"  width="18" height="18"></i> witamy@cityroom.pl</li>
            <li><i data-lucide="map-pin" width="18" height="18"></i> ul. Święty Marcin 58, Poznań</li>
          </ul>
        </div>
        <form className="cr-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
          {sent ? (
            <div className="cr-form__ok">
              <i data-lucide="check" width="22" height="22"></i>
              <div>
                <div className="cr-form__okt">Dziękujemy.</div>
                <div className="cr-form__okd">Odezwiemy się w ciągu jednego dnia roboczego.</div>
              </div>
            </div>
          ) : (
            <>
              <label className="cr-field">
                <span>Imię i nazwisko</span>
                <input className="cr-input" placeholder="Anna Kowalska" />
              </label>
              <label className="cr-field">
                <span>Telefon</span>
                <input className="cr-input" placeholder="+48 600 000 000" />
              </label>
              <label className="cr-field">
                <span>Adres mieszkania</span>
                <input className="cr-input" placeholder="ul. Święty Marcin 58, Poznań" />
              </label>
              <label className="cr-field">
                <span>Metraż</span>
                <input className="cr-input" placeholder="42 m²" />
              </label>
              <button type="submit" className="cr-btn cr-btn--accent cr-form__submit">
                Umów spokojną rozmowę
              </button>
              <div className="cr-form__fine">
                Wysyłając formularz zgadzasz się na kontakt telefoniczny. 
                Twoich danych nie przekazujemy osobom trzecim.
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

window.ContactForm = ContactForm;
