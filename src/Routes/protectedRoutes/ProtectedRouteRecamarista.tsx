import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../../core/Context/UserContext';



function ProtectedRouteRecamarista() {
    const value = useContext(UserContext);
    return value?.user?.userRol === 'recamarista' ? <Outlet /> : <Navigate to="/login"/>;
}

export default ProtectedRouteRecamarista