import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="search__checkbox-label">
      <input className="search__checkbox" type="checkbox"></input>
      <div className="search__checkbox_visible">
        <div className="circle"></div>
      </div>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
