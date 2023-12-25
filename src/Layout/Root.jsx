import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer/>
            
            
        </div>
    );
};

export default Root;