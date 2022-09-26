import Logo from '../Logo/Logo';
import "./Login.css";

function Login() {
  return (
    <div className="register">
        <Logo
          isAuth={true}
        />
        <h2 className="register__title">Рады видеть!</h2>
        <form className="register__form">
          <label className="register__label">
            E-mail
            <input className="register__input" type="text"></input>
          </label>
          <label className="register__label">
            Пароль
            <input className="register__input" type="password"></input>
          </label>
          <button className="btn register__btn register__btn_type_login" type="submit">Войти</button>
        </form>
        <p className="register__text">Ещё не зарегистрированы?<a className="link link_color_green" href="/signup"> Регистрация</a></p>
    </div>
  );
};

export default Login;
