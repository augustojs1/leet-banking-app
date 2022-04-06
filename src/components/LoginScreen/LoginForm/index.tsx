import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import * as style from "./styles";

interface ILoginData {
  email: string;
  password: string;
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const loginData: ILoginData = {
    email,
    password,
  };

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    await login(loginData);
  }

  return (
    <style.form onSubmit={handleLogin}>
      <h2>Already have an account? Sign in!</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Sign In</button>
    </style.form>
  );
}
