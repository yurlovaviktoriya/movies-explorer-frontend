import './MoviesCard.css';

function MoviesCard({ isSaved, name, duration, isLiked, image}) {

  const [hour, min] = duration >= 60 ? [Math.floor(duration / 60), duration % 60] : [0, duration];

  const durationNote = hour === 0 ? `${min} м` : `${hour} ч ${min} м`;

  const btnClasses = isSaved ? "btn card__btn card__btn_type_delete"
    : isLiked ? "btn card__btn card__btn_type_dislike" : "btn card__btn card__btn_type_like";

  return (
    <article className="card">
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
        <p className="card__duration">{durationNote}</p>
        <button className={btnClasses}></button>
      </div>
      <img className="card__img" src={image} alt="Постер фильма"></img>
    </article>
  );
};

export default MoviesCard;
