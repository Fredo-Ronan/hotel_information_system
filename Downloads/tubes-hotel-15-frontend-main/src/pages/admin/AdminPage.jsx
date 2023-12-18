import { useEffect, useState } from "react";
import AddRoomForm from "./form/AddRoomForm";
import { FooterComp } from "../../components/FooterComp";
import { AdminLayout } from "../../layouts/UserLayout";
import UserDataPage from "./UserDataPage";
import RoomDataPage from "./RoomDataPage";
import BookingListPage from "./BookingListPage";
import AddRoomPage from "./AddRoomPage";


export const AdminPage = () => {
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    }
  });

  return (
    <>
      <AdminLayout />
      <AddRoomForm/>
      <FooterComp />
    </>
  );
};
