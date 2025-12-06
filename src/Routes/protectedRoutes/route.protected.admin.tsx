import { useContext } from "react";


import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../../core/Context/UserContext";

export default function RouteProtectedAdmin() {
    const value = useContext(UserContext);
    return value?.userRol === 'admin_global' ? <Outlet /> : <Navigate to='/admin' />;
}