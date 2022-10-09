import { MOVIES_BASE_URL } from '../constants/apiSettings';
import {checkApiResponse} from './checkApiResponse';

export const getMovies = () => {
  return fetch(`${MOVIES_BASE_URL}/beatfilm-movies`)
    .then(checkApiResponse)
};
