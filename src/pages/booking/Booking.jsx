import React, { useEffect, useState } from 'react';
import { HeadPicture } from '../../components/HeadPicture';
import { FooterComp } from '../../components/FooterComp';
import { Card, Col, Row, Form, Button, Tab, Nav } from 'react-bootstrap';
import { MdHotel } from 'react-icons/md';
import { IoMdWallet } from 'react-icons/io';
import gambarRoom from '../../assets/room-1.jpg';

import './Booking.css';

export const BookingPage = () => {
  const [roomDetail, setRoomDetail] = useState();

  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [noTelp, setNoTelp] = useState();
  const [email, setEmail] = useState('');
  const [metodePembayaran, setMetodePembayaran] = useState('Kartu Kredit');
  const [namaDiKartu, setNamaDiKartu] = useState('');
  const [noKartu, setNoKartu] = useState('');
  
  const [monthExp, setMonthExp] = useState('');
  const [yearExp, setYearExp] = useState('');


  const [kodeSecurity, setKodeSecurity] = useState('');
  const [bank, setBank] = useState('');
  const [billing, setBilling] = useState('');

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleNoTelpChange = (e) => setNoTelp(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleBankChange = (e) => setBank(e.target.value);
  const handleNamaDiKartuChange = (e) => setNamaDiKartu(e.target.value);
  const handleNoKartuChange = (e) => setNoKartu(e.target.value);
  const handleMonthExp = (e) => setMonthExp(e.target.value);
  const handleYearExp = (e) => setYearExp(e.target.value);
  const handleKodeSecurityChange = (e) => setKodeSecurity(e.target.value);
  const handleBillingChange = (e) => setBilling(e.target.value);

  const submitHandler = () => {
    // Your submit logic here

    const dateExp = monthExp + "/" + yearExp;

    const data = {
      "room_detail": roomDetail,
      "firstname": firstname,
      "lastname": lastName,
      "noTelp": noTelp,
      "email": email,
      "metode": metodePembayaran,
      "namaKartu": namaDiKartu,
      "noKartu": noKartu,
      "expDate": dateExp,
      "kodeSecurity": kodeSecurity,
      "billing": billing,
      "bank": bank,
    };

    console.log(data);
  };

  useEffect(() => {
    const selectedRoomDetail = sessionStorage.getItem("roomDetail");

    setRoomDetail(JSON.parse(selectedRoomDetail));
  }, []);

  return (
    <div>
      <HeadPicture
        gambar={gambarRoom}
        headlinePage={'Booking'}
        description={'Please fill all the field to continue your booking on this room'}
      />
      <div className="booking-container">
        <section>
          {/* Detail Kamar dan Pemesan Kamar //////////////////////////////////////////////////////////////////////////// */}
          <Row className="col-10 mt-4" style={{ margin: '0 auto', marginBottom: '15px' }}>
            <Card>
              <Card.Header style={{ backgroundColor: 'rgb(0, 105, 251)' }}>
                <Row className="ftco-footer-social list-unstyled">
                  <Col className="col-1">
                    <MdHotel size={60} color="white" />
                  </Col>
                  <Col className="col-2 fw-bold mt-3">
                    <h3 style={{ color: 'white' }}>{roomDetail?.roomName}</h3>
                  </Col>
                  <Col className="col-6 mt-3 ">
                    <p style={{ color: 'white' }}> for {roomDetail?.person} persons</p>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        style={{ borderRadius: '5px' }}
                        placeholder="First name"
                        aria-label="First name"
                        onChange={handleFirstNameChange}
                        value={firstname}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        style={{ borderRadius: '5px' }}
                        placeholder="Last name"
                        aria-label="Last name"
                        onChange={handleLastNameChange}
                        value={lastName}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Nomor Telepon</Form.Label>
                      <Form.Control
                        type="tel"
                        style={{ borderRadius: '5px' }}
                        placeholder="Nomor Telepon"
                        onChange={handleNoTelpChange}
                        value={noTelp}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        style={{ borderRadius: '5px' }}
                        placeholder="Email"
                        onChange={handleEmailChange}
                        value={email}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>

          {/* Metode Pembayaran /////////////////////////////////////////////////////////////////////////////// */}
          <Row className="col-10 mt-4" style={{ margin: '0 auto', marginBottom: '15px' }}>
            <Card>
              <Card.Header style={{ backgroundColor: 'rgb(0, 105, 251)' }}>
                <Row className="ftco-footer-social list-unstyled">
                  <Col className="col-1">
                    <IoMdWallet size={60} color="white" />
                  </Col>
                  <Col className="col-4 mt-1 d-flex">
                    <h3 style={{ color: 'white', marginRight: '25px' }} className="mt-2">
                      Metode Pembayaran
                    </h3>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body className="p-2 m-0">
                <Tab.Container id="myTab" defaultActiveKey="tab1">
                  <Nav variant="tabs" className="nav nav-tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="tab1" onClick={() => setMetodePembayaran("Kartu Kredit")}>Kartu Kredit</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab2" onClick={() => setMetodePembayaran("Transfer Bank")}>Transfer Bank</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="mt-3">
                    <Tab.Pane eventKey="tab1">
                      <Row className="mb-3">
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Nama di kartu</Form.Label>
                            <Form.Control
                              type="text"
                              style={{ borderRadius: '5px' }}
                              placeholder="Nama di Kartu"
                              onChange={handleNamaDiKartuChange}
                              value={namaDiKartu}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Debit/Nomor Kartu</Form.Label>
                            <Form.Control
                              type="text"
                              style={{ borderRadius: '5px' }}
                              placeholder="Nomor"
                              onChange={handleNoKartuChange}
                              value={noKartu}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col md={4}>
                          <Form.Label>Expiration Date</Form.Label>
                          <Row>
                            <Col>
                              <Form.Select
                                style={{ borderRadius: '5px' }}
                                aria-label="Month"
                                onChange={handleMonthExp}
                                value={monthExp}
                              >
                                <option value="">Pilih Bulan</option>
                                <option value="">Pilih Bulan</option>
                                <option value="1">Januari</option>
                                <option value="2">Februari</option>
                                <option value="3">Maret</option>
                                <option value="4">April</option>
                                <option value="5">Mei</option>
                                <option value="6">Juni</option>
                                <option value="7">Juli</option>
                                <option value="8">Agustus</option>
                                <option value="9">September</option>
                                <option value="10">Oktober</option>
                                <option value="11">November</option>
                                <option value="12">Desember</option>
                                
                              </Form.Select>
                            </Col>
                            <Col>
                              <Form.Select
                                style={{ borderRadius: '5px' }}
                                aria-label="Year"
                                onChange={handleYearExp}
                                value={yearExp}
                              >
                                <option value="">Pilih Tahun</option>
                                {(() => {
                                  const currentYear = new Date().getFullYear();
                                  const endYear = 2033; // Updated to 2033
                                  const years = [];

                                  for (let year = currentYear; year <= endYear; year++) {
                                    years.push(<option key={year} value={year}>{year}</option>);
                                  }

                                  return years;
                                })()}
                              </Form.Select>
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          <Row>
                            <Col>
                              <Form.Group className="mb-3">
                                <Form.Label>Kode Security</Form.Label>
                                <Form.Control
                                  type="text"
                                  style={{ borderRadius: '5px' }}
                                  placeholder="Kode Security"
                                  onChange={handleKodeSecurityChange}
                                  value={kodeSecurity}
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group className="mb-3">
                                <Form.Label>Billing</Form.Label>
                                <Form.Control
                                  type="text"
                                  style={{ borderRadius: '5px' }}
                                  placeholder="Billing"
                                  onChange={handleBillingChange}
                                  value={billing}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab2">
                      <Row className="mb-3">
                        <Col>
                          <Form.Group>
                            <Form.Label>Pilih Bank</Form.Label>
                            <Form.Select
                              style={{ borderRadius: '5px' }}
                              aria-label="Bank"
                              onChange={handleBankChange}
                              value={bank}
                            >
                              <option value="">Pilih Bank</option>
                              <option value="BRI">BRI</option>
                              <option value="BNI">BNI</option>
                              <option value="Mandiri">Mandiri</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card.Body>
            </Card>
          </Row>
        </section>

        <div style={{ margin: '20px 0px 25px 135px', width: '300px' }}>
          <Button
            className="btn"
            style={{
              backgroundColor: 'rgb(0, 105, 251)',
              color: 'white',
              borderRadius: '5px',
            }}
            type="button"
            onClick={submitHandler}
          >
            Selesaikan Booking Anda
          </Button>
        </div>
      </div>

      <FooterComp />
    </div>
  );
};
