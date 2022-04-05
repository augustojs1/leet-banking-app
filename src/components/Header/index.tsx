import { useState } from "react";
import { Logo } from "../shared/Logo";
import Modal from "react-modal";
import * as style from "./styles";

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export function Header({ onOpenTransactionModal }: HeaderProps) {
  return (
    <style.background>
      <style.container>
        <Logo />
        <button type="button" onClick={onOpenTransactionModal}>
          New Transaction
        </button>
      </style.container>
    </style.background>
  );
}
