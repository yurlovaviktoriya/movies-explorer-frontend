import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation({ isDarkTheme }) {

  const linkClasses = isDarkTheme ? "link link_color_white" : "link link_color_black";

  return (
    <ul className="list header__nav">
      <li className="header__nav-item">
        <Link to="/movies" className={linkClasses}>Фильмы</Link>
      </li>
      <li className="header__nav-item">
        <Link to="/saved-movies" className={linkClasses}>Сохранённые фильмы</Link>
      </li>
    </ul>
  );
}

export default Navigation;
