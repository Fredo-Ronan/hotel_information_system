import React from "react";
import { Row, Col } from "react-bootstrap";
import gambar1 from "../../assets/bg_1.jpg";
import gambar2 from "../../assets/bg_2.jpg";
import BookingData from "./card/BookingDataPage";
import { FooterComp } from "../../components/FooterComp";
import { HeadPicture } from "../../components/HeadPicture";

import "./card/Card.css";
import "./GlobalAdminStyle.css";

function BookingListPage() {
  const bookingData = [
    {
      name: "Panji",
      roomName: "King Room",
      quantity: 10,
      checkIn: "21/08/20",
      checkOut: "21/08/20",
      total: 1000000,
      status: "Lunas",
    },
    {
      name: "Trisna",
      roomName: "King Room",
      quantity: 10,
      checkIn: "21/08/20",
      checkOut: "21/08/20",
      total: 1000000,
      status: "Belum Lunas",
    },
    {
      name: "Joel",
      roomName: "King Room",
      quantity: 10,
      checkIn: "21/08/20",
      checkOut: "21/08/20",
      total: 1000000,
      status: "Lunas",
    },
    // Tambahkan data ruangan lain disini
  ];

  return (
    <>
      <Row>
        <Col>
          <HeadPicture
            gambar={gambar2}
            headlinePage={"Booking List"}
            description={
              "Here you can see the booking list that user have made appoinment"
            }
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-12 d-flex justify-content-center background-custom" style={{padding: "4rem"}}>
          <Row className="col-10" style={{ marginTop: "15px" }}>
            <p
              className="fw-bold d-flex  ms-0"
              style={{ color: "black", fontSize: "45px" }}
            >
              Booking List
            </p>
            <select
              id="dropdown"
              className="col-1 mb-3"
              style={{ height: "30px", backgroundColor: "white", color: "black" }}
            >
              <option value="today">Today</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
            <div className="card col-12 border-bottom">
              <div className="list" style={{ color: "black" }}>
                <p className="col-0 fw-bold">Check</p>
                <p className="col-1 fw-bold">Name</p>
                <p className="col-1 fw-bold">Room</p>
                <p className="col-1 fw-bold">Quantity</p>
                <p className="col-1 fw-bold">Check In</p>
                <p className="col-1 fw-bold">Check Out</p>
                <p className="col-1 fw-bold">Total</p>
              </div>
            </div>
            {bookingData.map((booking, index) => (
              <BookingData key={index} booking={booking} />
            ))}
          </Row>
        </Col>
      </Row>
      <FooterComp />
    </>
  );
}
export default BookingListPage;
