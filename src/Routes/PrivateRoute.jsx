import { Spinner } from 'keep-react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    
    const location = useLocation()

    

    if (loading) {
        return <div className='flex justify-center'> <Spinner color="info" size="lg" /></div>
    }

    if (user) {
        return children
    }

    toast.error('Unauthorized access')
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;