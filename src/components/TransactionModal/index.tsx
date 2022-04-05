import Modal from "react-modal";
import * as style from "./styles";
import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import expenseIcon from "../../assets/outcome.svg";
import { useState } from "react";

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TransactionModal({ isOpen, onClose }: TransactionModalProps) {
  const [transactionType, setTransactionType] = useState("income");

  function handleTypeButton(transactionType: string) {
    setTransactionType(transactionType);
  }

  function handleCreateTransaction() {
    //
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

      <style.form>
        <h2>Register a new transaction</h2>
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Ammount" />
        <style.transactionType>
          <style.transationTypeButton
            type="button"
            onClick={() => handleTypeButton("income")}
            selected={transactionType === "income"}
          >
            <img src={incomeIcon} alt="Income" />
            <span>Income</span>
          </style.transationTypeButton>
          <style.transationTypeButton
            type="button"
            onClick={() => handleTypeButton("expense")}
            selected={transactionType === "expense"}
          >
            <img src={expenseIcon} alt="Expense" />
            <span>Expense</span>
          </style.transationTypeButton>
        </style.transactionType>
        <input type="text" placeholder="Category" />
        <button type="submit">Register</button>
      </style.form>
    </Modal>
  );
}
