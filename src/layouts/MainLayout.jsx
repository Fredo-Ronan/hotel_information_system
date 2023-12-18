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
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return <CustomNavbar routes={routes} />;
};
