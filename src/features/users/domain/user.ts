export interface User {
    userID: number;
    personaID: number;
    hotelID: number;
    email: string;
    password: string;
    username: string;
    userRol: 'admin_global' | 'admin_hotel' | 'recepcionista' | 'recamarista';
    activo: boolean;
    fechaRegistro: Date;
}