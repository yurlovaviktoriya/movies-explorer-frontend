import AuthPage from '../AuthPage/AuthPage';

import './Register.css';

function Register() {

    return (
      <AuthPage
        title={'Добро пожаловать!'}
        text={'Уже зарегистрированы?'}
        textLink={'Войти'}
        link={'/signin'}
        formData={
          {
            submitBtnText: 'Зарегистрироваться',
            submitBtnClasses: 'btn auth__btn auth__btn_type_register'
          }
        }
        inputData={
          [
            {
              id: 1,
              labelText: 'Имя',
              inputType: 'text',
              isInputError: false
            },
            {
              id: 2,
              labelText: 'E-mail',
              inputType: 'email',
              isInputError: false
            },
            {
              id: 3,
              labelText: 'Пароль',
              inputType: 'current-password',
              isInputError: true
            },
          ]
        }
      />
    )
};

export default Register;
