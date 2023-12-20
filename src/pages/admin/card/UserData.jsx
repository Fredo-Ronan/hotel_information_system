import React from "react";
import "./Card.css";
import { DeleteUser } from "../../../api/apiUser";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const UserData = ({ data }) => {
  const { id, firstname, lastname, email, username, no_telp, active } = data;
  const navigate = useNavigate();

  const deleteBtnHandler = () => {
    console.log(id);

    if(confirm("Yakin ingin hapus pengguna ini?")){
      toast.warning("Loading....");
      DeleteUser(id).then((res) => {
        console.log(res);
        toast.success("Berhasil Hapus User");
        setTimeout(() => {
          navigate("/admin/userdata");
        }, 2000);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <div className="card col-12 border-bottom ">
      <Toaster position="bottom-right" richColors/>
      <div className="details" style={{ color: "black" }}>
        <p className="col-1 fs-6 text-center">{firstname}</p>
        <p className="col-1 fs-6 text-center">{lastname}</p>
        <p className="col-1 fs-6 text-center">{email}</p>
        <p className="col-1 fs-6 text-center">{username}</p>
        <p className="col-1 fs-6 text-center">{no_telp}</p>
        <p className={active ? "col-2 fs-6 text-center text-success" : "col-2 fs-6 text-center text-danger"}>{active ? "Verified" : "Not Verified"}</p>
        <p className="col-1 fs-6 text-center">
          <button type="button" className="btn btn-danger" onClick={deleteBtnHandler}>Delete</button>
        </p>
      </div>
    </div>
  );
};
