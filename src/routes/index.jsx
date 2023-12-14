import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LoginPage } from "../pages/login/Login";
import { RegisterPage } from "../pages/register/Register";
import { VerificationSend } from "../pages/register/VerificationSend";
import { VerifyPage } from "../pages/register/Verify";


const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Route Not Found!</div>,
    },
    {
        children: [
            {
                path: "/",
                element: <LoginPage/> // Halaman Login
            },
            {
                path: "/signup",
                element: <RegisterPage/> // Halaman Sign Up/Register
            },
            {
                path: "/verification_send/:email",
                element: <VerificationSend/> // Halaman Pemberitahuan Untuk Verifikasi ke Email
            },
            {
                path: "/verify",
                element: <VerifyPage/> // Halaman Check Verification Key
            }
        ]
    },
    {
        path: "/home",
        element: (
            <ProtectedRoutes>

            </ProtectedRoutes>
        )
    }
]);

export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}