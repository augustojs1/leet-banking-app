import { Logo } from "../../shared/Logo";
import * as style from "./styles";

export function LoginHeader() {
  return (
    <style.background>
      <style.container>
        <Logo />
        <button type="button">Register</button>
      </style.container>
    </style.background>
  );
}
