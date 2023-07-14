import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../Hooks/useAdmin';

// const RequireAdmin = ({ children }) => {
//     const [user, loading] = useAuthState(auth);

//     const [admin, adminLoading] = useAdmin(user?.email);

//     const location = useLocation();

//     if (loading || adminLoading) {
//         return <Loading />
//     }

//     // if (!admin && adminLoading) {

//     // }
//     if (user.email && admin && !adminLoading) {
//         return children;
//     } else {
//         return <Navigate to="/admin" state={{ from: location }} replace></Navigate>
//     }

// };

// export default RequireAdmin;



const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user?.email);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !adminLoading && !admin && user) {
            // User is logged in but not an admin, navigate to admin login page
            navigate('/admin', { state: { from: location }, replace: true });
        }
    }, [admin, adminLoading, loading, user, location, navigate]);

    if (loading || adminLoading) {
        return <Loading />;
    }
    console.log(admin);

    return children;
};

export default RequireAdmin;
