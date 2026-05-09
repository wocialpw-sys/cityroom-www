// Testimonial.jsx
const Testimonial = () => (
  <section id="testimonial" className="cr-testimonial">
    <div className="cr-container cr-testimonial__inner">
      <div className="cr-testimonial__copy">
        <div className="cr-eyebrow">Właściciele o Cityroom</div>
        <blockquote className="cr-quote">
          „Od trzech lat nie odebrałam ani jednego telefonu o zepsutej pralce. 
          Raz w miesiącu dostaję przelew i raport — i to wszystko, co muszę wiedzieć."
        </blockquote>
        <div className="cr-quote__who">
          <div className="cr-quote__avatar">AK</div>
          <div>
            <div className="cr-quote__name">Anna K.</div>
            <div className="cr-quote__role">Właścicielka 2 mieszkań, Jeżyce</div>
          </div>
        </div>
      </div>
      <div className="cr-testimonial__art">
        <img src="../../assets/illustrations/knowledge.png" alt="" />
      </div>
    </div>
  </section>
);

window.Testimonial = Testimonial;
