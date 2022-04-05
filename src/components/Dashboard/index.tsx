import { Statement } from "../Statement";
import { Transactions } from "../Transactions";
import * as style from "./styles";

export function Dashboard() {
  return (
    <style.container>
      <Statement />
      <Transactions />
    </style.container>
  );
}
