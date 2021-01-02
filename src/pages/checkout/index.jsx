import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import CheckOutContent from "../../component/checkout-content";
import { redirectRequest } from "../../redux/actions/common.actions";

function CheckOut() {
  const history = useHistory();
  const dispatch = useDispatch();
  const account = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {}, []);
  if (account) {
    return (
      <div className="checkOut">
        <CheckOutContent user={account} />
      </div>
    );
  } else {
    // dispatch(redirectRequest(history.location.pathname));
    return <Redirect push to="/login" />;
  }
}

export default CheckOut;
