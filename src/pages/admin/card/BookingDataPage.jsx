import React from "react";
import "./Card.css";
import { useState } from "react";

const BookingData = ({ booking }) => {
  const {
    name,
    roomName,
    quantity,
    checkIn,
    checkOut,
    total,
    status,
  } = booking;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="card col-12 border-bottom ">
      <div className="details" style={{ color: "black" }}>
        <div
          className={`custom-checkbox ${isChecked ? "checked" : ""}`}
          onClick={handleCheckboxChange}
        ></div>
        <p className="col-1">{name}</p>
        <p className="col-1">{roomName}</p>
        <p className="col-1">{quantity}</p>
        <p className="col-1">{checkIn}</p>
        <p className="col-1">{checkOut}</p>
        <p className="col-1">{total}</p>
        <p className={status === "Lunas" ? "col-1 text-green" : "col-1 text-red"}>{status}</p>
      </div>
    </div>
  );
};

export default BookingData;
