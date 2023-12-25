import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import DashBoard from "../Layout/DashBoard";
import AddTask from "../Layout/DashBoard/addTask";
import AllCompletedTask from "../Layout/DashBoard/AllCompletedTask";
import UserHome from "../Layout/DashBoard/UserHome";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact";


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
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>

            },
            {
                path: 'addTask',
                element: <AddTask></AddTask>
            },
            {
                path: 'completedTask',
                element: <AllCompletedTask></AllCompletedTask>
            }
        ]
    }
]);

export default router;