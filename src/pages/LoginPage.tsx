import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // TODO: Reemplazar con tu llamada real a la API
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

            const data = await response.json();
            
            console.log(data);
            
            // Guardar usuario y token
            login(data, data.token);

            // Redirigir según el rol
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
                    navigate('/notfound');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                {error && (
                    <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>
                )}
                <button 
                    type="submit" 
                    disabled={loading}
                    style={{ width: '100%', padding: '10px', cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                    {loading ? 'Cargando...' : 'Iniciar Sesión'}
                </button>
            </form>
        </div>
    );
}
