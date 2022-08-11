import './Navigation.css';

function Navigation() {
  return (
    <ul className="list header__nav">
      <li className="header__nav-item">
        <a className="link" href="/movies">Фильмы</a>
      </li>
      <li className="header__nav-item">
        <a className="link" href="/saved-movies">Сохранённые фильмы</a>
      </li>
    </ul>
  );
}

export default Navigation;
