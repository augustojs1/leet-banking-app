import * as style from "./styles";

interface TransactionItemProps {
  type: "income" | "expense";
  title: string;
  ammount: number;
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
      <style.ammountColumn type={type}>R$ {ammount},00</style.ammountColumn>
      <td>{category}</td>
      <td>{createdAt}</td>
    </style.container>
  );
}
