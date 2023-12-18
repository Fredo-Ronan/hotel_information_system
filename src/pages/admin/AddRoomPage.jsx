import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import AddRoomForm from "./form/AddRoomForm";
import gambar1 from "../../assets/bg_1.jpg";
import gambar2 from "../../assets/bg_2.jpg";
import { FooterComp } from "../../components/FooterComp";
import { HeadPicture } from "../../components/HeadPicture";
import "./GlobalAdminStyle.css";

function AddRoomPage() {
  return (
    <>
      <Row>
        <Col>
          <HeadPicture
            gambar={gambar1}
            headlinePage={"Add Room"}
            description={"Fill all the field to add room"}
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
              Add Detail Room
            </p>
            <div className="col-12">
              <AddRoomForm />
            </div>
          </Row>
        </Col>
      </Row>
      <FooterComp />
    </>
  );
}

export default AddRoomPage;
