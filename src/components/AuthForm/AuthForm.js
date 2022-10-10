import {useState, useRef, useEffect} from 'react';

import AuthInput from '../AuthInput/AuthInput';

import './AuthForm.css';

import { getDataFromLocalStorage, setDataToLocalStorage } from '../../utils/moveLocalStorageDataFunctions';

function AuthForm({ isLoading, isValidForm, inputValues, errorsMessage, submitBtnText, submitBtnClasses, inputs,
                    onChangeInputText, onSubmit, serverMessage, setServerMessage }) {

  const btnSubmit = useRef(); 

  const formBtnClasses = isValidForm ? submitBtnClasses : `${submitBtnClasses} auth__btn_disabled`;
  
  const message = JSON.parse(localStorage.getItem('serverMessage'));
  
  useEffect(()=> {
    setDataToLocalStorage('serverMessage', serverMessage);
    return () => {setServerMessage('')};
  }, [serverMessage]);
  
    return (
      <form className="auth__form" onSubmit={onSubmit}>
        {inputs.map((input) => (
          <AuthInput
            key={input.id}
            labelText={input.labelText}
            inputType={input.inputType}
            inputName={input.inputName}
            minLength={input.minLength}
            maxLength={input.maxLength}
            autocomplete={input.autocomplete}
            onChangeInputText={onChangeInputText}
            errorsMessage={errorsMessage}
            inputValues={inputValues}
          />
        ))}
          <p className="auth__server-message">{message}</p>
        <button ref={btnSubmit} className={formBtnClasses} type="submit" disabled={!isValidForm || isLoading}>{submitBtnText}</button>
      </form>
    )
};

export default AuthForm;
