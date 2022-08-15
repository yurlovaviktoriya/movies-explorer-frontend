import Logo from '../Logo/Logo'
import './Login.css';

function Login() {
  return (
    <div className='register'>
        <Logo/>
        <h2 className='register__title'>Рады видеть!</h2>
        <form className='register__form'>
          <label className='register__label'>
            E-mail
            <input className='register__input' type='text'></input>
          </label>
          <label className='register__label'>
            Пароль
            <input className='register__input' type='password'></input>
          </label>
          <button className='register__btn' type='submit'>Войти</button>
        </form>
        <p className='register__text'>Ещё не зарегистрированы?<a className='link register__link' href='/signup'> Регистрация</a></p>
    </div>
  );
}

export default Login;
