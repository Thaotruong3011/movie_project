import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import logo from "../../assets/img/group@2x.png";
import { redirectRequest } from "../../redux/actions/common.actions";
import { signUpRequest } from "../../redux/actions/user.actions";
import Modal from "react-bootstrap/Modal";

import "./styles.scss";
function SignUp() {
  const [user, setUser] = useState({});
  const message = useSelector((state) => state.common.message);
  const linkRedirect = useSelector((state) => state.common.linkRedirect);
  const validate = useSelector((state) => state.common.validateForm);
  const account = JSON.parse(localStorage.getItem("user"));
  let validateForm = false;
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch({
      type: "SET_VALIDATE",
    });
  };
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
            validateForm = true;
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

    if (validateForm) {
      dispatch(signUpRequest(user));
      dispatch({
        type: "EDIT_MESSAGE",
        payload: "",
      });
    }
  }
  function renderMessage() {
    if (message) return message;
    return "Đăng ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!";
  }
  if (account) return <Redirect push to="/" />;
  else
    return (
      <div className="background">
        <div className="SignUp">
          <img src={logo} alt="logo" className="sigin-header" />
          <div
            className={`signin-message my-0 py-0 ${
              message ? "alert alert-danger py-2" : " "
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
            <p className="p-0 m-0 mt-2">
              Bạn đã có tài khoản, mời đăng nhập{" "}
              <NavLink to="/login">tại đây</NavLink>
              {"!"}
            </p>
          </div>
        </div>
        <div className="modal-block">
          <Modal
            className="modal__content"
            show={validate}
            onHide={handleCloseModal}
          >
            <Modal.Body>
              <div className="paper">
                <p id="transition-modal-title" className="text-center">
                  Chúc mừng Bạn đã đăng ký thành công!
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <NavLink to="/login" onClick={handleCloseModal}>
                Đồng ý
              </NavLink>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
}

export default SignUp;
