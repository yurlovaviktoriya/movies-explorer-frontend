import { checkApiResponse } from './checkApiResponse';
import { mainApiSettings, MOVIES_BASE_URL } from '../constants/apiSettings';

export const register = ({ name, email, password }) => {
  return fetch(`${mainApiSettings.baseUrl}/signup`,
    {
      method: 'POST',
      headers: mainApiSettings.headers,
      body: JSON.stringify({name, email, password})
    }).then(checkApiResponse)
}

export const login = ({ email, password }) => {
  return fetch(`${mainApiSettings.baseUrl}/signin`,
    {
      method: 'POST',
      headers: mainApiSettings.headers,
      credentials: mainApiSettings.credentials,
      body: JSON.stringify({email, password})
    }).then(checkApiResponse)
};

export const logout = () => {
  return fetch(`${mainApiSettings.baseUrl}/signout`,
    {
      method: 'POST',
      headers: mainApiSettings.headers,
      credentials: mainApiSettings.credentials,
    }).then(checkApiResponse)
};

export const getProfileInfo = () => {
  return fetch(`${mainApiSettings.baseUrl}/users/me `,
    {
      headers: mainApiSettings.headers,
      credentials: mainApiSettings.credentials,
    }).then(checkApiResponse)
};

export const editProfileInfo = ({ name, email }) => {
  return fetch (`${mainApiSettings.baseUrl}/users/me`,
    {
      method: 'PATCH',
      headers: mainApiSettings.headers,
      credentials: mainApiSettings.credentials,
      body: JSON.stringify({ name, email })
    }).then(checkApiResponse)
};

export const getSavedMovies = () => {
  return fetch(`${mainApiSettings.baseUrl}/movies`,
    {
      headers: mainApiSettings.headers,
      credentials: mainApiSettings.credentials,
    }).then(checkApiResponse)
};

export const saveMovie = ( movie ) => {
  return fetch (`${mainApiSettings.baseUrl}/movies`,
    {
      method: 'POST',
      headers: mainApiSettings.headers,
      credentials: mainApiSettings.credentials,
      body: JSON.stringify({
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        director: movie.director,
        country: movie.country,
        year: movie.year,
        duration: movie.duration,
        description: movie.description,
        trailerLink: movie.trailerLink,
        image: `${MOVIES_BASE_URL}${movie.image.url}`,
        thumbnail:`${MOVIES_BASE_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id
      })
    }).then(checkApiResponse)
};

export const deleteMovie = (movieId) => {
  return fetch (`${mainApiSettings.baseUrl}/movies/${movieId}`,
    {
      method: 'DELETE',
      headers: mainApiSettings.headers,
      credentials: mainApiSettings.credentials,
    }).then(checkApiResponse)
};
