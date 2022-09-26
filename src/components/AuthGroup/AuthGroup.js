import './AuthGroup.css';

function AuthGroup() {

  return (
    <div className="header__auth">
      <a className="link link_color_white header__auth-link" href="/signup">Регистрация</a>
      <a href="/signin"><button className="btn header__auth-btn">Войти</button></a>
    </div>
  );
}

export default AuthGroup;
