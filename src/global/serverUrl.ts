const {VITE_API_URL} = import.meta.env

export const USER_URL = VITE_API_URL + 'user';
export const MOVIES_URL = VITE_API_URL + 'movies';
export const GENRES_URL = VITE_API_URL + 'genres';

console.log(GENRES_URL);
