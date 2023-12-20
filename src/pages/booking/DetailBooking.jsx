// Import Assets
import gambar1 from "../../assets/bg_2.jpg";

// Import Components
import { HeadPicture } from "../../components/HeadPicture";
import { FooterComp } from "../../components/FooterComp";

// Import Styling
import "./DetailBooking.css";
import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AddBooking } from "../../api/apiBooking";
import { Toaster, toast } from "sonner";

export const DetailBookingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [detailBooking, setDetailBooking] = useState();
  const [roomDetail, setRoomDetail] = useState();
  const [days, setDays] = useState();
  const navigate = useNavigate();

  const calculateDays = async () => {
    const startDateObject = new Date(detailBooking?.checkIn);
    const endDateObject = new Date(detailBooking?.checkOut);

    if (!isNaN(startDateObject) && !isNaN(endDateObject)) {
      const timeDifference =
        endDateObject.getTime() - startDateObject.getTime();
      const daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
      setDays(daysDifference);
    } else {
      // Handle invalid dates
      setDays(null);
    }
  };

  useEffect(() => {
    const detail = sessionStorage.getItem("detailBooking");
    const room = sessionStorage.getItem("roomDetail");

    setDetailBooking(JSON.parse(detail));
    setRoomDetail(JSON.parse(room));

    calculateDays();
  }, [days]);

  // MODAL HANDLING
  const [showBank, setShowBank] = useState(false);
  const [showKartuKredit, setShowKartuKredit] = useState(false);

  const handleCloseBank = () => {
    setShowBank(false);

    const detail = {
      nama_pemesan: detailBooking.nama_pemesan,
      id_user: detailBooking.id_user,
      id_kamar: detailBooking.id_kamar,
      check_in: detailBooking.checkIn,
      check_out: detailBooking.checkOut,
      durasi: days,
      jumlah_tamu: roomDetail.person,
      total_harga: roomDetail.harga * days,
    };

    console.log(detail);

    setIsLoading(true);
    AddBooking(detail)
      .then((res) => {
        console.log(res);
        toast.success("Berhasil Booking Kamar");
        setIsLoading(false);

        setTimeout(() => {
          navigate("/user/your-booking");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
        setIsLoading(false);
      });
  };

  const handleShowBank = () => setShowBank(true);
  const handleShowKartuKredit = () => setShowKartuKredit(true);
  const handleCloseKartuKredit = () => setShowKartuKredit(false);

  return (
    <>
      <Toaster position="bottom-right" richColors />
      <Modal show={showBank} onHide={handleCloseBank}>
        <Modal.Header closeButton>
          <Modal.Title>Cara Pembayaran Bank</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h2>Bank {detailBooking?.bank}</h2>
            <p className="mt-4">
              No Rekening <br />
              911 3990 4899 4975
            </p>

            <p>
              Petunjuk Pembayaran <br />
              <ol>
                <li>Masuk ke menu Transfer kemudian klik Tambah Penerima</li>
                <li>
                  Pilih Bank Tujuan kemudian masukan no rekening 911 3990 4899
                  4975 dan klik tombol lanjutkan
                </li>
                <li>Masukan nominal yang diminta</li>
                <li>Klik tombol transfer</li>
                <li>Selesai</li>
              </ol>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseBank}>
            {isLoading ? (
              <Spinner animation="border" variant="light" size="sm" />
            ) : (
              "Selesai"
            )}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showBank} onHide={handleCloseBank}>
        <Modal.Header closeButton>
          <Modal.Title>Cara Pembayaran Bank</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h2>Bank {detailBooking?.bank}</h2>
            <p className="mt-4">
              No Rekening <br />
              911 3990 4899 4975
            </p>

            <p>
              Petunjuk Pembayaran <br />
              <ol>
                <li>Masuk ke menu Transfer kemudian klik Tambah Penerima</li>
                <li>
                  Pilih Bank Tujuan kemudian masukan no rekening 911 3990 4899
                  4975 dan klik tombol lanjutkan
                </li>
                <li>Masukan nominal yang diminta</li>
                <li>Klik tombol transfer</li>
                <li>Selesai</li>
              </ol>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseBank}>
            Selesai
          </Button>
        </Modal.Footer>
      </Modal>
      <HeadPicture
        gambar={gambar1}
        headlinePage={"Detail Booking"}
        description={"Please check again the field"}
      />
      {/* Main Container Detail Booking */}
      <div className="detail-container">
        <Card>
          <Card.Header
            style={{ backgroundColor: "rgb(0, 105, 251)" }}
            className="d-flex justify-content-center"
          >
            <h2 style={{ color: "white" }}>Detail Booking</h2>
          </Card.Header>
          <Card.Body>
            <div>
              <div className="d-flex gap-4">
                <img src={roomDetail?.picture} alt="" width={"500px"} />
                <div>
                  <h2>{roomDetail?.nama_kamar}</h2>
                  <p>Jumlah Tamu : {roomDetail?.person} orang</p>
                  <p className="mt-5">
                    Check in : {detailBooking?.checkIn} <br />
                    Check out : {detailBooking?.checkOut}
                  </p>
                  <p className="mt-5">Selama {days} hari</p>
                  <p>
                    Total Harga : <strong>${roomDetail?.harga * days}</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div>
                <h4>Detail Data Pemesan Kamar</h4>
                <div className="row mt-2">
                  <div className="col-6">
                    <label htmlFor="firstname">Nama</label>
                    <input
                      type="text"
                      id="firstname"
                      className="form-control"
                      disabled
                      value={detailBooking?.nama_pemesan}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="noTelp">No Telepon</label>
                    <input
                      type="text"
                      id="noTelp"
                      className="form-control"
                      disabled
                      value={detailBooking?.no_telp}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      disabled
                      value={detailBooking?.email}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="metode">Metode Pembayaran</label>
                    <input
                      type="text"
                      id="metode"
                      className="form-control"
                      disabled
                      value={detailBooking?.metode}
                    />
                  </div>
                </div>
                <hr />
                {detailBooking?.metode === "Kartu Kredit" ? (
                  <>
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="kartu">Nama Kartu</label>
                        <input
                          type="text"
                          className="form-control"
                          id="kartu"
                          value={detailBooking?.namaKartu}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="noKartu">Nomor Kartu</label>
                        <input
                          type="text"
                          className="form-control"
                          id="noKartu"
                          value={detailBooking?.noKartu}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="Exp Date">Exp Date</label>
                        <input
                          type="text"
                          className="form-control"
                          id="Exp Date"
                          value={detailBooking?.expDate}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="billing">Billing</label>
                        <input
                          type="text"
                          className="form-control"
                          id="billing"
                          value={detailBooking?.billing}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="bank">Bank</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={detailBooking?.bank}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <button
                type="button"
                className="btn btn-success mt-4"
                onClick={
                  detailBooking?.metode === "Transfer Bank"
                    ? handleShowBank
                    : null
                }
              >
                Bayar
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <FooterComp />
    </>
  );
};
