import './MoviesCard.css';

function MoviesCard({ cardData, moviesToRender, isSaved, saveMovie, deleteMovie }) {

  const { id, name, duration, isLiked, image, trailerLink } = cardData;

  const [hour, min] = duration >= 60 ? [Math.floor(duration / 60), duration % 60] : [0, duration];

  const durationNote = hour === 0 ? `${min}м` : `${hour}ч ${min}м`;

  const btnClasses = isSaved ? "btn card__btn card__btn_type_delete"
    : isLiked ? "btn card__btn card__btn_type_dislike" : "btn card__btn card__btn_type_like";
  
  const handleFunction = isSaved ? deleteMovie : isLiked ? deleteMovie : saveMovie;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    handleFunction(id);
  }

  return (
    <a className="link" href={trailerLink} target="_blank" rel="noreferrer">
      <article className="card">
        <div className="card__info">
          <h2 className="card__title">{name}</h2>
          <p className="card__duration">{durationNote}</p>
          <button className={btnClasses} onClick={handleSubmit} type="submit"></button>
        </div>
        <img className="card__img" src={image} alt="Постер фильма"></img>
      </article>
    </a>
  );
};

export default MoviesCard;
