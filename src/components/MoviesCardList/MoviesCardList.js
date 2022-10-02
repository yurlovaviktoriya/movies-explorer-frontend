import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ isSaved, movies }) {

  return (
    <section className="card-list">
      {movies.map((card) => (
          <MoviesCard
            key={card.id}
            name={card.nameRU}
            duration={card.duration}
            isLiked={card.isLiked}
            image={`https://api.nomoreparties.co${card.image.url}`}
            isSaved={isSaved}
          />
        ))}
    </section>
  );
}

export default MoviesCardList;
