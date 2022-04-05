import { Logo } from "../shared/Logo";
import * as style from "./styles";

export function Header() {
  return (
    <style.background>
      <style.container>
        <Logo />
        <button type="button">New Transaction</button>
      </style.container>
    </style.background>
  );
}
