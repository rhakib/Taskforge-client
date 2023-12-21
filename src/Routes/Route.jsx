import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import DashBoard from "../Layout/DashBoard";
import UserHome from "../Layout/DashBoard/UserHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            }
        ]
    }
]);

export default router;