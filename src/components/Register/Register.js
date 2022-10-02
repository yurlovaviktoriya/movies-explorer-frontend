import {useState} from 'react';

import AuthPage from '../AuthPage/AuthPage';

import './Register.css';

function Register({ isLoading, onRegister }) {

  const submitBtnText = isLoading ? 'Регистрация...' : 'Зарегистрироваться';

  const [userRegisterInfo, setUserRegisterInfo] = useState({
    registerName: '',
    registerEmail: '',
    registerPassword: ''
  });

  const [inputErrors, setInputErrors] = useState({
    registerName: false,
    registerEmail: false,
    registerPassword: false
  });

  const handleChangeInputText = (evt) => {
    setUserRegisterInfo(state => ({...state, [evt.target.name] : evt.target.value}));
  };

  const changeInputErrorState = (inputName, isError) => {
    setInputErrors((state) => ({...state, [inputName] : isError}));
  };

  const handleChangeInputError = (evt, isInvalidInput) => {
    if (isInvalidInput) {
      changeInputErrorState(evt.target.name, true);
    } else {
      changeInputErrorState(evt.target.name, false);
    }
   return Object.values(inputErrors).every(item => item === false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister({
      name: userRegisterInfo.registerName,
      email: userRegisterInfo.registerEmail,
      password: userRegisterInfo.registerPassword
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
            inputValue: userRegisterInfo.registerName,
            minLength: '2',
            maxLength: '30'
          },
          {
            id: 2,
            labelText: 'E-mail',
            inputType: 'email',
            inputName: 'registerEmail',
            inputValue: userRegisterInfo.registerEmail
          },
          {
            id: 3,
            labelText: 'Пароль',
            inputType: 'current-password',
            inputName: 'registerPassword',
            inputValue: userRegisterInfo.registerPassword
          },
        ]
      }
      onChangeInputText={handleChangeInputText}
      onChangeInputError={handleChangeInputError}
      onSubmit={handleSubmit}
    />
  )
};

export default Register;
