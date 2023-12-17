import React, { useEffect, useState } from "react";
import roomImage from "../../assets/room-3.jpg";
import gambar1 from "../../assets/bg_2.jpg";
import { UserLayout } from "../../layouts/UserLayout";
import { HeadPicture } from "../../components/HeadPicture";
import { FooterComp } from "../../components/FooterComp";

import "./ListBooking.css";

const BookingComponent = () => {
  const [listBooking, setListBooking] = useState([]);

  useEffect(() => {
    const bookingData = [
      {
        name: "Panji",
        roomName: "King Room",
        quantity: 10,
        checkIn: "21/08/20",
        checkOut: "21/08/20",
        total: 1000000,
        status: "Aktif",
      },
      {
        name: "Trisna",
        roomName: "King Room",
        quantity: 10,
        checkIn: "21/08/20",
        checkOut: "21/08/20",
        total: 1000000,
        status: "Aktif",
      },
      {
        name: "Joel",
        roomName: "King Room",
        quantity: 10,
        checkIn: "21/08/20",
        checkOut: "21/08/20",
        total: 1000000,
        status: "Aktif",
      },
      // Tambahkan data ruangan lain disini
    ];

    setListBooking(bookingData);
  }, []);

  return (
    <div>
      <UserLayout />
      <HeadPicture gambar={gambar1} headlinePage={"Your Booking"} description={"This is the list of all your booking"}/>
      <div className="main-content">
        {listBooking.map((booking, index) => (
          <div
            className="card mb-5 mt-4 ml-5 mr-3"
            style={{ maxWidth: "1000px", boxShadow: "1px 4px 4px grey" }}
            key={index}
          >
            <div className="row g-0">
              <div className="col-6">
                <img
                  src={roomImage}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-6">
                <div className="card-body">
                  <h2 className="card-title font-weight-bold">
                    {booking.roomName}
                  </h2>
                  <h2 className="card-text">{booking.name}</h2>
                  <p className="card-text mb-0 mt-5">
                    Check in : {booking.checkIn}
                  </p>
                  <p className="card-text mt-0">Check out : {booking.checkOut}</p>
                  <p className="card-text mt-0">
                    Total Harga : Rp. {booking.total}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div>
          <button
            className="btn"
            style={{
              backgroundColor: "rgb(0, 105, 251)",
              color: "white",
              borderRadius: "5px",
            }}
            type="submit"
            onClick={() => (window.location.href = "/pembayaran/detail")}
          >
            Selesaikan Booking Anda
          </button>
        </div>
      </div>

      <FooterComp/>
    </div>
  );
};

export default BookingComponent;
