import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from './AuthProvider';



function PrivateRoutes({ allowedRoles }) {
    const user = useAuth();
    const location = useLocation()
    const [token, setToken] = useState("")
    const [role, setRole] = useState("")
    useEffect(() =>{
        setToken(JSON.parse(localStorage.getItem("token")))
        setRole(JSON.parse(localStorage.getItem("role")))
    }, [])
    if (!user.token) return <Navigate to="/choosesociety" />;
    return allowedRoles.find((roles) => role.includes(roles)) && 
    (
        <Outlet />
    )
  }

export default PrivateRoutes;