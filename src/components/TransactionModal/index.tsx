import Modal from "react-modal";
import * as style from "./styles";
import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import expenseIcon from "../../assets/outcome.svg";

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TransactionModal({ isOpen, onClose }: TransactionModalProps) {
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

      <style.form>
        <h2>Register a new transaction</h2>
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Ammount" />
        <style.transactionType>
          <button type="button">
            <img src={incomeIcon} alt="Income" />
            <span>Income</span>
          </button>
          <button type="button">
            <img src={expenseIcon} alt="Expense" />
            <span>Expense</span>
          </button>
        </style.transactionType>
        <input type="text" placeholder="Category" />
        <button type="submit">Register</button>
      </style.form>
    </Modal>
  );
}
