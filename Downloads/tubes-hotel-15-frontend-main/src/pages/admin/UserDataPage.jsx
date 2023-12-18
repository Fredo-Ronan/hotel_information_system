import React from 'react';
import { Row, Col } from 'react-bootstrap';


import gambar1 from "../../assets/bg_1.jpg";
import gambar2 from "../../assets/bg_2.jpg";

import UserData from './card/UserData';
import './card/Card.css';


function UserDataPage() {
    const dataUser = [
        {   
            firstName: 'Panji',
            lastName: 'Petualang',
            email:  'panji@gmail.com',
            alamat: 'jogja',
            noTelepon: '0913131232',
          
        },
        {
            firstName: 'Trisna',
            lastName: 'Kontol',
            email:  'trisna@gmail.com',
            alamat: 'pogung',
            noTelepon: '0913345151',
        },
        {
            firstName: 'Joel',
            lastName: 'King',
            email:  'joel@gmail.com',
            alamat: 'Jakal',
            noTelepon: '023415134133',
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
                    <Row className="col-10" style={{marginTop: '15px'}}>
                        <p className="fw-bold d-flex  ms-0" style={{ color: 'black', fontSize: '45px' }}>User Data</p>
                        <select id="dropdown" className="col-1 mb-3" style={{height: '30px'}}>
                            <option value="today" >Today</option>
                            <option value="month">Month</option>
                            <option value="year">Year</option>
                        </select>
                          <div className="card col-12 border-bottom">
                            <div className="list" style={{ color: 'black' }}>
                                <p className="col-0 fw-bold">Check</p>
                                <p className="col-1 fw-bold">First Name</p>
                                <p className="col-1 fw-bold">Last Name</p>
                                <p className="col-1 fw-bold">Email</p>
                                <p className="col-1 fw-bold">Alamat</p>
                                <p className="col-1 fw-bold">No Telepon</p>
                            </div>
                        </div>
                        {dataUser.map((data, index) =>(
                            <UserData key={index} data={data}/>
                        ))}
                    </Row>
                </Col>
            </Row>


        </>
    );
}
export default UserDataPage;