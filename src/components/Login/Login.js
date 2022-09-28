import AuthPage from '../AuthPage/AuthPage';

import './Login.css';

function Login() {

  return (
    <AuthPage
      title={'Рады видеть!'}
      text={'Ещё не зарегистрированы?'}
      textLink={'Регистрация'}
      link={'/signup'}
      formData={
        {
          submitBtnText: 'Войти',
          submitBtnClasses: 'btn auth__btn auth__btn_type_login'
        }
      }
      inputData={
        [
          {
            id: 1,
            labelText: 'E-mail',
            inputType: 'email',
            isInputError: false
          },
          {
            id: 2,
            labelText: 'Пароль',
            inputType: 'current-password',
            isInputError: false
          },
        ]
      }
    />
  )
};

export default Login;
