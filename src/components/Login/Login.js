import { useState, useEffect } from 'react';

import AuthPage from '../AuthPage/AuthPage';

import './Login.css';

import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Login({ isLoading, onLogin, serverMessage, setServerMessage }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();
  
  const submitBtnText = isLoading ? 'Вход...' : 'Войти';

  const handleSubmit = (evt, btnSubmit) => {
    evt.preventDefault();

    onLogin({
      email: values.loginEmail,
      password: values.loginPassword
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
            inputName: 'loginEmail'
          },
          {
            id: 2,
            labelText: 'Пароль',
            inputType: 'password',
            inputName: 'loginPassword'
          },
        ]
      }
      inputValues={values}
      errorsMessage={errors}
      isValidForm={isValid}
      onChangeInputText={handleChange}
      onSubmit={handleSubmit}
      serverMessage={serverMessage}
      setServerMessage={setServerMessage}
    />
  )
};

export default Login;
