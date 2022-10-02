import { useState } from 'react';

import './AuthInput.css';

import InputValidator from '../../utils/InputValidator';

function AuthInput({ labelText, inputType, inputName, inputValue, minLength, maxLength, onChangeInputText, onToggleButtonState }) {

  const [isInputError, setIsInputError] = useState({isValid: false, message: ''});

  const inputClasses = !isInputError.isValid ? "auth__input auth__input_type_error" : "auth__input";
  const spanClasses = !isInputError.isValid ? "auth__input-error auth__input-error_visible" : "auth__input-error";

  const handleChange = (evt) => {

    onChangeInputText(evt);

    const validator = new InputValidator(evt.target);

    const validationResult = validator.enableValidation();

    if (!validationResult.isValid) {
      setIsInputError({isValid: false, message: validationResult.errorMessage});
      onToggleButtonState(evt, true);
    } else {
      setIsInputError({isValid: true, message: ''});
      onToggleButtonState(evt, false);
    }
  }

  return (
    <label className="auth__label">
      {labelText}
      <input className={inputClasses} type={inputType} name={inputName}
         minLength={minLength && minLength} maxLength={maxLength && maxLength}
         value={inputValue} required onChange={handleChange}></input>
      <span className={spanClasses}>{isInputError.message}</span>
    </label>
  );
};

export default AuthInput;
