import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface ContainerProps {
  type: "Income" | "Expense" | "Total";
}

export const container = styled.div<ContainerProps>`
  padding: 1.5rem 2rem;

  background-color: ${(props) =>
    props.type === "Total" ? theme.green : theme.white};
  color: ${(props) => (props.type === "Total" ? theme.white : theme.titleText)};

  border-radius: 0.25rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    margin-top: 1rem;

    display: block;

    font-size: 2rem;
    font-weight: 500;

    line-height: 3rem;
  }
`;
