// Nav.jsx — sticky glass-blur top navigation
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  const links = [
    { label: 'Jak to działa', href: '#how' },
    { label: 'Oferta', href: '#services' },
    { label: 'Dla właścicieli', href: '#stats' },
    { label: 'Opinie', href: '#testimonial' },
  ];

  return (
    <header className={`cr-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="cr-nav__inner">
        <a href="#top" className="cr-nav__logo">
          <img src="../../assets/logo-cityroom-black.png" alt="Cityroom" />
        </a>
        <nav className="cr-nav__links">
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="cr-nav__actions">
          <a href="#contact" className="cr-nav__cta">Umów rozmowę</a>
        </div>
      </div>
    </header>
  );
};

window.Nav = Nav;
