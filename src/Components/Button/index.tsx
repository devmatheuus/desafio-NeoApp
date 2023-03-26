import React from 'react';

import * as Styled from './styles';

interface IButton {
  text: string;
  loadComics?: () => void;
}

export const Button: React.FC<IButton> = ({ text, loadComics }: IButton) => {
  return (
    <Styled.ButtonContainer onClick={loadComics}>{text}</Styled.ButtonContainer>
  );
};
