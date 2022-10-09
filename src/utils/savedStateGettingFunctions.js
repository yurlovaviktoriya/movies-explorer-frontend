import { getDataFromLocalStorage } from './moveLocalStorageDataFunctions';

export const getCurrentUserState = () => {
  return {
    name: getDataFromLocalStorage('currentUserName'),
    email: getDataFromLocalStorage('currentUserEmail')
  };
};

export const getAllMoviesRequestData = () => {
  const searchQueryForAllMovies = getDataFromLocalStorage('searchQueryForAllMovies');
  const isShortMoviesForAllMovies = getDataFromLocalStorage('isShortMoviesForAllMovies');

  return {
    searchQueryForAllMovies: searchQueryForAllMovies === null ? '' : searchQueryForAllMovies,
    isShortMoviesForAllMovies: isShortMoviesForAllMovies === null ? false : isShortMoviesForAllMovies
  };
};

export const getUserMoviesRequestData = () => {
  const searchQueryForUserMovies = getDataFromLocalStorage('searchQueryForUserMovies');
  const isShortMoviesForUserMovies = getDataFromLocalStorage('isShortMoviesForUserMovies');
  
  return {
    searchQueryForUserMovies: searchQueryForUserMovies === null ? '' : searchQueryForUserMovies,
    isShortMoviesForUserMovies: isShortMoviesForUserMovies === null ? false : isShortMoviesForUserMovies
  };
};
