import React, { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";

import gambar2 from "../../assets/bg_2.jpg";

import { UserData } from "./card/UserData";
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
            <Row className="col-12" style={{ marginTop: "15px" }}>
              <p
                className="fw-bold d-flex  ms-0"
                style={{ color: "black", fontSize: "45px" }}
              >
                User Data
              </p>
              <div className="card col-12 border-bottom">
                <div className="list" style={{ color: "black" }}>
                  <p className="col-1 fw-bold">First Name</p>
                  <p className="col-1 fw-bold">Last Name</p>
                  <p className="col-1 fw-bold">Email</p>
                  <p className="col-1 fw-bold">Username</p>
                  <p className="col-1 fw-bold">No Telepon</p>
                  <p className="col-1 fw-bold">Status</p>
                  <p className="col-1 fw-bold">Action</p>
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
