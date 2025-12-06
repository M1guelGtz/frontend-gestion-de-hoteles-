import { useLocation } from "react-router-dom";

export function useValidatorRoute() {
    const location = useLocation();

    {
        // adaptar las rutas conforme se usen.
    }

    //acceso a rutas publicas
    const publicRoutes = ["/", "/login", "/register", "/forgot-password"];
    const isPublicRoute = publicRoutes.includes(location.pathname);


    // se cambia con las rutas para la/el admin global
    const adminGlobalRoutes = ["/admin", "/admin/users", "/admin/settings"];
    const isAdminRoute = adminGlobalRoutes.includes(location.pathname);


    // se dejan las rutas para la/el admin de hotel
    const adminHotelRoutes = ["/hotel", "/hotel/rooms", "/hotel/reservations"];
    const isHotelAdminRoute = adminHotelRoutes.includes(location.pathname);

    //rutas para la/el recepcionista se 
    const receptionistaRoutes = ["/reception", "/reception/check-in", "/reception/check-out"];
    const isReceptionistRoute = receptionistaRoutes.includes(location.pathname);


    // rutas para la/el recamarista
    const recamaristaRoutes = ["/housekeeping", "/housekeeping/tasks"];
    const isRecamaristaRoute = recamaristaRoutes.includes(location.pathname);


    return { isPublicRoute, isAdminRoute, isHotelAdminRoute, isReceptionistRoute, isRecamaristaRoute };
}