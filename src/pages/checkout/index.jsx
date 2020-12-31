import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import CheckOutContent from "../../component/checkout-content";

function CheckOut() {
  const account = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {}, []);
  if (account) {
    return (
      <div className="checkOut">
        <CheckOutContent user={account} />
      </div>
    );
  } else {
    return <Redirect push to="/login" />;
  }
}

export default CheckOut;
