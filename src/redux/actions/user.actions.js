import Axios from "axios";
import { redirectRequest } from "./common.actions";

export function loginRequest(user, history) {
  return (dispatch) => {
    Axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      user
    )
      .then((res) => {
        history.goBack();
        console.log(history);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((error) => {
        dispatch(getMessageError(error.response.data));
      });
  };
}
function getMessageError(message) {
  return {
    type: "MESSENGER_LOGIN",
    payload: message,
  };
}
export function signUpRequest(user, history) {
  console.log(3);
  user = { ...user, maNhom: "GP05", maLoaiNguoiDung: "KhachHang" };

  return (dispatch) => {
    Axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      user
    )
      .then(() => {
        alert("Đăng ký thành công");
        dispatch(redirectRequest("/login"));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(getMessageError(err.response.data));
      });
  };
}
