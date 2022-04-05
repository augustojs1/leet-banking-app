import * as style from "./styles";
import { TransactionItem } from "./TransactionItem";

export function Transactions() {
  return (
    <style.container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <TransactionItem
            type="income"
            title="Salary"
            category="Work"
            ammount={350}
            createdAt={"04/04/2022"}
          />
          <TransactionItem
            type="expense"
            title="Salary"
            category="Work"
            ammount={350}
            createdAt={"04/04/2022"}
          />
        </tbody>
      </table>
    </style.container>
  );
}
