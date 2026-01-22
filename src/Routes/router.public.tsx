import { Route, Routes } from 'react-router-dom'
import LandingPage from '../features/app/Presentation/Pages/LandingPage'
import LoginPage from '../features/users/Presentation/pages/LoginPage'

export default function RouterPublic() {
  return (
    <Routes>
        {/* Definir las rutas públicas aquí */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<div>Register Page</div>} />
        <Route path="/forgot-password" element={<div>Forgot Password Page</div>} /> 
    </Routes>
  )
}
