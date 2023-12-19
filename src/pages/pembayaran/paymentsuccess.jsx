import React from "react";

const PaymentSuccessModal = () => {
    const [showModal, setShowModal] = useState(true);
  
    const handleClose2 = () => {
        setShowModal2(false);
    };

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

  return (
    <div>
      <Navbar />
      <PaymentSuccessModal showModal2={showModal2} handleClose2={handleClose2} />
    </div>
  );
};

export default PaymentSuccessModal;
