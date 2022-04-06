import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface Transaction {
  type: "income" | "expense";
  ammount: number;
  category: string;
  title: string;
  createdAt: Date;
}

interface ICreateTransactionData {
  type: "income" | "expense";
  ammount: number;
  category: string;
  title: string;
}

interface TransactionContextData {
  createTransaction(transactionData: ICreateTransactionData): Promise<void>;
  getTransactions(): Promise<void>;
  transactions: Transaction[] | null;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);

  async function createTransaction({
    ammount,
    category,
    title,
    type,
  }: ICreateTransactionData) {
    try {
      const response = await api.post("/transactions", {
        ammount,
        category,
        title,
        type,
      });

      if (transactions) {
        setTransactions([...transactions, response.data]);
      } else {
        setTransactions(response.data);
      }

      toast.success("Transaction successfully created!");
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message}`);
    }
  }

  async function getTransactions() {
    try {
      const response = await api.get("/transactions");

      setTransactions(response.data);

      toast.success("Transaction successfully created!");
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message}`);
    }
  }

  return (
    <TransactionContext.Provider
      value={{ createTransaction, getTransactions, transactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
