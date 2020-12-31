import React from "react";
import "./styles.scss";
// import { CircularProgress } from "@material-ui/core";
import star from "../../assets/img/web-logo.png";
import { ShakeSlow } from "reshake";
function Loading() {
  return (
    <div className="loading d-flex justify-content-center align-items-center">
      <ShakeSlow fixed={true}>
        <img src={star} alt="star" />
      </ShakeSlow>
    </div>
  );
}

export default Loading;
