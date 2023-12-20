import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { DeleteKamar } from "../../../api/apiKamar";
import { Toaster, toast } from "sonner";

const RoomData = ({ room }) => {
  const { id, nama_kamar, deskripsi, max, tersedia, harga } = room;
  const navigate = useNavigate();

  const handleEditKamar = () => {
    console.log(id);
    sessionStorage.setItem("room", JSON.stringify(room));
    navigate("/admin/addroom");
  }

  const handleDeleteKamar = () => {

    if(confirm("Yakin ingin hapus data kamar : " + nama_kamar + " ?")){
      toast.warning("Loading...");
      DeleteKamar(id).then((res) => {
        console.log(res);
        toast.success("Berhasil Hapus Data Kamar");

        setTimeout(() => {
          location.href = "/admin/room";
        }, 2000);
      }).catch((err) => {
        console.log(err);
        toast.error(err);
      });
    }
  }

  return (
    <div className="card col-12 border-bottom ">
      <Toaster position="bottom-right" richColors/>
      <div className="details" style={{ color: "black" }}>
        <p className="col-2 text-center">{nama_kamar}</p>
        <p className="col-2 text-center">{deskripsi}</p>
        <p className="col-2 text-center">{max}</p>
        <p className="col-2 text-center">{tersedia}</p>
        <p className="col-2 text-center">${harga}/night</p>
        <div className="col-2 d-flex justify-content-center gap-2 p-2">
          <button type="button" className="btn btn-warning" onClick={handleEditKamar}>Edit</button>
          <button type="button" className="btn btn-danger" onClick={handleDeleteKamar}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default RoomData;
