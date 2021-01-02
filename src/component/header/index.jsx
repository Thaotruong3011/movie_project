import React, { useEffect, useState } from "react";
import logo from "../../assets/img/web-logo.png";
import location from "../../assets/img/location-header.png";
import avatar from "../../assets/img/avatar.png";
import useStyles from "./styles";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Menu, MenuItem } from "@material-ui/core";
import { redirectRequest } from "../../redux/actions/common.actions";
import { useDispatch } from "react-redux";
function Header() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    dispatch(redirectRequest(""));
  };
  function renderAccount() {
    if (user !== null) {
      return (
        <div className={`${classes.header__signIn}`}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.button}
          >
            {user.hoTen}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogOut}>Đăng xuất</MenuItem>
          </Menu>
        </div>
      );
    } else {
      return (
        <NavLink to="/login" className={classes.header__signIn}>
          Đăng nhập
        </NavLink>
      );
    }
  }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <header className={classes.header}>
      <div className="header__content">
        <div className="header__left">
          <NavLink to="/">
            <img
              src={logo}
              alt="webLogo"
              className={classes.header__left__img}
            />
          </NavLink>
        </div>
        <div className={classes.header__center}>
          <a href="#listFilm" className={classes.header__center__text}>
            Lịch Chiếu
          </a>
          <a href="#showTimes" className={classes.header__center__text}>
            Cụm rạp
          </a>

          <a href="#news" className={classes.header__center__text}>
            Tin Tức
          </a>
          <a href="#appInfo" className={classes.header__center__text}>
            Ứng dụng
          </a>
        </div>
        <div className={classes.header__right}>
          <div className={classes.header__logIn}>
            <img src={avatar} alt="avatar" className={classes.header__avatar} />
            {renderAccount()}
          </div>
          <div className={`${classes.header__location} dropdown`}>
            <img
              src={location}
              className={classes.location__img}
              alt="location-header"
            />
            <span className={classes.dropdown}>
              <span
                className={` ${classes.menuItem} ${classes.header__signIn}`}
              >
                Hồ Chí Minh
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
