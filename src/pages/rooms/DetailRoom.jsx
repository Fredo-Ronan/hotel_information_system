import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { FooterComp } from "../../components/FooterComp";
import { HeadPicture } from "../../components/HeadPicture";
import { useNavigate } from "react-router-dom";

import "./DetailRoom.css";

export const DetailRoomPage = () => {
  const [room, setRoom] = useState();
  const [person, setPerson] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const detailRoom = sessionStorage.getItem("roomDetail");

    setRoom(JSON.parse(detailRoom));
  }, []);

  const addPersonHandler = () => {
    if(person != room?.max){
      setPerson(person + 1);
    }
  }

  const minusPersonHandler = () => {
    if(person != 1) {
      setPerson(person - 1);
    }
  }

  const bookingHandler = () => {
    room["person"] = person;
    sessionStorage.setItem("roomDetail", JSON.stringify(room));
    navigate("/user/rooms/booking");
  };

  return (
    <div>
      <HeadPicture
        gambar={room?.picture}
        headlinePage={"Room Detail"}
        description={room?.roomName}
      />
      <div
        className="justify-content-center d-flex"
        style={{ backgroundColor: "white", padding: "6rem" }}
      >
        <Card className="col-11">
          <Card.Body className="d-flex">
            <Card.Img variant="left" className="w-50" src={room?.picture} />
            <div className="w-100 h-100 ms-4">
              <Card.Title className="fw-bold fs-3">{room?.roomName}</Card.Title>
              <Card.Text>{room?.roomDescription}</Card.Text>
              <Row>
                <Col className="col-4">
                  <Card.Text
                    className={
                      room?.availability < 1
                        ? "fw-bold text-danger"
                        : "fw-bold text-success"
                    }
                  >
                    {room?.availability} Rooms Available
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="col-4">
                  <Card.Text>Max: {room?.max} Persons</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col className="col-4">
                  <Card.Text>View: {room?.view}</Card.Text>
                </Col>
                <Col className="col-4">
                  <Card.Text>Size: {room?.size} m2</Card.Text>
                </Col>
              </Row>
              <Row className="mt-4">
                <div className="col-4">
                  <label htmlFor="person">How many person?</label>
                  <div className="d-flex gap-2">
                    <input type="number" id="person" className="form-control back-grey" value={person}/>
                    <div className="d-flex">
                      <button type="button" className="btn btn-danger fw-bold" onClick={minusPersonHandler}>-</button>
                      <button type="button" className="btn btn-success fw-bold" onClick={addPersonHandler}>+</button>
                    </div>
                  </div>
                </div>
              </Row>

              <div
                className="d-flex justify-content-end"
                style={{ height: "12rem" }}
              >
                <div className="d-flex gap-2 align-items-end">
                  <Button variant="success" onClick={bookingHandler}>
                    Book Now
                  </Button>
                  <h5>for ${room?.price} / night</h5>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <FooterComp />
    </div>
  );
};
