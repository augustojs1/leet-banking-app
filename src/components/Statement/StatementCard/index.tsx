import * as style from "./styles";

interface StatementCardProps {
  type: "Income" | "Expense" | "Total";
  ammount: string | undefined;
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
        <strong>{ammount}</strong>
      </div>
    </style.container>
  );
}
