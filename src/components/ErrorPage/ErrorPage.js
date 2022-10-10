import { useNavigate } from 'react-router-dom';

import './ErrorPage.css';

function ErrorPage() {
  const navigate = useNavigate()

  const goBack = () => {
      navigate(-1);
  };

  return (
      <main className="page-error">
        <h1 className="page-error__code">404</h1>
        <p className="page-error__text">Страница не найдена</p>
        <button className="btn page-error__btn" type="button" onClick={goBack}>Назад</button>
      </main>

  );
};

export default ErrorPage;
