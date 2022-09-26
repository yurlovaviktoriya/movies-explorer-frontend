import { Link } from 'react-router-dom';

import './ErrorPage.css';

function ErrorPage() {
  return (
      <section className="page-error">
        <h1 className="page-error__code">404</h1>
        <p className="page-error__text">Страница не найдена</p>
        <Link to="/" className="link link_color_green page-error__link">Назад</Link>
      </section>

  );
};

export default ErrorPage;
