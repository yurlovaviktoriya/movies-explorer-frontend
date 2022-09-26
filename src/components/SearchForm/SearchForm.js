import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input className="search__input" type="text" placeholder="Фильм"></input>
        <button className="btn search__film-btn" type="submit">Поиск</button>
        <FilterCheckbox/>
      </form>
    </section>
  );
}

export default SearchForm;
