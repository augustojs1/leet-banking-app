import styled from "styled-components";
import { theme } from "../../styles/theme";

export const container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: -10rem;

  div {
    padding: 1.5rem 2rem;

    background-color: ${theme.white};
    color: ${theme.titleText};

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
  }
`;
