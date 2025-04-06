import { createBrowserRouter, Navigate } from "react-router";
import { AdminDashboard } from "./components/admin-dashboard";
import GlobalLayout from "./components/global-layout";
import SignForm from "./components/sign-form";
import UserDashboard from "./components/user-dashboard";

export default createBrowserRouter([
    {
        path: "/",
        element: <GlobalLayout />,
        children: [
            {
                index: true, // This makes it the default route
                element: <Navigate to="/user/sign" /> // Redirect to user/sign
            },
            {
                path: "admin",
                children: [
                    {
                        index: true,
                        element: <Navigate to="/admin/sign" />
                    },
                    {
                        path: "sign",
                        element: <SignForm />
                    },
                    {
                        path: "dashboard",
                        element: <AdminDashboard />
                    }
                ]
            },
            {
                path: "user",
                children: [
                    {
                        index: true,
                        element: <Navigate to="/user/sign" />
                    },
                    {
                        path: "dashboard",
                        element: <UserDashboard />
                    },
                    {
                        path: "sign",
                        element: <SignForm />
                    },
                ]
            }
        ]
    }
])