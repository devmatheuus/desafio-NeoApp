import React from 'react';

import * as Styled from './styles';

interface IButton {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({ text, onClick }: IButton) => {
  return (
    <Styled.ButtonContainer onClick={onClick}>{text}</Styled.ButtonContainer>
  );
};
