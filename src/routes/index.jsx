import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LoginPage } from "../pages/login/Login";
import { MainLayout } from "../layouts/MainLayout";


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
                element: <></> // Halaman Sign Up/Register
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