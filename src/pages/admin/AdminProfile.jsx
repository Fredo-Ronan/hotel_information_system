import { useNavigate } from "react-router-dom";

import gambar1 from "../../assets/bg_1.jpg";

import { HeadPicture } from "../../components/HeadPicture"
import { FooterComp } from "../../components/FooterComp";

export const AdminProfilePage = () => {

    const navigate = useNavigate();

    const logoutHandler = () => {
        sessionStorage.clear();
        navigate("/");
    }

    return (
        <>
            <HeadPicture gambar={gambar1} headlinePage={"Admin Profile"} description={"Here you can do logout from admin"}/>
            <div className="d-flex justify-content-center bg-white p-4">
                <button className="btn btn-danger" onClick={logoutHandler}>LOGOUT FROM ADMIN</button>
            </div>
            <FooterComp/>
        </>
    )
}