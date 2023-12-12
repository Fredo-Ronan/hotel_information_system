import { CustomNavbar } from "../components/CustomNavbar";

export const MainLayout = () => {
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
      path: "/contact",
      name: "Contact",
    },
  ];

  return <CustomNavbar routes={routes} />;
};
