import { Navigate } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './Components/ProtectedRoute';
import UserContext from './core/Context/UserContext';
import { useAuth } from './hooks/useAuth';
import { useValidatorRoute } from './hooks/validatorRoute';
import RouterAdminGlobal from './Routes/router.admin.global';
import RouterAdminHotel from './Routes/router.admin.hotel';
import RouterPublic from './Routes/router.public';
import RouterRecamarista from './Routes/router.recamarista';
import RouterReceptionista from './Routes/router.receptionista';

function App() {
  const { user, isAuthenticated, loading } = useAuth();
  const { isPublicRoute, isAdminRoute, isHotelAdminRoute, isReceptionistRoute, isRecamaristaRoute } = useValidatorRoute();

  // Mostrar loading mientras se verifica la autenticación
  if (loading) {
    return <div>Loading...</div>;
  }

  // Rutas públicas - accesibles sin autenticación
  if (isPublicRoute) {
    // Si ya está autenticado, redirigir según su rol
    if (isAuthenticated && user) {
      switch (user.userRol) {
        case 'admin_global':
          return <Navigate to="/admin" replace />;
        case 'admin_hotel':
          return <Navigate to="/hotel" replace />;
        case 'recepcionista':
          return <Navigate to="/reception" replace />;
        case 'recamarista':
          return <Navigate to="/housekeeping" replace />;
      }
    }
    return <RouterPublic />;
  }

  // Rutas de Admin Global - requiere autenticación y rol admin_global
  if (isAdminRoute) {
    return (
      <ProtectedRoute 
        isAuthenticated={isAuthenticated} 
        requiredRole="admin_global" 
        userRole={user?.userRol}
      >
        <UserContext.Provider value={user}>
          <RouterAdminGlobal />
        </UserContext.Provider>
      </ProtectedRoute>
    );
  }

  // Rutas de Admin Hotel - requiere autenticación y rol admin_hotel
  if (isHotelAdminRoute) {
    return (
      <ProtectedRoute 
        isAuthenticated={isAuthenticated} 
        requiredRole="admin_hotel" 
        userRole={user?.userRol}
      >
        <UserContext.Provider value={user}>
          <RouterAdminHotel />
        </UserContext.Provider>
      </ProtectedRoute>
    );
  }

  // Rutas de Recepcionista - requiere autenticación y rol recepcionista
  if (isReceptionistRoute) {
    return (
      <ProtectedRoute 
        isAuthenticated={isAuthenticated} 
        requiredRole="recepcionista" 
        userRole={user?.userRol}
      >
        <UserContext.Provider value={user}>
          <RouterReceptionista />
        </UserContext.Provider>
      </ProtectedRoute>
    );
  }

  // Rutas de Recamarista - requiere autenticación y rol recamarista
  if (isRecamaristaRoute) {
    return (
      <ProtectedRoute 
        isAuthenticated={isAuthenticated} 
        requiredRole="recamarista" 
        userRole={user?.userRol}
      >
        <UserContext.Provider value={user}>
          <RouterRecamarista />
        </UserContext.Provider>
      </ProtectedRoute>
    );
  }

  // Si no coincide con ninguna ruta, redirigir según estado
  return isAuthenticated ? <Navigate to="/" replace /> : <Navigate to="/login" replace />;
}

export default App
