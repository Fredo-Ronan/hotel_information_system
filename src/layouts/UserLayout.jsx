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
      path: "/user/blog",
      name: "Blog",
    },
    {
      path: "/user/your-booking",
      name: "Booking",
    },
    {
      path: "/user/contact",
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
