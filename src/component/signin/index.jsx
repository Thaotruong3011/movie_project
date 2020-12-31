import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/img/group@2x.png";
import { loginRequest } from "../../redux/actions/user.actions";
import "./styles.scss";
function SignIn() {
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const message = useSelector((state) => state.common.message);
  const dispatch = useDispatch();
  const history = useHistory();
  function handleChange(event) {
    const { name, value } = event.target;
    value.trim();
    setUser({
      ...user,
      [name]: value.trim(),
    });
  }
  function handleSubmit(event) {
    // event.preventDefault();
    console.log(3);
    if (user.taiKhoan !== "" && user.matKhau !== "") {
      dispatch(loginRequest(user, history));
    }
  }
  return (
    <div className="SignIn">
      <img src={logo} alt="logo" className="sigin-header" />
      <div className="signin-message">
        Đăng nhập để được nhiều ưu đãi, mua vé <br />
        và bảo mật thông tin!
        <div className={`${message ? "alert alert-danger" : " "}`}>
          {message}
        </div>
      </div>
      <div className="form-content d-flex flex-column align-items-center pt-3">
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
            label="Mật Khẩu"
            type="password"
            id="matKhau"
            autoComplete="current-matKhau"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <button className="btn" onClick={handleSubmit}>
            Đăng Nhập
          </button>
        </form>
        <p className="mt-2">
          Bạn chưa có tài khoản? Đăng ký
          <NavLink to="/signup" variant="body2">
            {" "}
            tại đây
          </NavLink>
          !
        </p>
      </div>
    </div>
  );
}

export default SignIn;
