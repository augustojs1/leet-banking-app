import { useState } from "react";
import { Logo } from "../../shared/Logo";
import * as style from "./styles";

interface LoginHeaderProps {
  onOpenRegisterModal: () => void;
}

export function LoginHeader({ onOpenRegisterModal }: LoginHeaderProps) {
  return (
    <style.background>
      <style.container>
        <Logo />
        <button type="button" onClick={onOpenRegisterModal}>
          Register
        </button>
      </style.container>
    </style.background>
  );
}
