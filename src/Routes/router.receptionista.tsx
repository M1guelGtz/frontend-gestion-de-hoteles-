import { Route, Routes } from 'react-router-dom'

export default function RouterReceptionista() {
  return (
    <>
      <Routes>
        <Route path="/reception" element={<div>Receptionist Dashboard</div>} />
        <Route path="/reception/check-in" element={<div>Check-In Page</div>} />
        <Route path="/reception/check-out" element={<div>Check-Out Page</div>} />   
      </Routes>
    </>
  )
}
