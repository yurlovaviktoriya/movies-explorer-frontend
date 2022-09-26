import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';
import AuthGroup from '../AuthGroup/AuthGroup';
import './Header.css';

function Header({ isDarkTheme, isLogged, openBurgerMenu }) {

  const headerClasses = isDarkTheme ? "header header_dark-theme" : "header";

  if (!isLogged) {
    return (
      <header className={headerClasses}>
        <Logo/>
        <AuthGroup/>
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
