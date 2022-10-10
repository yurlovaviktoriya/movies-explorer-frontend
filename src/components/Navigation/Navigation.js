import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation({ isDarkTheme }) {

  const linkClasses = isDarkTheme ? 'link link_color_white' : 'link link_color_black';

  return (
    <ul className="list header__nav">
      <li className="header__nav-item">
        <NavLink to="/movies" className={({isActive}) => (isActive ? `${linkClasses} link_active`
              : linkClasses)}>Фильмы</NavLink>
      </li>
      <li className="header__nav-item">
        <NavLink to="/saved-movies" className={({isActive}) => (isActive ? `${linkClasses} link_active`
              : linkClasses)}>Сохранённые фильмы</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
