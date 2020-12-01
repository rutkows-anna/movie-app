import {
  MOVIE_ADD_TO_WATCHLIST,
  MOVIE_REMOVE_FROM_WATCHLIST,
  SET_MOVIES,
  SET_LOADING,
  SET_ERROR,
} from "./actionTypes";

export const movieAdd = (movie) => ({
  type: MOVIE_ADD_TO_WATCHLIST,
  payload: movie,
});
export const movieRemove = (movieId) => ({
  type: MOVIE_REMOVE_FROM_WATCHLIST,
  payload: movieId,
});
export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});
export const setLoading = () => ({
  type: SET_LOADING,
});
export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const fetchMovies = (searchValue) => (dispatch) => {
  dispatch(setLoading());
  fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${"839b3f45"}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.Response === "False") {
        dispatch(setError(response.Error));
      } else {
        dispatch(setMovies(response.Search));
      }
    });
};
