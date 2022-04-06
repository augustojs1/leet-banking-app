import { Logo } from "../shared/Logo";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";
import * as style from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export function Header({ onOpenTransactionModal }: HeaderProps) {
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
  }

  return (
    <style.background>
      <style.container>
        <Logo />
        <div>
          <button type="button" onClick={onOpenTransactionModal}>
            New Transaction
          </button>
          <style.logOutButton type="button" onClick={handleLogout}>
            <LogOut size={22} />
          </style.logOutButton>
        </div>
      </style.container>
    </style.background>
  );
}
