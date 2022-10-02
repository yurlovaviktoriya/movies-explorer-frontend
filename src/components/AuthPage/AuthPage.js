import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

import './AuthPage.css';

function AuthPage({ title, text, textLink, link, formData, inputData, onChangeInputText, onChangeInputError, onSubmit }) {
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
          onChangeInputError={onChangeInputError}
          onSubmit={onSubmit}
        />
        <p className="auth__text">{text}<Link to={link} className="link link_color_green"> {textLink}</Link></p>
    </main>
  );
};

export default AuthPage;
