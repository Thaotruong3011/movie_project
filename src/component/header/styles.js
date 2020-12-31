import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    header: {
      position: "fixed",
      top: "-1px",
      width: "100%",
      height: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      zIndex: "99",
    },
    header__left__img: {
      width: "50px",
      position: "absolute",
      top: "50%",
      left: "15px",
      transform: "translateY(-50%)",
    },
    header__center: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    header__center__text: {
      textDecoration: "none",
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.color_black_0,
      fontSize: theme.fontSize.fs_4,
      marginRight: theme.spacing(2),
      transition: "all 0.2s",
      "&:hover": {
        color: theme.palette.color_red_3,
        textDecoration: "none",
      },
    },
    header__right: {
      position: "absolute",
      right: theme.spacing(1.5),
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
    },
    header__logIn: {
      display: "flex",
      alignItems: "center",
    },
    header__avatar: {
      width: "30px",
      borderRadius: "50%",
      verticalAlign: "middle",
    },
    header__signIn: {
      fontSize: theme.fontSize.fs_3,
      color: theme.palette.color_gray_2,
      textDecoration: "none",
      paddingLeft: theme.spacing(0.3),
    },
    header__location: {
      display: "inline",
      paddingRight: theme.spacing(0.5),
    },
    location__img: {
      paddingLeft: theme.spacing(0.8),
      opacity: 0.5,
      verticalAlign: "middle",
    },
    dropdown: {
      minWidth: "100px",
      color: theme.palette.color_gray_2,
      "&::after": {
        width: 0,
      },
    },
    menuItem: {
      fontSize: theme.fontSize.fs_4,
      textDecoration: "none",
    },
    formSelect: {
      "&::after": {
        width: 0,
      },
    },
    button: {
      outline: "none",
      color: theme.palette.color_gray_2,
      "&:focus": {
        outline: "none",
      },
    },
  };
});
export default useStyles;
