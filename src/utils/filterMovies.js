export const filterMovies = () => {

  const movies = JSON.parse(localStorage.getItem('movies'));
  if (!movies) {
    return movies;
  }

  const foundMovies = filterMoviesByKeyWords(movies);
  if (JSON.parse(localStorage.getItem('isShortMovies'))) {
    return filterMoviesByDuration(foundMovies);
  };
  return foundMovies;
}


export const filterMoviesByKeyWords = (movies) => {

  const requestText = JSON.parse(localStorage.getItem('requestText'));

  const foundMovies = movies.filter((movie) => {
    if (movie.nameRU.toLowerCase().includes(requestText.toLowerCase())
         || movie.nameEN.toLowerCase().includes(requestText.toLowerCase())
    ) {
      return movie;
    };
  });

  return foundMovies;
};


export const filterMoviesByDuration = (movies) => {
  const foundShortMovies = movies.filter((movie) => {
    if (movie.duration <= 40) {
      return movie;
    }
  });
  return foundShortMovies;
};
