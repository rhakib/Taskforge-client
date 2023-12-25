import { Button, Navbar } from "keep-react";
import '../Components/Nav.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";

const NavBar = () => {
    const { user, logOut } = useAuth()

    const navigate = useNavigate()
    const [dropDown, setDropDown] = useState(false)

    const handleDropDown = () => {
        setDropDown(!dropDown)
    }
    const handleLogOut = () => {
        navigate('/')
        logOut()

    }
    return (
        <div className="bg-teal-800">
            <Navbar fluid={true} className="max-w-screen-xl mx-auto nav bg-teal-800">
                <Navbar.Container className="flex items-center justify-between">
                    <Navbar.Container className="flex items-center">
                        <Navbar.Brand>
                            <Link to='/'><h2 className="font-bold text-white text-2xl">TaskForge</h2></Link>
                        </Navbar.Brand>
                        <Navbar.Divider></Navbar.Divider>
                        <Navbar.Container
                            tag="ul"
                            className="lg:flex hidden items-center justify-between gap-8"
                        >
                            <Link to='/'><Navbar.Link linkName="Home" /></Link>
                            <Link to='/dashboard/userHome'><Navbar.Link linkName="Dashboard" /></Link>
                            <Link to='/contact'><Navbar.Link linkName="Contact us" /></Link>
                        </Navbar.Container>

                        <Navbar.Collapse collapseType="sidebar">
                            <Navbar.Container tag="ul" className="flex sideBar flex-col gap-5">
                                <Link to='/'><Navbar.Link linkName="Home" /></Link>
                                <Link to='/dashboard/userHome'><Navbar.Link linkName="Dashboard" /></Link>
                                <Link to='/contact'><Navbar.Link linkName="Contact us" /></Link>
                            </Navbar.Container>
                        </Navbar.Collapse>
                    </Navbar.Container>

                    <Navbar.Container className="flex gap-2">                        
                    </Navbar.Container>
                    <Navbar.Container className="flex gap-2">
                        {user ?
                            <>
                                <div onClick={handleDropDown} className="relative inline-block text-left">
                                    <div className="mr-3">
                                        <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                                            <span className="sr-only">Open user menu</span>
                                            <img className="w-12 h-12 rounded-full" src={user?.photoURL} />
                                        </button>
                                    </div>

                                    <div className={`${!dropDown ? 'hidden' : "absolute right-12 z-10  w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">



                                            <button onClick={handleLogOut} type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>

                                        </div>
                                    </div>
                                </div>

                            </>
                            : <><Link to='/signup'>
                                <Button className="rounded-3xl" size="sm" type="primary">
                                    Register
                                </Button>
                            </Link>

                                <Link to='/login'>
                                    <Button className="rounded-3xl" size="sm" type="primary">
                                        Login
                                    </Button>
                                </Link> </>}
                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default NavBar;