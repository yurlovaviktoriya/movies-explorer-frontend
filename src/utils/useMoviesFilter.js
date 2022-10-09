import { useState } from 'react';

import { getDataFromLocalStorage, setDataToLocalStorage } from './moveLocalStorageDataFunctions';

const useMoviesFilter = (queryParamLocalStorageKeys, foundMoviesLocalStorageKey) => {

  const { searchQueryKey, isShortMoviesKey } = queryParamLocalStorageKeys;

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [notFoundMovies, setNotFoundMovies] = useState('');

  const filterMoviesBySearchQuery = (movies, searchQuery) => {
    return movies.filter((movie) => {
      if (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())) {
        return movie;
      };
    });
  };

  const filterMoviesByDuration = (movies) => {
    return movies.filter((movie) => {
      if (movie.duration <= 40) {
        return movie;
      }
    });
  };

  const filterMovies = (movies) => {
    const searchQuery = getDataFromLocalStorage(searchQueryKey);
    const isShortMovies = getDataFromLocalStorage(isShortMoviesKey);

    if (!searchQuery && isShortMovies) {
      return filterMoviesByDuration(movies);
    } else if (!searchQuery) {
      return movies;
    };

    const foundMovies = filterMoviesBySearchQuery(movies, searchQuery);

    if (isShortMovies) {
      return filterMoviesByDuration(foundMovies);
    };

    return foundMovies;
  };

  const enableFiltration = (movies) => {
    if (!movies || movies.length === 0) {
      return movies;
    };

    setNotFoundMovies('');

    const result = filterMovies(movies);
    setDataToLocalStorage(foundMoviesLocalStorageKey, result);

    if (result.length === 0) {
      setNotFoundMovies('Ничего не найдено.');
    } else {
      setNotFoundMovies('');
    };

    setFilteredMovies(result);
    return result;
  };

  return { filteredMovies, notFoundMovies, enableFiltration };
};

export default useMoviesFilter;
