import { combineReducers } from "redux";
import commonReducer from "./common.Reducer";
import movieReducer from "./movie.Reducer";
import cinemaReducer from "./cinema.Reducer";
import bookingReducer from "./booking.Reducer";
const rootReducer = combineReducers({
  movie: movieReducer,
  common: commonReducer,
  cinema: cinemaReducer,
  booking: bookingReducer,
});
export default rootReducer;
