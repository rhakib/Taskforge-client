import { Navbar } from "keep-react";
import '../Components/Nav.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-teal-800">
            <Navbar fluid={true} className="max-w-screen-xl mx-auto nav bg-teal-800">
                <Navbar.Container className="flex items-center justify-between">
                    <Navbar.Container className="flex items-center">
                        <Navbar.Brand>
                            <h2 className="font-bold text-white text-2xl">TaskForge</h2>
                        </Navbar.Brand>
                        <Navbar.Divider></Navbar.Divider>
                        <Navbar.Container
                            tag="ul"
                            className="lg:flex hidden items-center justify-between gap-8"
                        >
                            <Navbar.Link linkName="Home" />
                            <Link to='/dashboard/userhome'><Navbar.Link linkName="Dashboard" /></Link>
                            <Navbar.Link linkName="Contact us" />
                        </Navbar.Container>

                        <Navbar.Collapse collapseType="sidebar">
                            <Navbar.Container tag="ul" className="flex sideBar flex-col gap-5">
                                <Navbar.Link linkName="Home" />
                                <Navbar.Link linkName="Dashboard" />
                                <Navbar.Link linkName="Contact us" />
                            </Navbar.Container>
                        </Navbar.Collapse>
                    </Navbar.Container>

                    <Navbar.Container className="flex gap-2">
                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default NavBar;