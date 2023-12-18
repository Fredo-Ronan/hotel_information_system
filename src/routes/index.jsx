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
import { AdminPage } from "../pages/admin/AdminPage";
import { AdminLayout } from "../layouts/AdminLayout";
// import { BookingListPage } from "../pages/admin/form/BookingListPage";
// import { RoomDataPage } from "../pages/admin/form/RoomDataPage";
// import { AddRoomPage } from "../pages/admin/form/AddRoomPage";
// import { UserDataPage } from "../pages/admin/form/UserDataPage";

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
        element: <></>, // Halaman Profil
      },
      {
        path: "/user/home",
        element: <HomePage />, // Halaman Home
      },
      {
        path: "/user/rooms",
        element: <RoomPage/>, // Halaman list kamar
      },
      {
        path: "/user/rooms/booking",
        element: <BookingPage roomDetail={{roomName: "Luxury", roomSpec: "2 adults, haha haha"}}/>, // Halaman Booking Kamar
      },
      {
        path: "/user/rooms/booking/payment",
        element: <></>, // Halaman pembayaran booking kamar
      },
      {
        path: "/user/contact",
        element: <></>, // Halaman informasi kontak hotel
      },
      {
        path: "/user/your-booking",
        element: <ListBookingPage/>
      }
    ],
  },

  {
    path: "/admin",
    element: (<ProtectedRoutes>
      <AdminLayout/>
    </ProtectedRoutes>),
    children: [
      {
        path: "/admin/room",
        element: <AdminPage/>
      },
      {
        path: "/admin/addroom",
        element: <AdminPage/>
      },
      {
        path: "/admin/booking",
        element: <AdminPage/>
      },
      {
        path: "/admin/userdata",
        element: <AdminPage/>
      },
    ]
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
    ]
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
