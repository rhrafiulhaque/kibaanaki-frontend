import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useAdmin from '../../../Hooks/useAdmin';
import Loading from '../../Loading/Loading';

const NotAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if(loading || adminLoading){
        return <Loading/>
    }

    if(!admin && !adminLoading){
        return <Navigate to="/admin/dashboard" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default NotAdmin;