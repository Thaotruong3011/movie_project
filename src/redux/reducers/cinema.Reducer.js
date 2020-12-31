const initialState = {
  cinemaList: null,
  theaterListSelected: null,
  movieShowtimeByTheater: null,
};
const cinemaReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_CINEMA_LIST_SUCCESS": {
      return { ...state, cinemaList: payload };
    }
    case "GET_THEATER_LIST_SUCCESS": {
      return { ...state, theaterListSelected: payload };
    }
    case "GET_MOVIE_LIST_BY_THEATER_SUCCESS": {
      return { ...state, movieShowtimeByTheater: payload };
    }
    default:
      return state;
  }
};
export default cinemaReducer;
