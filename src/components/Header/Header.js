import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Logo/>
      <Navigation/>
      <Account/>
    </header>
  );
}

export default Header;
