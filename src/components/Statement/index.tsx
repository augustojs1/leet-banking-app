import * as style from "./styles";
import incomeImg from "../../assets/income.svg";
import expenseImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { StatementCard } from "./StatementCard";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

export function Statement() {
  const { statement } = useContext(TransactionContext);

  return (
    <style.container>
      <StatementCard
        type="Income"
        ammount={statement?.income}
        iconPath={incomeImg}
      />
      <StatementCard
        type="Expense"
        ammount={statement?.expense}
        iconPath={expenseImg}
      />
      <StatementCard
        type="Total"
        ammount={statement?.balance}
        iconPath={totalImg}
      />
    </style.container>
  );
}
