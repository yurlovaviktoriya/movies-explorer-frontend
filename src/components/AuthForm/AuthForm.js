import { useState } from 'react';

import AuthInput from '../AuthInput/AuthInput';

import './AuthForm.css';

function AuthForm({ submitBtnText, submitBtnClasses, inputs, onChangeInputText, onChangeInputError, onSubmit }) {

    const [btnActive, setBtnActive] = useState(false);

    const formBtnClasses = btnActive ? submitBtnClasses : `${submitBtnClasses} auth__btn_disabled`;

    const toggleButtonState = (evt, hasInvalidInput) => {
      const isError = !onChangeInputError(evt, hasInvalidInput);
      if (isError) {
        console.log('OFF');
        setBtnActive(false);
      } else {
        console.log('ON');
        setBtnActive(true);
      }
    };

    return (
      <form className="auth__form" onSubmit={onSubmit}>
         {inputs.map((input) => (
          <AuthInput
            key={input.id}
            labelText={input.labelText}
            inputType={input.inputType}
            inputName={input.inputName}
            inputValue={input.inputValue}
            minLength={input.minLength}
            maxLength={input.maxLength}
            onChangeInputText={onChangeInputText}
            onToggleButtonState={toggleButtonState}
          />
        ))}
        <button className={formBtnClasses} type="submit">{submitBtnText}</button>
      </form>
    )
};

export default AuthForm;
