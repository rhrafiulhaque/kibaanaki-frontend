import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import Loading from '../components/Loading/Loading';



const RequireAdmin = ({ children }) => {
    const user = useSelector((state) => state.auth.userDetails);
    const [admin, adminLoading] = useAdmin(user?.email);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!adminLoading && !admin && user) {
            navigate('/admin', { state: { from: location }, replace: true });
        }
    }, [admin, adminLoading, user, location, navigate]);

    if (adminLoading) {
        return <Loading />;
    }

    return children;
};

export default RequireAdmin;
