import * as style from "./styles";

interface TransactionItemProps {
  type: "income" | "expense";
  title: string;
  ammount: string;
  category: string;
  createdAt: string;
}

export function TransactionItem({
  type,
  title,
  ammount,
  category,
  createdAt,
}: TransactionItemProps) {
  return (
    <style.container>
      <td>{title}</td>
      <style.ammountColumn type={type}>{ammount}</style.ammountColumn>
      <td>{category}</td>
      <td>
        {new Intl.DateTimeFormat(["ban", "id"]).format(new Date(createdAt))}
      </td>
    </style.container>
  );
}
