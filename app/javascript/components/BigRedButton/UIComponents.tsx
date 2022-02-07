import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 1em;
  width: fit-content;
  ${({ color }) => `background-color: ${color};`};
`;
