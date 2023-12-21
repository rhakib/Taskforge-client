import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { IoIosHome } from "react-icons/io";

const DashBoard = () => {


    const isHR = true;

    return (
        <div>
            <NavBar></NavBar>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-64 md:min-h-screen bg-teal-800 text-white'>
                    <ul className='flex nav flex-col gap-3 p-10 font-semibold text-xl'>
                        {
                            isHR &&
                            <>
                                <li className='border rounded-md py-2'>
                                    <NavLink to='/dashboard/userHome' className='flex items-center gap-1 justify-center'><IoIosHome></IoIosHome>Home</NavLink>
                                </li>
                                <li className='border  rounded-md py-2'>
                                    <NavLink to='/dashboard/employeelist' className='flex items-center gap-1 justify-center'>Employee List</NavLink>
                                </li>
                                <li className='border  rounded-md py-2'>
                                    <NavLink to='/dashboard/progress' className='flex items-center gap-1 justify-center'>Progress</NavLink>
                                </li>
                            </>
                        }

                    </ul>
                </div>
                <div className='flex-1 p-10 md:overflow-x-scroll'>
                    <Outlet></Outlet>
                </div>

            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default DashBoard;