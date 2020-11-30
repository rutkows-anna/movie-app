import * as actions from "./actionTypes";

const initialState = {
  moviesToWatch: [],
  movies: [],
  error: null,
  loading: false,
  searchValue: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MOVIE_ADD_TO_WATCHLIST:
      return {
        ...state,
        moviesToWatch: [...state.moviesToWatch, action.payload],
      };
    case actions.MOVIE_REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        moviesToWatch: state.moviesToWatch.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    case actions.SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        error: null,
        loading: false,
      };
    case actions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actions.SET_LOADING:
      return {
        ...state,
        loading: true,
        movies: [],
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
