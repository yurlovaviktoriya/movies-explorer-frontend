import './Account.css';

function Account() {
  return (
    <div className="header__account">
      <p className="header__account-text">
        <a className="link header__link" href="/profile">Аккаунт</a>
      </p>
      <div className="header__account-icon"></div>
    </div>
  );
}

export default Account;
