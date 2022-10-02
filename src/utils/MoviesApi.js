const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};


export const getMovies = () => {
  return fetch(`${MOVIES_URL}`)
    .then(checkResponse)
};
