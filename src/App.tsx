import './App.css';
import UserContext from './core/Context/UserContext';
import { useAuth } from './features/users/Presentation/viewModels/useAuth';
import RouterAdminGlobal from './Routes/router.admin.global';
import RouterAdminHotel from './Routes/router.admin.hotel';
import RouterPublic from './Routes/router.public';
import RouterRecamarista from './Routes/router.recamarista';
import RouterReceptionista from './Routes/router.receptionista';

function App() {
  const {user, setUser } =  useAuth();
  return (
    <UserContext.Provider value={{user, setUser}}>
      <RouterPublic />
      <RouterAdminGlobal />
      <RouterAdminHotel />
      <RouterReceptionista />
      <RouterRecamarista />
    </UserContext.Provider>
  )
  /*
  const { user, isAuthenticated, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  // Si no está autenticado, mostrar rutas públicas
  if (!isAuthenticated) {
    return <RouterPublic />;
  }
  // Si está autenticado, renderizar según el rol
  if (user) {
    switch (user.userRol) {
      case 'admin_global':
        return <RouterAdminGlobal />;
      case 'admin_hotel':
        return <RouterAdminHotel />;
      case 'recepcionista':
        return <RouterReceptionista />;
      case 'recamarista':
        return <RouterRecamarista />;
      default:
        //return <Navigate to="/login" replace />;
    }
  }
  return <Navigate to="/login" />;
 // return <Navigate to="/login" replace />;
 */
}

export default App;