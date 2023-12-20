import React from "react";
import "./Card.css";
import { useState } from "react";

const UserData = ({ data }) => {
  const { firstname, lastname, email, username, no_telp, active } = data;

  return (
    <div className="card col-12 border-bottom ">
      <div className="details" style={{ color: "black" }}>
        <p className="col-2 fs-6 text-center">{firstname}</p>
        <p className="col-2 fs-6 text-center">{lastname}</p>
        <p className="col-2 fs-6 text-center">{email}</p>
        <p className="col-2 fs-6 text-center">{username}</p>
        <p className="col-2 fs-6 text-center">{no_telp}</p>
        <p className={active ? "col-2 fs-6 text-center text-success" : "col-2 fs-6 text-center text-danger"}>{active ? "Verified" : "Not Verified"}</p>
      </div>
    </div>
  );
};

export default UserData;
