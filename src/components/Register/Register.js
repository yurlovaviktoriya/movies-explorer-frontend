import Logo from '../Logo/Logo'
import './Register.css';

function Register() {
  return (
    <div className='register'>
        <Logo/>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form'>
          <label className='register__label'>
             Имя
            <input className='register__input' type='text'></input>
          </label>
          <label className='register__label'>
            E-mail
            <input className='register__input' type='text'></input>
          </label>
          <label className='register__label'>
            Пароль
            <input className='register__input' type='password'></input>
          </label>
          <button className='register__btn' type='submit'>Зарегистрироваться</button>
        </form>
        <p className='register__text'>Уже зарегистрированы?<a className='link register__link' href='/signin'> Войти</a></p>
    </div>
  );
}

export default Register;
