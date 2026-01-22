import { Navigate } from 'react-router-dom'
import RouterAdminGlobal from './router.admin.global'
import RouterAdminHotel from './router.admin.hotel'
import RouterPublic from './router.public'
import RouterRecamarista from './router.recamarista'
import RouterReceptionista from './router.receptionista'

function RouterAux() {

    const rol = localStorage.getItem('rol');
    if (rol) {
    switch (rol) {
        case 'admin_global':
            return <RouterAdminGlobal />;
        case 'admin_hotel':
            return <RouterAdminHotel />;
        case 'recepcionista':
            return <RouterReceptionista />;
        case 'recamarista':
            return <RouterRecamarista />;
        default:
            return <Navigate to="/login" replace />
        }
    }
    return <RouterPublic />;
}

export default RouterAux