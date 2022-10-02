import { useEffect } from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, setIsChecked }) {

  useEffect(() => {
    localStorage.setItem('isShortMovies', JSON.stringify(isChecked));
  }, [isChecked]);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="search__checkbox-label">
      <input className="search__checkbox" type="checkbox" checked={isChecked} onChange={toggleCheckbox}></input>
      <div className="search__checkbox_visible">
        <div className="circle"></div>
      </div>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
