import { useEffect, useState } from 'react';

import AuthPage from '../AuthPage/AuthPage';

import './Register.css';

import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Register({ isLoading, onRegister, serverMessage, setServerMessage }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const submitBtnText = isLoading ? 'Регистрация...' : 'Зарегистрироваться';

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    onRegister({
      name: values.registerName,
      email: values.registerEmail,
      password: values.registerPassword
    });
  };

  return (
    <AuthPage
      title={'Добро пожаловать!'}
      text={'Уже зарегистрированы?'}
      textLink={'Войти'}
      link={'/signin'}
      formData={
        {
          submitBtnText,
          submitBtnClasses: 'btn auth__btn auth__btn_type_register'
        }
      }
      inputData={
        [
          {
            id: 1,
            labelText: 'Имя',
            inputType: 'text',
            inputName: 'registerName',
            minLength: '2',
            maxLength: '30',
            autocomplete: 'off'
          },
          {
            id: 2,
            labelText: 'E-mail',
            inputType: 'email',
            inputName: 'registerEmail',
            autocomplete: 'off'
          },
          {
            id: 3,
            labelText: 'Пароль',
            inputType: 'password',
            inputName: 'registerPassword',
            autocomplete: 'new-password'
          },
        ]
      }
      onChangeInputText={handleChange}
      onSubmit={handleSubmit}
      serverMessage={serverMessage}
      setServerMessage={setServerMessage}
      inputValues={values}
      errorsMessage={errors}
      isValidForm={isValid}
      isLoading={isLoading}
    />
  )
};

export default Register;
