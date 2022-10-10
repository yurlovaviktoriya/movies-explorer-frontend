import { useEffect } from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, setMoviesRequestData }) {

  const { localStorageName, localStorageValue } = isChecked;

  const toggleCheckbox = (evt) => {
    localStorage.setItem(localStorageName, !localStorageValue);
    setMoviesRequestData(state => ({...state, [evt.target.name] : !localStorageValue}));
  };

  return (
    <label className="search__checkbox-label">
      <input className="search__checkbox" type="checkbox" name={localStorageName} checked={localStorageValue || false} onChange={toggleCheckbox}></input>
      <div className="search__checkbox_visible">
        <div className="circle"></div>
      </div>
      Короткометражки
    </label>
  );
};

export default FilterCheckbox;
