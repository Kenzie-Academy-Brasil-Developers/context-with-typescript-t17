import { createContext, useState } from "react";
import { TRegisterForm } from "../../components/RegisterForm/registerFormSchema";
import { api } from "../../services/api";
import { IUserContext, IUserProviderProps, IUser, IUserLoginResponse } from "./@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({children}: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);

    const userRegister = async (formData: TRegisterForm) => {
        try {
            const { data } = await api.post("/users", formData);
            console.log(data);
            console.log("Cadastro efetuado com sucesso!")
        } catch (error) {
            console.log(error);
        }
    }

    const userLogin = async (formData: any) => {
        try {
            const { data } = await api.post<IUserLoginResponse>("/login", formData);
            setUser(data.user);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", JSON.stringify(data.user.id));
        } catch (error) {
            console.log(error);
        }
    }

    const userLogout = () => {
        setUser(null);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
    }

    return(
        <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
            {children}
        </UserContext.Provider>
    )
}