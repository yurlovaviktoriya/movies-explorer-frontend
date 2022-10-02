import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';

import './Login.css';

function Login({ isLoading, onLogin }) {

  const submitBtnText = isLoading ? 'Вход...' : 'Войти';

  const [userLoginInfo, setUserLoginInfo] = useState({
    loginEmail: '',
    loginPassword: ''
  });

  const handleChangeInputText = (evt) => {
    setUserLoginInfo(state => ({...state, [evt.target.name] : evt.target.value}));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin({
      email: userLoginInfo.loginEmail,
      password: userLoginInfo.loginPassword
    });
  };

  return (
    <AuthPage
      title={'Рады видеть!'}
      text={'Ещё не зарегистрированы?'}
      textLink={'Регистрация'}
      link={'/signup'}
      formData={
        {
          submitBtnText,
          submitBtnClasses: 'btn auth__btn auth__btn_type_login'
        }
      }
      inputData={
        [
          {
            id: 1,
            labelText: 'E-mail',
            inputType: 'email',
            inputName: 'loginEmail',
            inputValue: userLoginInfo.loginEmail
          },
          {
            id: 2,
            labelText: 'Пароль',
            inputType: 'current-password',
            inputName: 'loginPassword',
            inputValue: userLoginInfo.loginPassword
          },
        ]
      }
      onChangeInputText={handleChangeInputText}
      onSubmit={handleSubmit}
    />
  )
};

export default Login;
