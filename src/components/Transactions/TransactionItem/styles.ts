import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface AmmountColumnProps {
  type: "income" | "expense";
}

export const container = styled.tr`
  td {
    padding: 1rem 2rem;

    background: ${theme.white};
    /* color: ${theme.bodyText}; */

    font-weight: 400;

    border: 0;
    border-radius: 0.25rem;
  }

  td:first-child {
    color: ${theme.titleText};
  }
`;

export const ammountColumn = styled.td<AmmountColumnProps>`
  color: ${(props) => (props.type === "income" ? theme.green : theme.red)};
`;
