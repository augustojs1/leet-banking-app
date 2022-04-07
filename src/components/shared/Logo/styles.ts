import styled from "styled-components";
import { theme } from "../../../styles/theme";
import devices from "../../../utils/devices";

export const container = styled.div`
  display: flex;

  @media ${devices.mobileL} {
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const title = styled.h2`
  padding-left: 0.5rem;

  color: ${theme.white};

  @media ${devices.mobileL} {
    width: 100%;
    font-size: 1.2rem;
  }
`;
