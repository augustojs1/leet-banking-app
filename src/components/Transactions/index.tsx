import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { priceFormatter } from "../../utils/priceFormatter";
import * as style from "./styles";
import { TransactionItem } from "./TransactionItem";

export function Transactions() {
  const { transactions } = useContext(TransactionContext);

  return (
    <style.container>
      {transactions === null || transactions.length === 0 ? (
        <style.noTransactionsContainer>
          <p>You have no transactions yet 😃 </p>
        </style.noTransactionsContainer>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions &&
              transactions.map((transaction) => (
                <TransactionItem
                  key={transaction._id}
                  type={transaction.type}
                  title={transaction.title}
                  category={transaction.category}
                  ammount={priceFormatter(transaction.ammount)}
                  createdAt={String(transaction.created_at).split("T")[0]}
                />
              ))}
          </tbody>
        </table>
      )}
    </style.container>
  );
}
