import { useEffect } from "react";
import AddRoomForm from "./form/AddRoomForm";
import { FooterComp } from "../../components/FooterComp";

export const AdminPage = () => {
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    }
  });

  return (
    <>
      <AddRoomForm/>
      <FooterComp />
    </>
  );
};
