import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

export default function RouterPublic() {
  return (
    <Routes>
        {/* Definir las rutas públicas aquí */}
        <Route path="/" element={<div>landing Page</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<div>Register Page</div>} />
        <Route path="/forgot-password" element={<div>Forgot Password Page</div>} /> 
    </Routes>
  )
}
