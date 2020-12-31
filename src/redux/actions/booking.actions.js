import Axios from "axios";
import { startLoading, stopLoading } from "./common.actions";
export function getMovieTicketList(showtimeCode) {
  return async function (dispatch) {
    dispatch(startLoading());
    try {
      const res = await Axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showtimeCode}`,
        data: null,
      });
      dispatch(getMovieTicketListSuccess(res.data));
      dispatch(stopLoading());
    } catch (error) {
      console.log(error);
      dispatch(getMovieTicketListFailed(error));
      dispatch(stopLoading());
    }
  };
}
function getMovieTicketListSuccess(ticketList) {
  return {
    type: "GET_MOVIE_TICKET_LIST_SUCCESS",
    payload: ticketList,
  };
}
function getMovieTicketListFailed(error) {
  return {
    type: "GET_MOVIE_TICKET_LIST_FAILED",
    payload: error,
  };
}
export function postBookingRequest(maLichChieu, danhSachVe, history) {
  return async function (dispatch) {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await Axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: { maLichChieu, danhSachVe, taiKhoanNguoiDung: user.taiKhoan },
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      const data = {
        maLichChieu,
        danhSachVe,
        taiKhoanNguoiDung: user.taiKhoan,
      };
      if (res.status === 200 || res.status === 201) {
        dispatch(getBookingRequestSuccess(data));
        // history.go();
      }
    } catch (error) {
      console.log(error.response);
    }
  };
}
function getBookingRequestSuccess(info) {
  return {
    type: "GET_BOOKING_REQUEST_SUCCESS",
    payload: info,
  };
}
