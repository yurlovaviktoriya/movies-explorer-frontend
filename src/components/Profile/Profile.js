import Header from '../Header/Header';

import './Profile.css';

function Profile({ openBurgerMenu }) {
  return (
    <>
      <Header
        isDarkTheme={false}
        openBurgerMenu={openBurgerMenu}
      />
      <main className="profile">
        <h2 className="profile__title">Привет, Виктория!</h2>
        <form className="profile__form">
          <label className="profile__label">
             Имя
            <input className="profile__input" type="text" value="Виктория" required></input>
          </label>
          <label className="profile__label">
            E-mail
            <input className="profile__input" type="email" value="yurlovaviktoriya@yandex.ru" required></input>
          </label>
          <button className="btn profile__btn profile__edit-btn" type="submit">Редактировать</button>
        </form>
          <button className="btn profile__btn profile__logout-btn" type="button">Выйти из аккаунта</button>
      </main>
    </>
  );
};

export default Profile;
