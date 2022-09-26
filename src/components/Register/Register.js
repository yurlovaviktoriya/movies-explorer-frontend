import Logo from '../Logo/Logo';
import './Register.css';

function Register() {

  return (
    <div className="register">
        <Logo
          isAuth={true}
        />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__label">
             Имя
            <input className="register__input" type="text" minLength="2"></input>
          </label>
          <label className="register__label">
            E-mail
            <input className="register__input " type="email"></input>
          </label>
          <label className="register__label">
            Пароль
            <input className="register__input register__input_type_error" type="password" value="12345678911111"></input>
            <span className="register__input-error">Что-то пошло не так...</span>
          </label>
          <button className="btn register__btn" type="submit">Зарегистрироваться</button>
        </form>
        <p className="register__text">Уже зарегистрированы?<a className="link link_color_green" href="/signin"> Войти</a></p>
    </div>
  );
};

export default Register;
