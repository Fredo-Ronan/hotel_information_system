import { CustomNavbar } from "../components/CustomNavbar";
import { Outlet } from "react-router-dom";

export const AdminLayout = ({ children }) => {
  const routes = [
    {
      path: "/admin/room",
      name: "Room Data",
    },
    {
      path: "/admin/addroom",
      name: "Add Room",
    },
    {
      path: "/admin/booking",
      name: "Booking",
    },
    {
      path: "/admin/userdata",
      name: "User Data",
    },
  ];

  return (
    <>
      <CustomNavbar routes={routes} />
      {children ? children : <Outlet />}
    </>
  );
};
