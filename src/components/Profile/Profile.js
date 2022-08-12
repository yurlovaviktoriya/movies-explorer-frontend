import Header from '../Header/Header';

import './Profile.css';

function Profile() {
  return (
    <>
      <Header/>
      <section className='profile'>
        <h2 className='profile__title'>Привет, Виктория!</h2>
        <form className='profile__form'>
          <label className='profile__label'>
             Имя
            <input className='profile__input' type='text' value='Виктория'></input>
          </label>
          <label className='profile__label'>
            E-mail
            <input className='profile__input' type='text' value='yurlovaviktoriya@yandex.ru'></input>
          </label>
          <button className='profile__btn profile__edit-btn' type='submit'>Редактировать</button>
        </form>
          <button className='profile__btn profile__logout-btn'>Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;
