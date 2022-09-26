import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="list portfolio__list">
        <li className="portfolio__list-item">
          <p className="portfolio__name-site">Статичный сайт</p>
          <a className="link portfolio__link-icon" href="https://github.com/yurlovaviktoriya/how-to-learn"
           target="_blank" rel="noreferrer"> </a>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__name-site">Адаптивный сайт</p>
          <a className="link portfolio__link-icon" href="https://github.com/yurlovaviktoriya/russian-travel"
            target="_blank" rel="noreferrer"> </a>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__name-site">Одностраничное приложение</p>
          <a className="link portfolio__link-icon" href="https://github.com/yurlovaviktoriya/react-mesto-api-full"
            target="_blank" rel="noreferrer"> </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
