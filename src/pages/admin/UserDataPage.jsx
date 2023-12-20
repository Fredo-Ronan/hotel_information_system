import React, { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";

import gambar2 from "../../assets/bg_2.jpg";

import UserData from "./card/UserData";
import { FooterComp } from "../../components/FooterComp";
import { HeadPicture } from "../../components/HeadPicture";

import "./card/Card.css";
import "./GlobalAdminStyle.css";
import { GetAllUsers } from "../../api/apiUser";

function UserDataPage() {
  const [dataUser, setDataUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    GetAllUsers()
      .then((res) => {
        console.log(res);
        setDataUser(res.data);
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
            headlinePage={"User Data"}
            description={"Here you can see the user data"}
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
                User Data
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
                  <p className="col-2 fw-bold text-center">First Name</p>
                  <p className="col-2 fw-bold text-center">Last Name</p>
                  <p className="col-2 fw-bold text-center">Email</p>
                  <p className="col-2 fw-bold text-center">Username</p>
                  <p className="col-2 fw-bold text-center">No Telepon</p>
                  <p className="col-2 fw-bold text-center">Status</p>
                </div>
              </div>
              {dataUser.map((data, index) => (
                <UserData key={index} data={data} />
              ))}
            </Row>
          )}
        </Col>
      </Row>
      <FooterComp />
    </>
  );
}
export default UserDataPage;
