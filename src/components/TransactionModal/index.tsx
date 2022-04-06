import Modal from "react-modal";
import * as style from "./styles";
import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import expenseIcon from "../../assets/outcome.svg";
import { FormEvent, useContext, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { TransactionContext } from "../../context/TransactionContext";

interface ICreateTransaction {
  title: string;
  type: "income" | "expense";
  ammount: number;
  category: string;
}
interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TransactionModal({ isOpen, onClose }: TransactionModalProps) {
  const { createTransaction } = useContext(TransactionContext);

  const [transactionType, setTransactionType] = useState("income");

  const [title, setTitle] = useState("");
  const [ammount, setAmmount] = useState(0);
  const [category, setCategory] = useState("");

  function handleTypeButton(transactionType: string) {
    setTransactionType(transactionType);
  }

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();

    const transactionData: ICreateTransaction = {
      ammount,
      category,
      title,
      type: transactionType === "income" ? "income" : "expense",
    };

    await createTransaction(transactionData);

    setTitle("");
    setCategory("");

    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
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
        {/* <input
          type="number"
          placeholder="Ammount"
          value={ammount}
          onChange={(event) => setAmmount(Number(event.target.value))}
        /> */}
        <CurrencyInput
          // id="input-example"
          // name="input-name"
          intlConfig={{ locale: "pt-Br", currency: "BRL" }}
          placeholder="Please enter a number ammount"
          defaultValue={0}
          decimalsLimit={2}
          onValueChange={(value) => setAmmount(Number(value))}
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
