import Axios from "axios";
import { startLoading, stopLoading } from "./common.actions";
export function getMovieListRequest() {
  return (dispatch) => {
    dispatch(startLoading());
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05"
    )
      .then((res) => {
        // console.log(res);
        dispatch(getMovieListSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(getMovieListFailed(error));
        dispatch(stopLoading());
      });
  };
}
function getMovieListSuccess(movieList) {
  return {
    type: "GET_MOVIE_LIST_SUCCESS",
    payload: movieList,
  };
}
function getMovieListFailed(error) {
  return {
    type: "GET_MOVIE_LIST_FAILED",
    payload: error,
  };
}
export function getMovieListByTimeRequest() {
  return (dispatch) => {
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01&tuNgay=01%2F01%2F2020&denNgay=31%2F12%2F2020"
    )
      .then((res) => {
        console.log(3);
        dispatch(getMovieListByTimeSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getMovieListByTimeFailed(err));
      });
  };
}
function getMovieListByTimeSuccess(movieListToday) {
  return {
    type: "GET_MOVIE_LIST_TIME_SUCCESS",
    payload: movieListToday,
  };
}
function getMovieListByTimeFailed(err) {
  return {
    type: "GET_MOVIE_LIST_TIME_FAILED",
    payload: err,
  };
}
export function getMovieDetailRequest(movieCode) {
  return async function (dispatch) {
    dispatch(startLoading());
    try {
      const res = await Axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
        data: null,
      });
      const sd = new Date("2020-06-01T00:00:00.000Z").getTime();
      const ed = new Date("2020-11-30T00:00:00.000Z").getTime();
      let listShowtime = res.data.lichChieu;
      listShowtime = listShowtime.filter((showtime) => {
        const time = new Date(showtime.ngayChieuGioChieu).getTime();
        return sd < time && time < ed;
      });
      dispatch(getMovieDetailSuccess(res.data, listShowtime));
      dispatch(stopLoading());
    } catch (error) {
      console.log(error);
      dispatch(getMovieDetailFailed(error));
      dispatch(stopLoading());
    }
  };
}
function getMovieDetailSuccess(movie, listShowtime) {
  return {
    type: "GET_MOVIE_DETAIL_SUCCESS",
    payload: [movie, listShowtime],
  };
}
function getMovieDetailFailed(err) {
  return {
    type: "GET_MOVIE_DETAIL_FAILED",
    payload: err,
  };
}
