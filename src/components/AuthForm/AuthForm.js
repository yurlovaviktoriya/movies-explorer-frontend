import AuthInput from '../AuthInput/AuthInput';

import './AuthForm.css';

function AuthForm({ submitBtnText, submitBtnClasses, inputs }) {

    return (
      <form className="auth__form">
         {inputs.map((input) => (
          <AuthInput
            key={input.id}
            labelText={input.labelText}
            inputType={input.inputType}
            isInputError={input.isInputError}
          />
        ))}
        <button className={submitBtnClasses} type="submit">{submitBtnText}</button>
      </form>
    )
};

export default AuthForm;
