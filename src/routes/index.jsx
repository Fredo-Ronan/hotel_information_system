import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Layout
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";

// Protected Routes Regulation
import ProtectedRoutes from "./ProtectedRoutes";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";

// Import Pages
import { LoginPage } from "../pages/login/Login";
import { RegisterPage } from "../pages/register/Register";
import { VerificationSend } from "../pages/register/VerificationSend";
import { HomePage } from "../pages/home/home";
import { BookingPage } from "../pages/booking/Booking";
import { RoomPage } from "../pages/rooms/Room";
import { ListBookingPage } from "../pages/booking/ListBookingPage";
import { DetailRoomPage } from "../pages/rooms/DetailRoom";
import { ProfilePage } from "../pages/profile/Profile";
import { DetailBookingPage } from "../pages/booking/DetailBooking";
import { AdminProfilePage } from "../pages/admin/AdminProfile";
import RoomDataPage from "../pages/admin/RoomDataPage";
import UserDataPage from "../pages/admin/UserDataPage";
import BookingListPage from "../pages/admin/BookingListPage";
import AddRoomPage from "../pages/admin/AddRoomPage";

const router = createBrowserRouter([
  // ROUTE USER LOGIN ==================================================================================================
  {
    path: "/user",
    element: (
      <ProtectedRoutes>
        <UserLayout />
      </ProtectedRoutes>
    ),
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
        path: "/user/your-booking",
        element: <ListBookingPage />, // Halaman List kamar yang sudah di booking user yang sedang login
      },
    ],
  },
  // ROUTE ADMIN ==================================================================================================
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
        element: <RoomDataPage />, // Admin melihat data kamar yang ada
      },
      {
        path: "/admin/addroom",
        element: <AddRoomPage />, // Halaman admin isi data untuk menambahkan kamar
      },
      {
        path: "/admin/booking",
        element: <BookingListPage />, // Halaman list booking yang dilakukan user user nya
      },
      {
        path: "/admin/userdata",
        element: <UserDataPage />, // Halaman kelola data user oleh admin
      },
      {
        path: "/admin/profile",
        element: <AdminProfilePage/>, // Halaman profil admin (lebih ke halaman untuk melakukan logout dari admin)
      },
    ],
  },

  // Area ketika tidak ada user login (LOGIN, REGISTER, VERIFICATION PAGES)
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
