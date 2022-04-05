import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${theme.background}
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    max-width: 100%;
    display: block;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    position: fixed;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 36.25rem;

    position: relative;
    padding: 3rem;

    background-color: ${theme.background};

    border-radius: 0.25rem;
  }

  .close-modal {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    
    background-color: transparent;

    border: 0;

    transition: filter(0.2s);

    &:hover {
      filter: brightness(0.8s);
    }
  }
`;
