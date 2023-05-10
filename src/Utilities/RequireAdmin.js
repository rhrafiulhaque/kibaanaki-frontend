import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../Hooks/useAdmin';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if(loading || adminLoading){
        return <Loading/>
    }

    if(!admin && adminLoading){
        console.log('ami user pai nai');
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;