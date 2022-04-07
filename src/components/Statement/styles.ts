import styled from "styled-components";
import devices from "../../utils/devices";

export const container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: -10rem;

  @media ${devices.mobileL} {
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
`;
