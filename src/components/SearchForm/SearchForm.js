import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

// import InputValidator from '../../utils/InputValidator';

function SearchForm({ onHandleSubmit, inputValue, setInputValue, isCheckedShortMovies, setIsCheckedShortMovies }) {

  const changeInputValue = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    localStorage.setItem('requestText', JSON.stringify(inputValue));

    onHandleSubmit();
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input className="search__input" type="text" placeholder="Фильм" required onChange={changeInputValue} value={inputValue || ''}></input>
        <button className="btn search__film-btn" type="submit">Поиск</button>
        <FilterCheckbox
          isChecked={isCheckedShortMovies}
          setIsChecked={setIsCheckedShortMovies}
        />
      </form>
    </section>
  );
}

export default SearchForm;
