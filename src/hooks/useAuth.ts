import { useEffect, useState } from 'react';
import { User } from '../features/users/domain/user';

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Verificar si hay un token en localStorage
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        
        if (token && storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (error) {
                console.error('Error parsing user data:', error);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        }
        
        setLoading(false);
    }, []);

    const login = (userData: User, token: string) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        console.log(userData);
        
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    };

    const isAuthenticated = !!user;

    return {
        user,
        loading,
        isAuthenticated,
        login,
        logout
    };
}
