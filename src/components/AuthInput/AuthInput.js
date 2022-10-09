import { useState } from 'react';

import './AuthInput.css';

function AuthInput({ inputValues, errorsMessage, labelText, inputType, inputName,
                     minLength, maxLength, onChangeInputText }) {

  const message = errorsMessage[inputName];
  const inputValue = inputValues[inputName];

  const inputClasses = message ? "auth__input auth__input_type_error" : "auth__input";

  return (
    <label className="auth__label">
      {labelText}
      <input className={inputClasses} type={inputType} name={inputName}
         minLength={minLength && minLength} maxLength={maxLength && maxLength}
         value={inputValue || ''} required onChange={onChangeInputText}></input>
      <span className="auth__input-error-text">{message}</span>
    </label>
  );
};

export default AuthInput;
