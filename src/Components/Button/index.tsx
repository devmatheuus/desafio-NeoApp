import React from 'react';

import * as Styled from './styles';

interface IButton {
  text: string;
  loadMoreComics?: () => void;
}

export const Button: React.FC<IButton> = ({
  text,
  loadMoreComics,
}: IButton) => {
  return (
    <Styled.ButtonContainer onClick={loadMoreComics}>
      {text}
    </Styled.ButtonContainer>
  );
};
