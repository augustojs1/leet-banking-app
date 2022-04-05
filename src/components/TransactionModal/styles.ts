import styled from "styled-components";
import { theme } from "../../styles/theme";

interface TransactionTypeButtonProps {
  selected: boolean;
}

export const form = styled.form`
  h2 {
    margin-bottom: 2rem;

    font-size: 1.5rem;

    color: ${theme.titleText};
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0rem 1.5rem;

    background: #e7e9ee;

    font-size: 1rem;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    &::placeholder {
      color: ${theme.bodyText};
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    background-color: ${theme.green};
    color: ${theme.white};

    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;

    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const transactionType = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

export const transationTypeButton = styled.button<TransactionTypeButtonProps>`
  height: 4rem;

  background-color: ${(props) =>
    props.selected ? theme.white : "transparent"};

  border: ${(props) =>
    props.selected ? `2px solid ${theme.bodyText}` : "1px solid #d7d7d7"};
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    color: ${theme.titleText};
  }

  &:hover {
    border-color: #aaa;
  }
`;
