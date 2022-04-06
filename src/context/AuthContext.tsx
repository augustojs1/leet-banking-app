import { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  user: User | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    let parsedUser = null;
    const stringUser = localStorage.getItem("leet@user");

    if (stringUser) {
      const parsedUser: User = JSON.parse(stringUser);
      setUser(parsedUser);
      return navigate("/home");
    }

    navigate("/");
  }, [navigate]);

  async function register({ email, name, password }: IRegister) {
    try {
      await api.post("/authentication/register", {
        name,
        email,
        password,
      });

      toast.success("Account successfully created!");
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message}`);
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

      localStorage.setItem(
        "leet@user",
        JSON.stringify({ name, email, balance })
      );

      toast.success(`Successfully login!`);

      navigate("/home");
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message}`);
    }
  }

  async function logout() {
    try {
      await api.post("/authentication/logout");

      setUser(null);

      localStorage.removeItem("leet@user");

      toast.success(`Successfully logout!`);

      navigate("/");
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message}`);
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
