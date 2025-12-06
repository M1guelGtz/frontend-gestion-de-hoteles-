import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function LogoutButton() {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={{ padding: '10px', textAlign: 'right' }}>
            <span style={{ marginRight: '15px' }}>
                Usuario: <strong>{user?.username}</strong> ({user?.userRol})
            </span>
            <button 
                onClick={handleLogout}
                style={{ padding: '8px 16px', cursor: 'pointer' }}
            >
                Cerrar Sesión
            </button>
        </div>
    );
}
