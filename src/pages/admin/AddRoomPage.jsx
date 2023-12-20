import React from "react";
import { Row, Col } from "react-bootstrap";
import AddRoomForm from "./form/AddRoomForm";
import gambar1 from "../../assets/bg_1.jpg";
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
            headlinePage={sessionStorage.getItem("room") ? "Edit Room" : "Add Room"}
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
              {sessionStorage.getItem("room") ? "Edit" : "Add"} Detail Room
            </p>
            <div className="col-12">
              {sessionStorage.getItem("room") ? 
               <AddRoomForm initialValues={JSON.parse(sessionStorage.getItem("room"))}/>
               :
               <AddRoomForm />
              }
            </div>
          </Row>
        </Col>
      </Row>
      <FooterComp />
    </>
  );
}

export default AddRoomPage;
