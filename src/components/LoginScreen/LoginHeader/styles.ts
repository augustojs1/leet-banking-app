import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const background = styled.header`
  background: ${theme.blue};
`;

export const container = styled.div`
  padding: 2rem 1rem 5rem;

  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: ${theme.white};
    background-color: ${theme.lightBlue};

    font-size: 1rem;

    padding: 0rem 2rem;
    height: 3rem;

    border: 0;
    border-radius: 0.25rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
