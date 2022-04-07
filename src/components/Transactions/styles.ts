import styled from "styled-components";
import { theme } from "../../styles/theme";
import devices from "../../utils/devices";

export const container = styled.div`
  @media ${devices.mobileL} {
    margin-top: 2rem;

    table {
      th {
        display: none;
      }
    }
  }

  margin-top: 4rem;

  table {
    width: 100%;

    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;

      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;

      color: ${theme.bodyText};
    }

    tr {
      color: ${theme.bodyText};
    }
  }
`;

export const noTransactionsContainer = styled.div`
  width: 100%;

  text-align: center;

  p {
    font-size: 1.5rem;
    color: ${theme.bodyText};
  }
`;
