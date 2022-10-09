import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

import { useState } from 'react';

import { getDataFromLocalStorage, setDataToLocalStorage } from '../../utils/moveLocalStorageDataFunctions';

function SearchForm({ requestText, isShortMovies, setMoviesRequestData, onHandleSubmit }) {

  const { localStorageName, localStorageValue } = requestText;

  const [isValid, setIsValid] = useState('');

  const btnClasses = !isValid ? 'btn search__film-btn' : "btn search__film-btn search__film-btn_disabled";

  const changeInputValue = (evt) => {
    if (!evt.target.closest("form").checkValidity()) {
      setIsValid('Нужно ввести ключевое слово');
    } else {
      setIsValid('');
    }
    setMoviesRequestData(state => ({...state, [evt.target.name] : evt.target.value}));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setDataToLocalStorage(localStorageName, localStorageValue);

    onHandleSubmit();
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input className="search__input" type="text" name={localStorageName} placeholder="Фильм"
          required onChange={changeInputValue} value={localStorageValue || ''}></input>
        <span className="search__error-text">{isValid}</span>
        <button className={btnClasses} type="submit" disabled={!localStorageValue}>Поиск</button>
        <FilterCheckbox
          isChecked={isShortMovies}
          setMoviesRequestData={setMoviesRequestData}
        />
      </form>
    </section>
  );
}

export default SearchForm;
