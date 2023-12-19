import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Layout
import { UserLayout } from "../layouts/UserLayout";

// Protected Routes Regulation

// Import Pages
import { LoginPage } from "../pages/login/Login";
import { RegisterPage } from "../pages/register/Register";
import { VerificationSend } from "../pages/register/VerificationSend";
import { HomePage } from "../pages/home/home";
import { BookingPage } from "../pages/booking/Booking";
import { RoomPage } from "../pages/rooms/Room";
import { ListBookingPage } from "../pages/booking/ListBookingPage";
import { DetailSection } from "../pages/pembayaran/detail";

const router = createBrowserRouter([
  // Area Ketika User Login
  {
    path: "/user",
    element: (
      
        <></> 
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
      },
      {
        path: "/user/pembayaran/detail",
        element: <DetailSection/>
      }
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
