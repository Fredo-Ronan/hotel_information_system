import { CustomNavbar } from "../components/CustomNavbar";

export const AdminLayout = () => {
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

  return <CustomNavbar routes={routes} />;
};
