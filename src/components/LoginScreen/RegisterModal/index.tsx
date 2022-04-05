import { FormEvent, useState } from "react";
import * as style from "./styles";
import closeIcon from "../../../assets/close.svg";
import Modal from "react-modal";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IRegisterData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  function handleRegister(event: FormEvent) {
    event.preventDefault();

    const registerData: IRegisterData = {
      email,
      name,
      password,
      repeatPassword,
    };
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onClose} className="close-modal">
        <img src={closeIcon} alt="Close transaction modal" />
      </button>

      <style.form onSubmit={handleRegister}>
        <h2>Register a new account</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
        <input
          type="password"
          placeholder="Repeat password"
          value={repeatPassword}
          onChange={(event) => setRepeatPassword(event.target.value)}
        />

        <button type="submit">Register</button>
      </style.form>
    </Modal>
  );
}
