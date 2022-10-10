import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

import './AuthPage.css';

function AuthPage({ isLoading, inputValues, errorsMessage, isValidForm, title, text, textLink,link, formData,
                      inputData, onChangeInputText, onSubmit, serverMessage, setServerMessage }) {
  return (
    <main className="auth">
        <Logo
          isAuth={true}
        />
        <h2 className="auth__title">{title}</h2>
        <AuthForm
          submitBtnText={formData.submitBtnText}
          submitBtnClasses={formData.submitBtnClasses}
          inputs={inputData}
          onChangeInputText={onChangeInputText}
          onSubmit={onSubmit}
          serverMessage={serverMessage}
          setServerMessage={setServerMessage}
          errorsMessage={errorsMessage}
          inputValues={inputValues}
          isValidForm={isValidForm}
          isLoading={isLoading}
        />
        <p className="auth__text">{text}<Link to={link} className="link link_color_green"> {textLink}</Link></p>
    </main>
  );
};

export default AuthPage;
