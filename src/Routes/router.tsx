/*
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
*/