import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { LoginHeader } from "./LoginHeader";
import { RegisterModal } from "./RegisterModal";

export function LoginScreen() {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  function handleOpenRegisterModal() {
    setOpenRegisterModal(true);
  }

  function handleCloseRegisterModal() {
    setOpenRegisterModal(false);
  }

  return (
    <>
      <LoginHeader onOpenRegisterModal={handleOpenRegisterModal} />
      <LoginForm />
      <RegisterModal
        isOpen={openRegisterModal}
        onClose={handleCloseRegisterModal}
      />
    </>
  );
}
