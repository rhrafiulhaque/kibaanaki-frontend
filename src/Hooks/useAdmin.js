import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authApi } from '../features/auth/authApi';

const useAdmin = (email) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAdminStatus = async () => {
            try {
                if (email) {
                    const data = await dispatch(authApi.endpoints.getAdmin.initiate(email)).unwrap();
                    if (data.user.role === 'Admin') {
                        setAdmin(true);
                    }
                }
            } catch (error) {
                console.log('Error:', error);
            } finally {
                setAdminLoading(false);
            }
        };

        if (adminLoading) {
            fetchAdminStatus();
        }
    }, [dispatch, email, adminLoading]);

    return [admin, adminLoading];
};

export default useAdmin;
