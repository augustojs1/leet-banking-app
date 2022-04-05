import * as style from "./styles";

interface StatementCardProps {
  type: "Income" | "Expense" | "Total";
  ammount: number;
  iconPath: string;
}

export function StatementCard({ type, iconPath, ammount }: StatementCardProps) {
  return (
    <style.container type={type}>
      <div>
        <header>
          <p>{type}</p>
          <img src={iconPath} alt="Income" />
        </header>
        <strong>R$ ${ammount},00</strong>
      </div>
    </style.container>
  );
}
