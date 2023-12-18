import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import gambar1 from "../assets/bg_1.jpg"
import gambar2 from "../assets/bg_2.jpg";
import gambar3 from "../assets/room-1.jpg";
import { MainLayout } from "../../layouts/MainLayout";
import { FooterComp } from "../../components/FooterComp";
function DetailRoomPage() {

    return (
        <div>
            <div className="head">
                <MainLayout/>
                <div
                    id="carouselExampleInterval"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner w-100">
                        <div
                            className="carousel-item carousel-item-overlay carousel-item-img-cover active"
                            data-bs-interval="4000"
                        >
                            <div className="carousel-item-img">
                                <img src={gambar1} className="d-block" alt="Gambar" />
                            </div>
                        </div>
                        <div
                            className="carousel-item carousel-item-overlay carousel-item-img-cover"
                            data-bs-interval="4000"
                        >
                            <div className="carousel-item-img">
                                <img src={gambar2} className="d-block" alt="Gambar" />
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="mt-5 justify-content-center d-flex mb-5">
                <Card className="col-11">
                    <Card.Img variant="top" src={gambar3} />
                    <Card.Body>
                        <Card.Title className="fw-bold fs-3">Luxury Room</Card.Title>
                            <Card.Text>
                                Kamar ini memiliki view yang sangat indah dengan pemandangan yang langsung tertuju ke laut
                            </Card.Text>
                            <Row className="justify-content-center">
                                <Col className="col-2">
                                    <Card.Text>
                                        4 Rooms Available
                                    </Card.Text>
                                </Col>
                                <Col className="col-2">

                                    <Card.Text>
                                        Max: 3 Persons
                                    </Card.Text>

                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col className="col-2">
                                    <Card.Text>
                                        View: Sea View
                                    </Card.Text>

                                </Col>
                                <Col className="col-2">

                                    <Card.Text>
                                        Size: 45 m2
                                    </Card.Text>
                                </Col>
                            </Row>
                
                        <Button variant="primary" className="mt-4">Book Now</Button>
                    </Card.Body>
                </Card>
            </div>
            <FooterComp/>
        </div>









    );
}

export default DetailRoomPage;
