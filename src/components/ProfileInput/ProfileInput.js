import { useState } from 'react';

import './ProfileInput.css';

function ProfileInput({ inputValues, errorMessages, labelText, inputType, inputName, userInfo,
                        minLength, maxLength, onChangeInputText }) {

  const message = errorMessages[inputName];
  const inputValue = inputValues[inputName];

  const inputClasses = message ? "profile__input profile__input_type_error" : "profile__input";

  return (
    <>
      <label className="profile__label">
        {labelText}
        <input className={inputClasses} type={inputType} name={inputName}
           minLength={minLength && minLength} maxLength={maxLength && maxLength}
           value={inputValue} required onChange={onChangeInputText}></input>
      </label>
      <span className="profile__input-error-text">{message}</span>
    </>
  );
};

export default ProfileInput;
