import { useState, useEffect, useRef } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

import { MOVIES_BASE_URL } from '../../constants/apiSettings';

import { getDataFromLocalStorage } from '../../utils/moveLocalStorageDataFunctions';

function MoviesCardList({ moviesListElement, moviesListHeight, isSaved, moviesToRender, userMoviesRequestData, isChecked,
                          enableFiltration, onHandleSaveMovie, onHandleDeleteMovie }) {

  const [heightSection, setHeightSection] = useState('');

  const userMovies = getDataFromLocalStorage('userMovies');

  useEffect(() => {
    setHeightSection(`${moviesListHeight}px`)
  }, [moviesListHeight]);
    
  useEffect(enableFiltration, [isChecked]);

  return (
    <section ref={moviesListElement} className="card-list" style={{height: heightSection}}>
      {moviesToRender.map((card) => (
          <MoviesCard
            key={isSaved ? card.movieId : card.id}
            cardData={{
              id: isSaved ? card.movieId : card.id,
              name: card.nameRU,
              duration: card.duration,
              isLiked: isSaved ? null : userMovies === null ?
                                 false : userMovies.some((movie) => {return movie.movieId === card.id}),
              image: isSaved ? card.thumbnail : `${MOVIES_BASE_URL}${card.image.formats.thumbnail.url}`,
              trailerLink: card.trailerLink
            }}
            moviesToRender={moviesToRender}
            isSaved={isSaved}
            saveMovie={onHandleSaveMovie}
            deleteMovie={onHandleDeleteMovie}
          />
        ))}
    </section>
  );
}

export default MoviesCardList;
