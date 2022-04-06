import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface User {
  email: string;
  name: string;
  balance: number;
}

interface IRegister {
  name: string;
  email: string;
  password: string;
}

interface ICredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  login(credentials: ICredentials): Promise<void>;
  logout(): Promise<void>;
  register(registerData: IRegister): Promise<void>;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = false;

  const navigate = useNavigate();

  async function register({ email, name, password }: IRegister) {
    try {
      const response = await api.post("/authentication/register", {
        name,
        email,
        password,
      });
    } catch (error: any) {
      console.log(error?.response?.data?.message);
    }
  }

  async function login(credentials: ICredentials) {
    try {
      const response = await api.post("/authentication/login", {
        email: credentials.email,
        password: credentials.password,
      });

      const { name, email, balance } = response.data;

      setUser({
        name,
        email,
        balance,
      });

      navigate("/home");
    } catch (error: any) {
      console.log(error?.response?.data?.message);
    }
  }

  async function logout() {
    //
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
