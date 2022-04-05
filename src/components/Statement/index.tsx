import * as style from "./styles";
import incomeImg from "../../assets/income.svg";
import expenseImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Statement() {
  return (
    <style.container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>R$ 350,00</strong>
      </div>
      <div>
        <header>
          <p>Expense</p>
          <img src={expenseImg} alt="Expense" />
        </header>
        <strong>- R$ 200,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong> R$ 150,00</strong>
      </div>
    </style.container>
  );
}
