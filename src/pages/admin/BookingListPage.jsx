import React, { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";

// Import Assets
import gambar2 from "../../assets/bg_2.jpg";

// Import Components
import BookingData from "./card/BookingDataPage";
import { FooterComp } from "../../components/FooterComp";
import { HeadPicture } from "../../components/HeadPicture";

// Import API Component
import { GetBooking } from "../../api/apiBooking";

// Import Styling
import "./card/Card.css";
import "./GlobalAdminStyle.css";


function BookingListPage() {
  const [bookingData, setBookingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    GetBooking()
      .then((res) => {
        console.log(res.data);
        setBookingData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

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
        <Col
          className="col-12 d-flex justify-content-center background-custom"
          style={{ padding: "4rem" }}
        >
          {isLoading ? (
            <Spinner animation="border" size="lg" variant="dark" />
          ) : (
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
                style={{
                  height: "30px",
                  backgroundColor: "white",
                  color: "black",
                }}
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
          )}
        </Col>
      </Row>
      <FooterComp />
    </>
  );
}
export default BookingListPage;
