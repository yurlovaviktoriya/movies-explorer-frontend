import {useState, useEffect} from 'react';

import ProfileInput from '../ProfileInput/ProfileInput';

import './ProfileForm.css';

function ProfileForm({ isLoading, inputValues, errorMessages, isValidForm, inputs, onChangeInputText, onSubmit,
                       serverMessage, setServerMessage, isActualData }) {
    

  const message = JSON.parse(localStorage.getItem('serverMessage'));

  const isDisabledBtn = !isValidForm || !isActualData || isLoading;
  const btnClasses = isDisabledBtn ? 'btn profile__btn profile__edit-btn profile__edit-btn_disabled'
                                   : 'btn profile__btn profile__edit-btn';

  useEffect(()=> {
    localStorage.setItem('serverMessage', JSON.stringify(serverMessage));
    return setServerMessage('')
  }, [serverMessage]);
  
  return (
    <form className="profile__form" onSubmit={onSubmit}>
      {inputs.map((input) => (
          <ProfileInput
            key={input.id}
            labelText={input.labelText}
            inputType={input.inputType}
            inputName={input.inputName}
            userInfo={input.userInfo}
            minLength={input.minLength}
            maxLength={input.maxLength}
            onChangeInputText={onChangeInputText}
            isActualData={isActualData}
            inputValues={inputValues}
            errorMessages={errorMessages}
          />
        ))}
      <p className="profile__server-message">{message}</p>
      <button className={btnClasses} type="submit" disabled={isDisabledBtn}>Редактировать</button>
    </form>
  );
};

export default ProfileForm;
