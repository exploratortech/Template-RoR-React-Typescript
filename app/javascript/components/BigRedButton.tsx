import React from "react";
import styled from "styled-components";

type Props = {
  buttonColor: string;
  buttonText: string;
};

const ButtonContainer = styled.div`
  padding: 1em;
  width: fit-content;
  ${({ color }) => `background-color: ${color};`};
`;

const BigRedButton = ({ buttonColor, buttonText }: Props) => {
  return (
    <ButtonContainer className="big-red-button-component" color={buttonColor}>
      {buttonText}
    </ButtonContainer>
  );
};

export default BigRedButton;
