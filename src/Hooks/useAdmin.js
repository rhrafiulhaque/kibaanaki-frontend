import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { authApi } from "../features/auth/authApi";

const useAdmin = email => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect( () =>{
        if(email){
            dispatch(authApi.endpoints.getAdmin.initiate(email))
            .unwrap()
            .then((data)=>{
                if(data?.role==='admin'){
                    setAdmin(true);
                }
                
            })
        }
        setAdminLoading(false);
        
    }, [dispatch,email])

    return [admin, adminLoading]
}

export default useAdmin;