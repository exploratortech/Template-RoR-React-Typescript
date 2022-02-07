import React, { useMemo } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import BigRedButtonUI from "./BigRedButtonUI";

type Props = {
  buttonColor: string;
  buttonText: string;
};

const ButtonContainer = styled.div`
  padding: 1em;
  width: fit-content;
  ${({ color }) => `background-color: ${color};`};
`;

const BigRedButton: React.FC = observer(
  ({ buttonColor, buttonText }: Props) => {
    const { buttonOnClick, buttonClickCounter } = useMemo(
      () => new BigRedButtonUI(),
      []
    );

    return (
      <ButtonContainer className="big-red-button-component" color={buttonColor}>
        {buttonText} {buttonClickCounter}
        <button onClick={buttonOnClick}>+1</button>
      </ButtonContainer>
    );
  }
);

export default BigRedButton;
