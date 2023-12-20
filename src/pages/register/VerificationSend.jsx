import { MainLayout } from "../../layouts/MainLayout";
import "./Register.css";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

export const VerificationSend = () => {
  const navigate = useNavigate();
  const { email } = useParams();

  const loginHandler = () => {
    console.log("KE LOGIN");
    navigate("/");
  };

  useEffect(() => {
    toast.success('Register Success');
  }, []);

  return (
    <div className="background-image">
      <div className="overlay">
        <Toaster position="bottom-right" richColors/>
        <MainLayout />
        <div className="d-flex flex-column justify-content-center align-items-center h-50 text-white">
            <FaCheckCircle size={140}/>
            <h2 className="mt-4">Link Verifikasi telah dikirim ke {decodeURIComponent(email)}.</h2>
            <h2>Silahkan cek email anda untuk mengaktifkan akun anda.</h2>
        </div>

        <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-success" onClick={loginHandler}>Back to Login Page</button>
        </div>
      </div>
    </div>
  );
};
