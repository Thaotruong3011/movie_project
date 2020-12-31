import Axios from "axios";
import { startLoading, stopLoading } from "./common.actions";
export function getCinemaListRequest() {
  return (dispatch) => {
    dispatch(startLoading());
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
    )
      .then((res) => {
        dispatch(getCinemaListSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(getCinemaListFailed());
        dispatch(stopLoading());
      });
  };
}
function getCinemaListSuccess(cinemaList) {
  return {
    type: "GET_CINEMA_LIST_SUCCESS",
    payload: cinemaList,
  };
}
function getCinemaListFailed(err) {
  return {
    type: "GET_CINEMA_LIST_FAILED",
    payload: err,
  };
}
export function getTheaterListRequest(maHeThongRap) {
  // console.log(maHeThongRap);
  // console.log(4);
  return (dispatch) => {
    // dispatch(startLoading());
    Axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    )
      .then((res) => {
        dispatch(getTheaterListSuccess(res.data));
        // dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(getTheaterListFailed());
        // dispatch(stopLoading());
      });
  };
}
function getTheaterListSuccess(theaterList) {
  return {
    type: "GET_THEATER_LIST_SUCCESS",
    payload: theaterList,
  };
}
function getTheaterListFailed(err) {
  return {
    type: "GET_THEATER_LIST_FAILED",
    payload: err,
  };
}
export function getMovieShowtimesByTheater(maHeThongRap, maCumRap) {
  return (dispatch) => {
    Axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP05`
    )
      .then((res) => {
        const listCumRap = res.data[0].lstCumRap;
        let listFilmTheater;
        let listFilmValidated = [];

        for (let cumRap of listCumRap) {
          if (cumRap.maCumRap === maCumRap) listFilmTheater = cumRap;
        }
        const sd = new Date("2020-11-01T00:00:00.000Z").getTime();
        const ed = new Date("2020-11-30T00:00:00.000Z").getTime();

        for (let film of listFilmTheater.danhSachPhim) {
          const result = film.lstLichChieuTheoPhim.filter((filmItem) => {
            const time = new Date(filmItem.ngayChieuGioChieu).getTime();
            return sd < time && time < ed;
          });
          film.result = result;
          delete film.lstLichChieuTheoPhim;
          if (film.result.length !== 0) {
            listFilmValidated.push(film);
          }
        }

        dispatch(getMovieShowtimesByTheaterSuccess(listFilmValidated));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getMovieShowtimesByTheaterFailed(err));
      });
  };
}
function getMovieShowtimesByTheaterSuccess(movieShowtimes) {
  return {
    type: "GET_MOVIE_LIST_BY_THEATER_SUCCESS",
    payload: movieShowtimes,
  };
}
function getMovieShowtimesByTheaterFailed(err) {
  return {
    type: "GET_MOVIE_LIST_BY_THEATER_FAILED",
    payload: err,
  };
}
