import { Route, Routes } from 'react-router-dom'

export default function RouterRecamarista() {
  return (
    <Routes>
        <Route path="/housekeeping" element={<div>Housekeeping Dashboard</div>} />
        <Route path="/housekeeping/tasks" element={<div>Manage Room Cleaning</div>} />
    </Routes>
  )
}
