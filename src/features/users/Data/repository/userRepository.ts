import type { User } from '../models/user';
import type { LoginDTO } from '../models/userDTO';

const API_URL = import.meta.env.VITE_API_URL;

export class UserRepository {
    async login(email: string, password: string): Promise<LoginDTO> {
        const response = await fetch(`${API_URL}users/auth/login`, {
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
        return data;
    }

    async getUserById(userID: number): Promise<User> {
        const response = await fetch(`${API_URL}users/${userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error al obtener el usuario');
        }

        const data: User = await response.json();
        return data;
    }

    async registerUser(user: Partial<User>): Promise<User> {
        const response = await fetch(`${API_URL}users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error('Error al registrar el usuario');
        }

        const data: User = await response.json();
        return data;
    }
    async updateUser(userID: number, user: Partial<User>): Promise<User> {
        const response = await fetch(`${API_URL}users/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el usuario');
        }

        const data: User = await response.json();
        return data;
    }

    async deleteUser(userID: number): Promise<void> {
        const response = await fetch(`${API_URL}users/${userID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Error al eliminar el usuario');
        }   
    }

    async getByEmail(email: string): Promise<User> {
        const response = await fetch(`${API_URL}users/email/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error al obtener el usuario por email');
        }

        const data: User = await response.json();
        return data;
    }
}