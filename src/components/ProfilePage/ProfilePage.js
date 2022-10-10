import { useContext, useEffect, useState } from 'react';

import Header from '../Header/Header';
import ProfileForm from '../ProfileForm/ProfileForm';

import './ProfilePage.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { useFormWithValidation } from '../../utils/useFormWithValidation';
import { getDataFromLocalStorage } from '../../utils/moveLocalStorageDataFunctions';

function ProfilePage({ isLoading, openBurgerMenu, onHandleUpdateProfileInfo,
                       onHandleExitClick, serverMessage, setServerMessage }) {

  let { name, email } = useContext(CurrentUserContext).currentUser;
  
  if (!name || !email) {
    name = getDataFromLocalStorage('currentUser').name;
    email = getDataFromLocalStorage('currentUser').email;
  };

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({ profileName: name, profileEmail: email});

  const [isActualData, setIsActualData] = useState(false);

  useEffect(() => {
    if (values.profileName === name && values.profileEmail === email ) {
      setIsActualData(false);
    } else {
      setIsActualData(true);
    }
    }, [values]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onHandleUpdateProfileInfo({
      name: values.profileName,
      email: values.profileEmail
    }, setIsActualData);
  };
    
  const handleExit = () => {
    onHandleExitClick();
  };
  
  return (
    <>
      <Header
        isDarkTheme={false}
        openBurgerMenu={openBurgerMenu}
      />
      <main className="profile">
        <h2 className="profile__title">Привет, {name}!</h2>
          <ProfileForm
            inputs={
              [
                {
                  id: 1,
                  labelText: 'Имя',
                  inputType: 'text',
                  inputName: 'profileName',
                  minLength: '2',
                  maxLength: '30',
                  userInfo: name,
                },
                {
                  id: 2,
                  labelText: 'E-mail',
                  inputType: 'email',
                  inputName: 'profileEmail',
                  userInfo: email
                },
              ]
            }
            onChangeInputText={handleChange}
            onSubmit={handleSubmit}
            serverMessage={serverMessage}
            setServerMessage={setServerMessage}
            isActualData={isActualData}
            inputValues={values}
            errorMessages={errors}
            isValidForm={isValid}
            isLoading={isLoading}
          />
        <button className="btn profile__btn profile__logout-btn" type="button" onClick={handleExit}>Выйти из аккаунта</button>
      </main>
    </>
  );
};

export default ProfilePage;
