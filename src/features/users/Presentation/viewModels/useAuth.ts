import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../../core/Context/UserContext';
import { LoginDTO } from '../../Data/models/userDTO';
export function useAuth() {
    const [user, setUser] = useState<LoginDTO | null>(null);
    const [loading, setLoading] = useState(true);    
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const value = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        // Verificar si hay un token en localStorage
        const token = localStorage.getItem('token');
        const userID = localStorage.getItem('userID');
        const userRol = localStorage.getItem('rol');

        if (token && userID && userRol) {
            try {
                const parsedUser: LoginDTO = {
                    token: token,
                    message: '',
                    userID: parseInt(userID),
                    userRol: userRol as LoginDTO['userRol'],
                };
                setUser(parsedUser);
            } catch (error) {
                console.error('Error parsing user data:', error);
                localStorage.removeItem('token');
                localStorage.removeItem('userID');
                localStorage.removeItem('rol');
            }
        }
        
        setLoading(false);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Credenciales inválidas');
        }

        const data: LoginDTO = await response.json();
        
        console.log('Login response:', data);
        
        // Guardar usuario y token en localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('rol', data.userRol);
        localStorage.setItem('userID', data.userID.toString());
        
        // Actualizar el estado del usuario
        setUser(data);
        value?.setUser(data);

        // Redirigir según el rol - usar setTimeout para permitir que React actualice el estado primero
        
            switch (data.userRol) {
                case 'admin_global':
                    navigate('/admin');
                    break;
                case 'admin_hotel':
                    navigate('/hotel');
                    break;
                case 'recepcionista':
                    navigate('/reception');
                    break;
                case 'recamarista':
                    navigate('/housekeeping');
                    break;
                default:
                    navigate('/');
            }
       
    } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
        setLoading(false);
    }
};
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        localStorage.removeItem('userID');
        setUser(null);
    };

    const isAuthenticated = user !== null ? true : false;

    return {
        user,
        setUser,
        loading,
        isAuthenticated,
        handleSubmit,
        email,
        setEmail,
        password,
        setPassword,
        error,
        logout
    };
}
