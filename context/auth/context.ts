import { createContext } from "react";
import { User, LoginParams, ProfileParams, LogoutParams } from "../../types"

export const defaultUser: User = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    IsVerified: false,
    IsDeleted: false,

    PairedUsers: [],
    Profile: null
}

type AuthContext = {
    Token: string;
    User: User;

    register: (param: any)=>void;
    login: (param: LoginParams) => void;
    updateUser: (params: ProfileParams) => void;
    logout: (params: LogoutParams) => void;
}

export default createContext<AuthContext>({
    Token: "",
    User: defaultUser,

    register: async () => {},
    login: async () => {},
    updateUser: async () => {},
    logout: async () => {},
});
