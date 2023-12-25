import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { IoIosHome } from "react-icons/io";
import { Toaster } from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Footer from '../Components/Footer';


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
                                    <NavLink to='/dashboard/addTask' className='flex items-center gap-1 justify-center'><FaPlus className='text-lg'></FaPlus>Add Task</NavLink>
                                </li>
                                <li className='border  rounded-md py-2'>
                                    <NavLink to='/dashboard/completedTask' className='flex items-center gap-1 justify-center'><RiVerifiedBadgeFill className='text-lg'/>Completed Task</NavLink>
                                </li>
                            </>
                        }

                    </ul>
                </div>
                <div className='flex-1 p-10 md:overflow-x-scroll'>
                    <Outlet></Outlet>
                </div>
                <Footer/>
                <div><Toaster/></div>

            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default DashBoard;