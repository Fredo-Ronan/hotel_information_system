import React, { useState } from 'react';
import Navbar from './Navbar'; 

const PaymentModal = () => {
    const [showModal, setShowModal] = useState(true);
  
    const handleClose = () => {
      setShowModal(true);
    };

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

  return (
    <div>
      <Navbar />
      <PaymentModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default PaymentModal;
