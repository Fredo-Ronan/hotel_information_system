import { CustomNavbar } from "../components/CustomNavbar";

export const UserLayout = () => {
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

  return <CustomNavbar routes={routes} />;
};
