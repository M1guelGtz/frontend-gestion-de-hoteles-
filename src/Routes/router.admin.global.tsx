import { Route, Routes } from 'react-router-dom'

export default function RouterAdminGlobal() {
  return (
    <Routes>
        <Route path="/admin" element={<div>Admin Global Dashboard</div>} />
        <Route path="/admin/users" element={<div>Manage Users</div>} />
        <Route path="/admin/settings" element={<div>Admin Settings</div>} />
    </Routes>
  )
}
