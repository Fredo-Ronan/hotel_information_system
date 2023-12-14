import { useEffect, useState } from "react";
import { Verify } from "../../api/apiAuth";
import { Toaster, toast } from "sonner";
import { FaCheckCircle } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout";

export const VerifyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const key = searchParams.get("key");

  const checkVerification = () => {
    setIsLoading(true);

    Verify(key)
      .then((res) => {
        if (res.data.status === "success") {
          toast.success("Selamat! Akun anda sudah aktif");
          setIsVerified(true);
        } else {
          toast.error("Kode Verifikasi Tidak Valid");
        }

        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.data.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    checkVerification();
  }, []);

  return (
    <div className="background-image">
      <div className="overlay">
        <Toaster position="bottom-right" richColors />
        <MainLayout />
        {isLoading ? (
            <div className="d-flex flex-column justify-content-center align-items-center h-50">
                <Spinner animation="border" variant="light" size="lg"/>
            </div>
        ) : isVerified ? (
          <>
            <div className="d-flex flex-column justify-content-center align-items-center h-50">
              <FaCheckCircle size={140} />
              <h2 className="mt-4">Selamat! Akun anda sudah aktif.</h2>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success"
                onClick={loginHandler}
              >
                Back to Login Page
              </button>
            </div>
          </>
        ) : (<div></div>)}
      </div>
    </div>
  );
};
