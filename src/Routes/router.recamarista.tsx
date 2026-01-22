import { Route, Routes } from 'react-router-dom'
import ProtectedRouteRecamarista from './protectedRoutes/ProtectedRouteRecamarista'

export default function RouterRecamarista() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRouteRecamarista />}>
          <Route path="/recamarista" element={<div>Recamarista Dashboard</div>} />
          <Route path="/housekeeping" element={<div>Housekeeping Dashboard</div>} />
          <Route path="/tasks" element={<div>Manage Room Cleaning</div>} />
        </Route>
      </Routes>
    </>
  )
}
