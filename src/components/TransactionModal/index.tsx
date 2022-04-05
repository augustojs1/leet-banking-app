import Modal from "react-modal";
import * as style from "./styles";

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TransactionModal({ isOpen, onClose }: TransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <style.form>
        <h2>Create transaction</h2>
      </style.form>
    </Modal>
  );
}
