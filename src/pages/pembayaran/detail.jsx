import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import gambar1 from "../../assets/bg_2.jpg";
import { HeadPicture } from "../../components/HeadPicture";

const Navbar = () => (
  <nav className="navbar">
    <a className="navbar-brand" href="/loggedIn">
      The <span>5 Stars</span> Hotel
    </a>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active"><a href="/loggedIn" className="nav-link">Home</a></li>
      <li className="nav-item"><a href="/roomsLoggedIn" className="nav-link">Our Rooms</a></li>
      <li className="nav-item"><a href="/blogLoggedIn" className="nav-link">Blog</a></li>
      <li className="nav-item"><a href="/listbooking" className="nav-link">Booking</a></li>
      <li className="nav-item"><a href="/contactLoggedIn" className="nav-link">Contact</a></li>
    </ul>
  </nav>
);

const UserButton = () => (
    <div
      className="user-btn" data-toggle="popover" data-placement="bottom" data-content="Logout" data-trigger="hover"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFFFFF" className="bi bi-person-circle" viewBox="0 0 32 32">
        <path d="M 22 12 a 6 6 90 1 1 -12 0 a 6 6 90 0 1 12 0 z" />
        <path fillRule="evenodd" d="M 0 16 a 16 16 90 1 1 32 0 A 16 16 90 0 1 0 16 z m 16 -14 a 14 14 90 0 0 -10.936 22.74 C 6.484 22.452 9.61 20 16 20 s 9.514 2.45 10.936 4.74 A 14 14 90 0 0 16 2 z" />
      </svg>
      <div>
        <h5 style={{ color: 'white', margin: '0' }}>User 1</h5>
      </div>
    </div>
  );

export const DetailSection = () => (
    <div>
      <div className="hero-wrap"
           style={{ backgroundImage: "url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/386301950.jpg?k=afb811280ac0cb4a344bd1122c842b4b4edcfe53de644a967042b0ed1b6ee465&o=&hp=1')" }}>
        <div className="overlay" style={{ backgroundColor: 'black' }}></div>
        <div className="container">
          <div className="row no-gutters slider-text d-flex align-item-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
              <div className="text">
                <p className="breadcrumbs mb-2">
                  <span className="mr-2"><a href="index.html">Home</a></span>
                  <span>Detail</span>
                </p>
                <h1 className="mb-4 bread">Detail Reservation</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="col-10 mt-4" style={{ margin: '0 auto', marginBottom: '15px' }}>
          <div className="card">
            <div className="card-header" style={{ backgroundColor: 'rgb(0, 105, 251)' }}>
              <div className="row ftco-footer-social list-unstyled">
                <div className="col mt-3"><a href="#"><i className="icon-filter_list" style={{ color: 'white', fontSize: '40px' }}></i></a></div>
                <div className="col-8 fw-bold mt-2">
                  <h1 style={{ color: 'white' }}>Detail Reservasi</h1>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="card mb-3 col-lg-12 h-10">
                  <div className="row">
                    <div className="col-6 p-3">
                      <img src="https://www.konsultasi-akustik.com/wp-content/uploads/2021/02/interior-modern-comfortable-hotel-room-scaled.jpg"
                           className="img-fluid rounded-start" style={{ borderRadius: '5px', height: '350px', width: '450px', objectFit: 'cover' }}
                           alt="..."
                      />
                    </div>
                    <div className="col-6 ml-auto mt-2">
                      <div className="card-body p-2">
                        <h1 className="card-title ml-auto fw-bold">Hotel Kelas Atas</h1>
                        <div className="form-check ml-1">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">
                            <p className="rate">
                              <span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i> 5 Ratings</span>
                            </p>
                          </label>
                        </div>
                        <p className="m-0 card-text">
                          2 Orang, 1 double bed dan 1 twin bed, Non-smoking
                        </p>
                        <p className="card-text mb-0 mt-5">Check in: Minggu, October 19, 2023</p>
                        <p className="card-text mt-0">Check out: Selasa, October 21, 2023</p>
                        <p className="card-text">2 hari menginap</p>
                        <p className="card-text mt-0">Total Harga : Rp. 1.500.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-5" style={{ margin: '8px 0px 0px 50px' }}>
                  <label>Nama</label>
                  <a type="text" style={{ borderRadius: '5px' }} className="form-control" id="phone" name="phone" placeholder="">
                    <p className="mt-1"> Iqbal Firmansyah Adinda </p>
                  </a>
                </div>
                <div className="col-5" style={{ margin: '8px 0px 0px 5px' }}>
                  <label>Telepon</label>
                  <a type="text" style={{ borderRadius: '5px' }} className="form-control" id="phone" name="phone" placeholder="">
                    <p className="mt-1"> 081223046489 </p>
                  </a>
                </div>
                <div className="col-5" style={{ margin: '8px 0px 0px 50px' }}>
                  <label>Email</label>
                  <a type="text" style={{ borderRadius: '5px' }} className="form-control" id="phone" name="phone" placeholder="">
                    <p className="mt-1"> Iqbal@gmail.com </p>
                  </a>
                </div>
                <div className="col-5" style={{ margin: '8px 0px 0px 5px' }}>
                  <label>Metode Pembayaran</label>
                  <a type="text" style={{ borderRadius: '5px' }} className="form-control" id="phone" name="phone" placeholder="">
                    <p className="mt-1"> Bank BRI </p>
                  </a>
                </div>
              </div>
              <div style={{ margin: '20px 0px 25px 2px', width: '300px' }}>
                <button type="button" style={{ backgroundColor: 'rgb(0, 105, 251)', margin: '8px 0px 0px 50px', color: 'white', borderRadius: '5px' }} className="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Bayar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const PaymentModal = () => (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header" style={{ backgroundColor: 'rgb(0, 105, 251)' }}>
            <h5 className="modal-title fs-5 text-light" id="staticBackdropLabel">Cara Pembayaran</h5>
          </div>
          <div className="modal-body">
            <div className="row">
              <h2 className="fw-bold">Bank BRI</h2>
              <hr />
              <h5>No. Rekening</h5>
              <h5>911 3990 4899 4975</h5>
              <hr />
              <div>
                <p>Petunjuk Pembayaran</p>
                <hr />
                <p>1. Masuk ke menu Transfer kemudian klik Tambah Penerima</p>
                <p>2. Pilih Bank Tujuan kemudian masukkan no rekening 911 3990 4899 4975 dan klik tombol lanjutkan</p>
                <p>3. Masukkan nominal yang diminta </p>
                <p>4. Klik tombol transfer </p>
                <p>5. Selesai </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-secondary">Close</button> */}
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop2"
              style={{ borderRadius: '5px' }}
              data-bs-dismiss="modal"
            >
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const PaymentSuccessModal = () => (
    <div className="modal fade" id="staticBackdrop2" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header" style={{ backgroundColor: 'rgb(0, 105, 251)' }}>
            <h5 className="modal-title fs-5 text-light" id="staticBackdropLabel">Pembayaran</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-1 mt-2">
                <i className="icon-done" style={{ color: 'rgb(0, 0, 0)', fontSize: '35px' }}></i>
              </div>
              <div className="col-11 ml-0">
                <h1 className="m-0 fw-bold">Pembayaran Berhasil</h1>
              </div>
              <hr />
              <h4 className="fw-semibold mt-2">Iqbal Firmansyah Adinda</h4>
              <h5 className="m-0 mt-3 fw-semibold">Total Harga: Rp. 1.500.000,</h5>
              <p className="m-0 mt-4">Anda telah berhasil melakukan reservasi</p>
              <p className="m-0">pada tanggal 19 October 2023</p>
            </div>
          </div>
          <div className="modal-footer">
            <a type="button" className="btn btn-secondary" href="/loggedIn" style={{ borderRadius: '5px' }}>
              Selesai
            </a>
          </div>
        </div>
      </div>
    </div>
  );


const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [showModal2, setShowModal2] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClose2 = () => {
    setShowModal2(false);
  };

  return (
    <div>
      <HeadPicture gambar={gambar1} headlinePage={"Your Booking"} description={"This is the list of all your booking"}/>
      <Navbar />
      <UserButton />
      <DetailSection />
      <PaymentModal showModal={showModal} handleClose={handleClose} />
      <PaymentSuccessModal showModal2={showModal2} handleClose2={handleClose2} />
    </div>
  );
};

export default App;