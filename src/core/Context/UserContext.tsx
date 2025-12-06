import { createContext } from "react"

import { User } from "../../features/users/domain/user";
const UserContext = createContext< User | null>(null)

export default UserContext