const initialState = {
  movieList: null,
  movieInfo: null,
  showTimeValidated: null,
  movieListToday: null,
};
const movieReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIE_LIST_SUCCESS": {
      return { ...state, movieList: payload };
    }
    case "GET_MOVIE_LIST_TIME_SUCCESS": {
      return { ...state, movieListToday: payload };
    }
    case "GET_MOVIE_DETAIL_SUCCESS": {
      return { ...state, movieInfo: payload[0], showTimeValidated: payload[1] };
    }
    default:
      return state;
  }
};
export default movieReducer;
