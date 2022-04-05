import * as style from "./styles";
import incomeImg from "../../assets/income.svg";
import expenseImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { StatementCard } from "./StatementCard";

export function Statement() {
  return (
    <style.container>
      <StatementCard type="Income" ammount={400} iconPath={incomeImg} />
      <StatementCard type="Expense" ammount={200} iconPath={expenseImg} />
      <StatementCard type="Total" ammount={200} iconPath={totalImg} />
    </style.container>
  );
}
