import { MOVIES_BASE_URL } from '../constants/apiSettings';

const regexLink = /^http(s)?:\/\/(www\.)?([\w-]+\.)+(\w)+(\/[\w-._~:/?#\[\]@!$&'()*+,;=]+)?#?$/;

export const validateApiMovies = (movies) => {

  const validMovies = movies.filter((movie) => {
    const {id, duration, country, director, description, year, image, trailerLink, nameRU, nameEN } = movie;
    if ((typeof id && typeof duration) === 'number'
        && (typeof country && typeof director && typeof description
        && typeof year && typeof nameRU && typeof nameEN ) === 'string'
        && regexLink.test(trailerLink)
        && regexLink.test(`${MOVIES_BASE_URL}${image.url}`)
        && regexLink.test(`${MOVIES_BASE_URL}${image.formats.thumbnail.url}`)
    ) { return movie };
  });
  return validMovies;
};
