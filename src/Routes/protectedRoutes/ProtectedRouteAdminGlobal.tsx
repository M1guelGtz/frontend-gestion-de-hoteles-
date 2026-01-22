import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../../core/Context/UserContext';



function ProtectedRouteAdminGlobal() {
    const value = useContext(UserContext);
    return value?.user?.userRol === 'admin_global' ? <Outlet /> : <Navigate to="/login"/>;
}

export default ProtectedRouteAdminGlobal