import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "0.5px solid #000",
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
    color: "#3as3a3a",
    borderRadius: "4px",
    fontSize: "14px",
  },
  paper__info: {
    fontWeight: "500",
    fontSize: "16px",
  },
  paper_block: {
    fontSize: "14px",
  },
}));
export default useStyles;
