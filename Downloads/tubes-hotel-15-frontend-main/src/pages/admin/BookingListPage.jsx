import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import gambar1 from "../../assets/bg_1.jpg";
import gambar2 from "../../assets/bg_2.jpg";
import BookingData from './card/BookingDataPage';
import './card/Card.css';


function BookingListPage() {
    const bookingData = [
        {
            name: 'Panji',
            roomName: 'King Room',
            quantity: 10,
            checkIn: '21/08/20',
            checkOut: '21/08/20',
            total: 1000000,
            status: 'Aktif',
        },
        {
            name: 'Trisna',
            roomName: 'King Room',
            quantity: 10,
            checkIn: '21/08/20',
            checkOut: '21/08/20',
            total: 1000000,
            status: 'Aktif',
        },
        {
            name: 'Joel',
            roomName: 'King Room',
            quantity: 10,
            checkIn: '21/08/20',
            checkOut: '21/08/20',
            total: 1000000,
            status: 'Aktif',
        },
        // Tambahkan data ruangan lain disini
    ];

    return (
        <>
            <Row>
                <Col>
                    <div className="head">
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
                </Col>
            </Row>
            <Row>
                <Col className="col-12 d-flex justify-content-center" style={{ marginTop: "100vh" }}>
                    <Row className="col-10" style={{ marginTop: '15px' }}>
                        <p className="fw-bold d-flex  ms-0" style={{ color: 'black', fontSize: '45px' }}>Booking List</p>
                        <select id="dropdown" className="col-1 mb-3" style={{ height: '30px' }}>
                            <option value="today" >Today</option>
                            <option value="month">Month</option>
                            <option value="year">Year</option>
                        </select>
                        <div className="card col-12 border-bottom">
                            <div className="list" style={{ color: 'black' }}>
                                <p className="col-0 fw-bold">Check</p>
                                <p className="col-1 fw-bold">Name</p>
                                <p className="col-1 fw-bold">Room</p>
                                <p className="col-1 fw-bold">Quantity</p>
                                <p className="col-1 fw-bold">Check In</p>
                                <p className="col-1 fw-bold">Check Out</p>
                                <p className="col-1 fw-bold">Total</p>
                                <p className="col-1 fw-bold">Status</p>
                            </div>
                        </div>
                        {bookingData.map((booking, index) => (
                            <BookingData key={index} booking={booking} />
                        ))}
                    </Row>
                </Col>
            </Row>


        </>
    );
}
export default BookingListPage;