import { createContext } from "react";
import { ProviderDTO } from "../../features/users/Data/models/ProviderDTO";


const UserContext = createContext<ProviderDTO | null>(null);

export default UserContext