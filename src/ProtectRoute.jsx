import {Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./context/auth";

const ProtectRoute = ({children}) => {
    const location = useLocation()
    const {user} =  useContext(AuthContext);
    
    if(!user){
        return <Navigate to='/login' state={{path:location.pathname}} />
    }

    return children;
};

export default ProtectRoute;