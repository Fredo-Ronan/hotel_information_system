import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

// Import Assets
import roomImage from "../../assets/room-3.jpg";
import gambar1 from "../../assets/bg_2.jpg";

// Import Component
import { HeadPicture } from "../../components/HeadPicture";
import { FooterComp } from "../../components/FooterComp";

import "./ListBookingStyle.css";
import { GetMyBooking } from "../../api/apiBooking";

export const ListBookingPage = () => {
  const [listBooking, setListBooking] = useState([]);

  useEffect(() => {
    GetMyBooking().then((res) => {
      console.log(res);
      setListBooking(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <HeadPicture gambar={gambar1} headlinePage={"Your Booking"} description={"This is the list of all your booking"}/>
      <div className="main-content">
        {listBooking.map((booking, index) => (
          <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{booking.nama_kamar}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{booking.deskripsi}</Card.Subtitle>
            <Card.Text>
              <hr />
              <div>
                <div>
                  <p>Durasi {booking.durasi} hari</p>
                  <p>
                    Check In : {booking.check_in} <br/>
                    Check Out : {booking.check_out}
                  </p>
                  <p>
                    Jumlah Orang : {booking.jumlah_tamu} orang
                  </p>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        ))}
      </div>

      <FooterComp/>
    </div>
  );
};
