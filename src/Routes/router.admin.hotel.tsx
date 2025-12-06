import { Route, Routes } from 'react-router-dom'

export default function RouterAdminHotel() {
  return (
    <Routes>
        <Route path="/hotel" element={<div>Hotel Admin Dashboard</div>} />
        <Route path="/hotel/rooms" element={<div>Manage Hotel Rooms</div>} />
        <Route path="/hotel/reservations" element={<div>Manage Hotel Reservations</div>} />
    </Routes>
  )
}
