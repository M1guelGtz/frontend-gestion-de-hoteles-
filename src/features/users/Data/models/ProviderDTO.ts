import { LoginDTO } from "./userDTO";

export interface ProviderDTO {
    user: LoginDTO | null;
    setUser: (user: LoginDTO | null) => void;
}