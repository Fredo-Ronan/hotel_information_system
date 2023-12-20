import React, { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import gambar2 from "../../assets/bg_2.jpg";
import RoomData from "./card/RoomData";
import { FooterComp } from "../../components/FooterComp";
import { HeadPicture } from "../../components/HeadPicture";

import "./card/Card.css";
import "./GlobalAdminStyle.css";
import { GetKamar } from "../../api/apiKamar";

function RoomDataPage() {
  const [roomData, setRoomData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    GetKamar()
      .then((res) => {
        setRoomData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Row>
        <Col>
          <HeadPicture
            gambar={gambar2}
            headlinePage={"Rooms"}
            description={"Here you can add, edit and delete rooms"}
          />
        </Col>
      </Row>
      <Row>
        <Col
          className="col-12 d-flex justify-content-center background-custom"
          style={{ padding: "4rem" }}
        >
          {isLoading ? (
            <Spinner animation="border" variant="dark" size="lg" />
          ) : (
            <Row className="col-10" style={{ marginTop: "15px" }}>
              <p
                className="fw-bold d-flex ms-0"
                style={{ color: "black", fontSize: "45px" }}
              >
                Room Data
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
                  <p className="col-2 fw-bold text-center">Room</p>
                  <p className="col-2 fw-bold text-center">Description</p>
                  <p className="col-2 fw-bold text-center">Max Capacity</p>
                  <p className="col-2 fw-bold text-center">Availability</p>
                  <p className="col-2 fw-bold text-center">Price</p>
                  <p className="col-2 fw-bold text-center">Action</p>
                </div>
              </div>
              {roomData.map((room, index) => (
                <RoomData key={index} room={room} />
              ))}
            </Row>
          )}
        </Col>
      </Row>
      <FooterComp />
    </>
  );
}

export default RoomDataPage;
