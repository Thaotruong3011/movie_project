import Axios from "axios";
import { redirectRequest } from "./common.actions";

export function loginRequest(user, history) {
  return (dispatch) => {
    Axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      user
    )
      .then((res) => {
        // if (linkRedirect.indexOf("checkout") !== -1) {
        //   // dispatch(redirectRequest(`${linkRedirect}`));
        //   // console.log(3);
        // } else {
        //   // dispatch(redirectRequest("/"));
        //   console.log(4);
        // }
        // // console.log(linkRedirect.index("checkout"));
        history.goBack();
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((error) => {
        dispatch(getMessageError(error.response.data));
      });
  };
}
function getMessageError(message) {
  console.log(message);
  return {
    type: "MESSENGER_LOGIN",
    payload: message,
  };
}

export function signUpRequest(user) {
  user = { ...user, maNhom: "GP05", maLoaiNguoiDung: "KhachHang" };

  return (dispatch) => {
    Axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      user
    )
      .then(() => {
        console.log(5);
        dispatch({
          type: "SET_VALIDATE",
        });
        dispatch(redirectRequest("/login"));
      })
      .catch((err) => {
        console.log(6);
        dispatch({
          type: "EDIT_MESSAGE",
          payload: err.response.data,
        });
      });
  };
}
