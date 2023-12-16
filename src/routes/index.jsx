import { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import { LoginPage } from "../pages/login/Login";
import { RegisterPage } from "../pages/register/Register";
import { VerificationSend } from "../pages/register/VerificationSend";
import { UserLayout } from "../layouts/UserLayout";
import { HomePage } from "../pages/home/home";

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
        element: <></>, // Halaman list kamar
      },
      {
        path: "/user/rooms/booking",
        element: <></>, // Halaman Booking Kamar
      },
      {
        path: "/user/rooms/booking/payment",
        element: <></>, // Halaman pembayaran booking kamar
      },
      {
        path: "/user/contact",
        element: <></>, // Halaman informasi kontak hotel
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
    ]
  },
  

  // Handle Route Not Found
  {
    path: "*",
    element: <div>Route Not Found!</div>,
  },
]);

export const AppRouter = () => {

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Clear localStorage here
      localStorage.clear();

      // Optionally, you can provide a custom message to show in the browser's confirmation dialog
      const confirmationMessage = 'Are you sure you want to leave?';
      event.returnValue = confirmationMessage; // Standard for most browsers
      return confirmationMessage; // For older browsers
    };

    // Attach the event listener when the component mounts
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <RouterProvider router={router} />;
};
