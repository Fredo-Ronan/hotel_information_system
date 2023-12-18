import React from "react";
import { Row, Col } from "react-bootstrap";

import gambar1 from "../../assets/bg_1.jpg";
import gambar2 from "../../assets/bg_2.jpg";

import UserData from "./card/UserData";
import { FooterComp } from "../../components/FooterComp";
import { HeadPicture } from "../../components/HeadPicture";

import "./card/Card.css";
import "./GlobalAdminStyle.css";

function UserDataPage() {
  const dataUser = [
    {
      firstName: "Panji",
      lastName: "Petualang",
      email: "panji@gmail.com",
      alamat: "jogja",
      noTelepon: "0913131232",
    },
    {
      firstName: "Trisna",
      lastName: "Kontol",
      email: "trisna@gmail.com",
      alamat: "pogung",
      noTelepon: "0913345151",
    },
    {
      firstName: "Joel",
      lastName: "King",
      email: "joel@gmail.com",
      alamat: "Jakal",
      noTelepon: "023415134133",
    },
    // Tambahkan data ruangan lain disini
  ];

  return (
    <>
      <Row>
        <Col>
          <HeadPicture
            gambar={gambar2}
            headlinePage={"User Data"}
            description={"Here you can see the user data"}
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
              User Data
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
                <p className="col-1 fw-bold">First Name</p>
                <p className="col-1 fw-bold">Last Name</p>
                <p className="col-1 fw-bold">Email</p>
                <p className="col-1 fw-bold">Alamat</p>
                <p className="col-1 fw-bold">No Telepon</p>
              </div>
            </div>
            {dataUser.map((data, index) => (
              <UserData key={index} data={data} />
            ))}
          </Row>
        </Col>
      </Row>
      <FooterComp />
    </>
  );
}
export default UserDataPage;
