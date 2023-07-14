// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { authApi } from "../features/auth/authApi";

// const useAdmin = (email) => {
//     const [admin, setAdmin] = useState(false);
//     const [adminLoading, setAdminLoading] = useState(true);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const getAdminStatus = async () => {
//             try {
//                 if (email) {
//                     const response = await dispatch(
//                         authApi.endpoints.getAdmin.initiate(email)
//                     );
//                     const data = response.data;
//                     console.log("Admin Data:", data);
//                     setAdmin(data && data.role === "admin");
//                 }
//             } catch (error) {
//                 console.error("Error fetching admin status:", error);
//             } finally {
//                 setAdminLoading(false);
//             }
//         };

//         getAdminStatus();
//     }, [dispatch, email]);

//     console.log("Admin:", admin);
//     return [admin, adminLoading];
// };

// export default useAdmin;





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
                    if (data.role === 'admin') {
                        setAdmin(true);
                    }
                }
            } catch (error) {
                console.log('Error:', error);
            } finally {
                setAdminLoading(false);
            }
        };

        fetchAdminStatus();
    }, [dispatch, email]);

    return [admin, adminLoading];
};

export default useAdmin;
