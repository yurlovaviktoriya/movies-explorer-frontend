import { useContext } from 'react';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';
import HeaderAuthGroup from '../HeaderAuthGroup/HeaderAuthGroup';

import './Header.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Header({ isDarkTheme, openBurgerMenu }) {

  const { isLogged } = useContext(CurrentUserContext);

  const headerClasses = isDarkTheme ? "header header_dark-theme" : "header";

  if (!isLogged) {
    return (
      <header className={headerClasses}>
        <Logo/>
        <HeaderAuthGroup/>
      </header>
    );
  }

  return (
    <header className={headerClasses}>
      <Logo/>
      <Navigation
        isDarkTheme={isDarkTheme}
      />
      <Account
        isHeader={true}
        isDarkTheme={isDarkTheme}
      />
      <button className="header__burger-btn" type="button" onClick={openBurgerMenu}></button>
    </header>
  );
}

export default Header;
