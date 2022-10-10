import { NavLink } from 'react-router-dom';

import Account from '../Account/Account';

import './BurgerMenu.css';

function BurgerMenu({ burgerMenuClasses, closeBurgerMenu }) {

  return (
    <div className={burgerMenuClasses}>
      <div className="burger-menu__window">
        <button className="btn burger-menu__close-btn" type="button" onClick={closeBurgerMenu}></button>
        <nav className="burger-menu__nav">
          <ul className="list burger-menu__list">
            <li className="burger-menu__list-item">
              <NavLink end to="/" className={({isActive}) => (isActive ? "link link_color_black burger-menu__link_active"
              : "link link_color_black")} onClick={closeBurgerMenu}>Главная</NavLink>
            </li>
            <li className="burger-menu__list-item burger-menu__list-item_active">
              <NavLink to="/movies" className={({isActive}) => (isActive ? "link link_color_black link_active"
              : "link link_color_black")} onClick={closeBurgerMenu}>Фильмы</NavLink>
            </li>
            <li className="burger-menu__list-item">
              <NavLink to="/saved-movies" className={({isActive}) => (isActive ? "link link_color_black link_active"
              : "link link_color_black")} onClick={closeBurgerMenu}>Сохранённые фильмы</NavLink>
            </li>
          </ul>
          <Account
            isHeader={false}
            closeBurgerMenu={closeBurgerMenu}
          />
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
