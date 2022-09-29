import './Account.css';

function Account({ isHeader, isDarkTheme }) {

  const accountClasses = isHeader ? "account header__account" : "account burger-menu__account";
  const linkClasses = isDarkTheme ? "link link_color_white" : "link link_color_black";
  const iconClasses = isDarkTheme
    ? "account__icon account__icon_type_dark-theme"
    : "account__icon account__icon_type_light-theme"

  return (
    <div className={accountClasses}>
      <p className="account__text">
        <a className={linkClasses} href="/profile">Аккаунт</a>
      </p>
      <div className={iconClasses}></div>
    </div>
  );
}

export default Account;
