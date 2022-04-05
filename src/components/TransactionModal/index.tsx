import Modal from "react-modal";
import * as style from "./styles";
import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import expenseIcon from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";

interface ICreateTransaction {
  title: string;
  type: string;
  ammount: number;
  category: string;
}
interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TransactionModal({ isOpen, onClose }: TransactionModalProps) {
  const [transactionType, setTransactionType] = useState("income");

  const [title, setTitle] = useState("");
  const [ammount, setAmmount] = useState(0);
  const [category, setCategory] = useState("");

  function handleTypeButton(transactionType: string) {
    setTransactionType(transactionType);
  }

  function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();

    const transactionData: ICreateTransaction = {
      ammount,
      category,
      title,
      type: transactionType,
    };

    console.log("transaction", transactionData);
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

      <style.form onSubmit={handleCreateTransaction}>
        <h2>Register a new transaction</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Ammount"
          value={ammount}
          onChange={(event) => setAmmount(Number(event.target.value))}
        />
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
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Register</button>
      </style.form>
    </Modal>
  );
}
