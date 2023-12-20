import React from "react";
import "./Card.css";
import { useState } from "react";

const BookingData = ({ booking }) => {
  const {
    nama_pemesan,
    nama_kamar,
    jumlah_tamu,
    check_in,
    check_out,
    total_harga,
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
        <p className="col-1">{nama_pemesan}</p>
        <p className="col-1">{nama_kamar}</p>
        <p className="col-1">{jumlah_tamu}</p>
        <p className="col-1">{check_in}</p>
        <p className="col-1">{check_out}</p>
        <p className="col-1">${total_harga}</p>
      </div>
    </div>
  );
};

export default BookingData;
