import { FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import logo from "../../assets/img/group@2x.png";
import { signUpRequest } from "../../redux/actions/user.actions";
import "./styles.scss";
function SignUp() {
  const [user, setUser] = useState({});
  const message = useSelector((state) => state.common.message);
  const messageLogin = useSelector((state) => state.common.messageLogin);
  const linkRedirect = useSelector((state) => state.common.linkRedirect);
  const dispatch = useDispatch();
  const history = useHistory();
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "email") {
    }
    value.trim();
    setUser({
      ...user,
      [name]: value.trim(),
    });
  }
  function validateMatKhau(matKhau) {
    if (matKhau.length < 6) {
      dispatch({
        type: "EDIT_MESSAGE",
        payload: "Mật khẩu phải dài hơn 6 kí tự",
      });
      return false;
    }
    return true;
  }
  function validateSDT(sdt) {
    if (sdt.length < 9 || !(sdt > 1)) {
      dispatch({
        type: "EDIT_MESSAGE",
        payload: "Số điện thoại không đúng định dạng",
      });
      return false;
    }
    return true;
  }
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      dispatch({
        type: "EDIT_MESSAGE",
        payload: "Email không đúng định dạng",
      });
      return false;
    }
    return true;
  }
  function ValidateUser() {
    if (
      user.matKhau &&
      user.taiKhoan &&
      user.email &&
      user.hoTen &&
      user.soDt
    ) {
      if (validateEmail(user.email)) {
        if (validateMatKhau(user.matKhau)) {
          if (validateSDT(user.soDt)) {
            dispatch({
              type: "EDIT_MESSAGE",
              payload: "",
            });
          }
        }
      }
      return true;
    }
    return false;
  }
  function handleSignUp(event) {
    if (ValidateUser(user)) {
      event.preventDefault();
    }
    if (!message && ValidateUser(user)) {
      dispatch(signUpRequest(user, history));
    }
  }
  function renderMessage() {
    if (message) return message;
    else if (messageLogin) return messageLogin;
    return "Đăng ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!";
  }
  if (linkRedirect) {
    return <Redirect push to={`${linkRedirect}`} />;
  } else
    return (
      <div className="background">
        <div className="SignUp">
          <img src={logo} alt="logo" className="sigin-header" />
          <div
            className={`signin-message my-0 py-0 ${
              message || messageLogin ? "alert alert-danger py-2" : " "
            }`}
          >
            {renderMessage()}
          </div>
          <div className="form-content d-flex flex-column align-items-center ">
            <form>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="taiKhoan"
                label="Tài Khoản"
                name="taiKhoan"
                autoComplete="taiKhoan"
                autoFocus
                onChange={handleChange}
                // error={userValidate.accountVali}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="matKhau"
                label="Mật Khẩu (lớn hơn 6 kí tự)"
                type="password"
                id="matKhau"
                autoComplete="current-matKhau"
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="hoTen"
                label="Họ Tên"
                name="hoTen"
                type="text"
                autoFocus
                onChange={handleChange}
                // error={userValidate.accountVali}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="soDt"
                label="Số Điện Thoại"
                name="soDt"
                type="text"
                autoFocus
                onChange={handleChange}
              />

              <button className="btn" onClick={handleSignUp}>
                Đăng Ký
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SignUp;
