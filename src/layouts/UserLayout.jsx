import { CustomNavbar } from "../components/CustomNavbar";
import { Outlet } from "react-router-dom";

export const UserLayout = ({ children }) => {
  const routes = [
    {
      path: "/user/home",
      name: "Home",
    },
    {
      path: "/user/rooms",
      name: "Rooms",
    },
    {
      path: "/user/your-booking",
      name: "Your Booking",
    },
  ];

  return (
    <>
      <CustomNavbar routes={routes} />
      {children ? children : <Outlet />}
    </>
  );
};
