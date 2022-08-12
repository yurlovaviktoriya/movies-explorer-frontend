import './MoviesCard.css';
import moviePath from '../../images/33words-about-design.jpg';

function MoviesCard() {
  return (
    <>
    <article className="card">
      <div className="card__info">
        <h2 className="card__title">33 слова о дизайне</h2>
        <p className="card__duration">1ч 42м</p>
        <button className="card__like-btn card__like-btn_active"></button>
      </div>
      <img className="card__img" src={moviePath} alt="Постер фильма"></img>
    </article>
    <article className="card">
      <div className="card__info">
        <h2 className="card__title">33 слова о дизайне</h2>
        <p className="card__duration">1ч 42м</p>
        <button className="card__like-btn"></button>
      </div>
      <img className="card__img" src={moviePath} alt="Постер фильма"></img>
    </article>
    </>
  );
}

export default MoviesCard;
