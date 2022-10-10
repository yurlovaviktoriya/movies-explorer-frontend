import './More.css';

function More({ moreBtn,  areThereAnyMovies, onHandleClick }) {
    
  const sectionClasses = areThereAnyMovies ? 'more more_visible' : 'more';
  
  return (
    <section className={sectionClasses}>
      <button ref={moreBtn} className="btn more__btn" type="button" onClick={onHandleClick}>Ещё</button>
    </section>
  );
};

export default More;
