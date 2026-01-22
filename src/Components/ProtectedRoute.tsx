import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: ReactNode;
    isAuthenticated: boolean;
    requiredRole?: string;
    userRole?: string;
    redirectTo?: string;
}

export function ProtectedRoute({ 
    children, 
    isAuthenticated, 
    requiredRole, 
    userRole,
    redirectTo = '/login' 
}: ProtectedRouteProps) {
    
    // Si no está autenticado, redirigir al login
    
    if (!isAuthenticated) {
        return <Navigate to={redirectTo} replace />;
    }

    
    // Si se requiere un rol específico y no coincide, redirigir al home o login
    if (requiredRole && userRole !== requiredRole) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}
