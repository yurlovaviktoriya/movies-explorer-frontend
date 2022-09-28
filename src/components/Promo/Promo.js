import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a className="link link_color_white" href="#about-project">
        <button className="promo__more-btn" type="button">Узнать больше</button>
      </a>
    </section>
  );
};

export default Promo;
