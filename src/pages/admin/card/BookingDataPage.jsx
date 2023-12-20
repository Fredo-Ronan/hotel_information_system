import React from "react";
import "./Card.css";
import { useState } from "react";
import { DeleteBooking } from "../../../api/apiBooking";
import { Toaster, toast } from "sonner";

const BookingData = ({ booking }) => {
  const {
    id,
    nama_pemesan,
    nama_kamar,
    jumlah_tamu,
    check_in,
    check_out,
    total_harga,
  } = booking;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {

    if(confirm("Apakah user telah check out?")){

      DeleteBooking(id).then((res) => {
        console.log(res);
        toast.success("Berhasil Menyelesaikan Booking");
      }).catch((err) => {
        console.log(err);
        toast.error(err);
      });

      setIsChecked(!isChecked);
    }
  };

  return (
    <div className="card col-12 border-bottom ">
      <Toaster position="bottom-right" richColors/>
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
