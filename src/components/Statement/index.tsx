import * as style from "./styles";
import incomeImg from "../../assets/income.svg";
import expenseImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { StatementCard } from "./StatementCard";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { priceFormatter } from "../../utils/priceFormatter";

export function Statement() {
  const { statement } = useContext(TransactionContext);

  return (
    <style.container>
      <StatementCard
        type="Income"
        ammount={priceFormatter(statement?.income)}
        iconPath={incomeImg}
      />
      <StatementCard
        type="Expense"
        ammount={priceFormatter(statement?.expense)}
        iconPath={expenseImg}
      />
      <StatementCard
        type="Total"
        ammount={priceFormatter(statement?.balance)}
        iconPath={totalImg}
      />
    </style.container>
  );
}
