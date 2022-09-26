import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ isSaved, movies }) {

  return (
    <section className="card-list">
      {movies.map((card) => (
          <MoviesCard
            key={card.id}
            name={card.nameRu}
            duration={card.duration}
            isLiked={card.isLiked}
            image={card.image}
            isSaved={isSaved}
          />
        ))}
    </section>
  );
}

export default MoviesCardList;
