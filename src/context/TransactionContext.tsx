import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface Transaction {
  _id: string;
  type: "income" | "expense";
  ammount: number;
  category: string;
  title: string;
  created_at: Date;
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
  transactions: Transaction[];
  statement: IStatements;
}

interface TransactionProviderProps {
  children: ReactNode;
}

interface IStatements {
  income: number;
  expense: number;
  balance: number;
}

export const TransactionContext = createContext({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  // const [statements, setStatements] = useState<IStatements | null>(null);

  const statement: IStatements = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.ammount;
        acc.balance += transaction.ammount;
      } else {
        acc.expense += transaction.ammount;
        acc.balance -= transaction.ammount;
      }

      return acc;
    },
    {
      income: 0,
      expense: 0,
      balance: 0,
    }
  );

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

      console.log("create transaction", response);

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
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message}`);
    }
  }

  return (
    <TransactionContext.Provider
      value={{ createTransaction, getTransactions, transactions, statement }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
