import styled from "styled-components";
import { theme } from "../../styles/theme";
import devices from "../../utils/devices";

export const background = styled.header`
  background: ${theme.blue};

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

export const container = styled.div`
  padding: 2rem 1rem 10rem;

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

    @media ${devices.mobileL} {
      padding: 0rem 1.5rem;
      height: 2.5rem;

      font-size: 0.8rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const logOutButton = styled.button`
  color: ${theme.white};
  background-color: ${theme.lightBlue};

  font-size: 1rem;

  padding: 0rem 0.2rem;
  height: 3rem;
  margin-left: 1rem;

  border: 0;
  border-radius: 0.25rem;

  &:hover {
    filter: brightness(0.9);
  }
`;
