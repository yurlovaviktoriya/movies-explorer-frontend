import { Link } from 'react-router-dom';

import './Account.css';

function Account({ isHeader, isDarkTheme, closeBurgerMenu }) {

  const accountClasses = isHeader ? "account header__account" : "account burger-menu__account";
  const linkClasses = isDarkTheme ? "link link_color_white" : "link link_color_black";
  const iconClasses = isDarkTheme
    ? "account__icon account__icon_type_dark-theme"
    : "account__icon account__icon_type_light-theme"

  return (
    <div className={accountClasses}>
      <p className="account__text">
        <Link to="/profile" className={linkClasses} onClick={closeBurgerMenu}>Аккаунт</Link>
      </p>
      <div className={iconClasses}></div>
    </div>
  );
}

export default Account;
