import { createContext, ReactNode } from "react";

interface ICredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  login(credentials: ICredentials): Promise<void>;
  logout(): Promise<void>;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function login({ email, password }: ICredentials) {
    //
  }

  async function logout() {
    //
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
