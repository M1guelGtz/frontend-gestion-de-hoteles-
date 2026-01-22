import { Route, Routes } from 'react-router-dom'
import Dashboard from '../features/Admins/Presentation/Pages/Dashboard'
import ProtectedRouteAdminGlobal from './protectedRoutes/ProtectedRouteAdminGlobal'

export default function RouterAdminGlobal() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRouteAdminGlobal />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/users" element={<div>Manage Users</div>} />
          <Route path="/admin/settings" element={<div>Admin Settings</div>} />
        </Route>
      </Routes>
    </>
  )
}
