import styled from "styled-components";
import { theme } from "../../../styles/theme";
import devices from "../../../utils/devices";

interface AmmountColumnProps {
  type: "income" | "expense";
}

export const container = styled.tr`
  td {
    @media ${devices.mobileL} {
      display: flex;

      padding: 0.5rem 1rem;
    }

    padding: 1rem 2rem;

    background: ${theme.white};

    font-weight: 400;

    border: 0;
    border-radius: 0.25rem;
  }

  td:first-child {
    color: ${theme.titleText};
  }

  @media ${devices.mobileL} {
    td:last-child {
      display: none;
      color: ${theme.titleText};

      display: flex;

      padding: 0.5rem 1rem;
    }
  }
`;

export const ammountColumn = styled.td<AmmountColumnProps>`
  @media ${devices.mobileL} {
    font-size: 2rem;
  }

  color: ${(props) => (props.type === "income" ? theme.green : theme.red)};
`;
