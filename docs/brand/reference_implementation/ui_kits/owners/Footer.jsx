// Footer.jsx
const Footer = () => (
  <footer className="cr-footer">
    <div className="cr-container">
      <div className="cr-footer__top">
        <div className="cr-footer__brand">
          <img src="../../assets/logo-cityroom-black.png" alt="Cityroom" />
          <p>
            Zarządzamy najmem mieszkań w Poznaniu. 
            Spokojnie, profesjonalnie, od 2019 roku.
          </p>
        </div>
        <div className="cr-footer__cols">
          <div>
            <div className="cr-footer__h">Oferta</div>
            <a href="#services">Znalezienie najemcy</a>
            <a href="#services">Umowa okazjonalna</a>
            <a href="#services">Rozliczenia</a>
            <a href="#services">Obsługa i naprawy</a>
          </div>
          <div>
            <div className="cr-footer__h">Firma</div>
            <a href="#how">Jak to działa</a>
            <a href="#stats">Liczby</a>
            <a href="#testimonial">Opinie</a>
            <a href="#contact">Kontakt</a>
          </div>
          <div>
            <div className="cr-footer__h">Kontakt</div>
            <span>+48 600 000 000</span>
            <span>witamy@cityroom.pl</span>
            <span>ul. Święty Marcin 58<br/>61-807 Poznań</span>
          </div>
        </div>
      </div>
      <div className="cr-footer__bottom">
        <span>© 2026 Cityroom Sp. z o.o. · NIP 000-000-00-00 · KRS 0000000000</span>
        <span>
          <a href="#">Polityka prywatności</a> · <a href="#">Regulamin</a>
        </span>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
