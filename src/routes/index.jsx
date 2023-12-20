import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Layout
import { UserLayout } from "../layouts/UserLayout";

// Protected Routes Regulation
import ProtectedRoutes from "./ProtectedRoutes";

// Import Pages
import { LoginPage } from "../pages/login/Login";
import { RegisterPage } from "../pages/register/Register";
import { VerificationSend } from "../pages/register/VerificationSend";
import { HomePage } from "../pages/home/home";
import { BookingPage } from "../pages/booking/Booking";
import { RoomPage } from "../pages/rooms/Room";
import { ListBookingPage } from "../pages/booking/ListBookingPage";
import { AdminLayout } from "../layouts/AdminLayout";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";
import RoomDataPage from "../pages/admin/RoomDataPage";
import UserDataPage from "../pages/admin/UserDataPage";
import BookingListPage from "../pages/admin/BookingListPage";
import AddRoomPage from "../pages/admin/AddRoomPage";
import { DetailRoomPage } from "../pages/rooms/DetailRoom";
import { ProfilePage } from "../pages/profile/Profile";
import { DetailBookingPage } from "../pages/booking/DetailBooking";
import { AdminProfilePage } from "../pages/admin/AdminProfile";

const router = createBrowserRouter([
  // Area Ketika User Login
  {
    path: "/user",
    element: (
      <ProtectedRoutes>
        <UserLayout />
      </ProtectedRoutes>
    ), // Halaman protected by ProtectedRoutes
    children: [
      {
        path: "/user/profile",
        element: <ProfilePage/>, // Halaman Profil
      },
      {
        path: "/user/home",
        element: <HomePage />, // Halaman Home
      },
      {
        path: "/user/rooms",
        element: <RoomPage />, // Halaman list kamar
      },
      {
        path: "/user/rooms/detail",
        element: <DetailRoomPage />,
      },
      {
        path: "/user/rooms/booking",
        element: <BookingPage />, // Halaman Booking Kamar
      },
      {
        path: "/user/rooms/booking/payment",
        element: <DetailBookingPage/>, // Halaman pembayaran booking kamar
      },
      {
        path: "/user/contact",
        element: <></>, // Halaman informasi kontak hotel
      },
      {
        path: "/user/your-booking",
        element: <ListBookingPage />,
      },
    ],
  },

  {
    path: "/admin",
    element: (
      <ProtectedAdminRoutes>
        <AdminLayout />
      </ProtectedAdminRoutes>
    ),
    children: [
      {
        path: "/admin/room",
        element: <RoomDataPage />,
      },
      {
        path: "/admin/addroom",
        element: <AddRoomPage />,
      },
      {
        path: "/admin/booking",
        element: <BookingListPage />,
      },
      {
        path: "/admin/userdata",
        element: <UserDataPage />,
      },
      {
        path: "/admin/profile",
        element: <AdminProfilePage/>,
      },
    ],
  },

  // Area ketika tidak ada user login
  {
    children: [
      {
        path: "/",
        element: <LoginPage />, // Halaman Login
      },
      {
        path: "/signup",
        element: <RegisterPage />, // Halaman Sign Up/Register
      },
      {
        path: "/verification_send/:email",
        element: <VerificationSend />, // Halaman Pemberitahuan Untuk Verifikasi ke Email
      },
      {
        path: "/home",
        element: <HomePage />, // Halaman home tidak login
      },
    ],
  },

  // Handle Route Not Found
  {
    path: "*",
    element: <div>Route Not Found!</div>,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
