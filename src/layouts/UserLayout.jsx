import { CustomNavbar } from "../components/CustomNavbar";
import { Outlet } from "react-router-dom";

export const UserLayout = ({ children }) => {
  const routes = [
    {
      path: "/home",
      name: "Home",
    },
    {
      path: "/rooms",
      name: "Rooms",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/booking",
      name: "Booking",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <CustomNavbar routes={routes} />
      {children ? children : <Outlet />}
    </>
  );
};
