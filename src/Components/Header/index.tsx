import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { SearchInput } from '../SearchInput';
import * as Styled from './styles';

export const Header: React.FC = () => {
  return (
    <Styled.HeaderContainer>
      <div>
        <div>
          <h1>MARVEL COMICS</h1>
        </div>

        <Styled.HeaderActionsContainer role="button">
          <SearchInput />
          <AiOutlineShoppingCart size="2.5rem" />
        </Styled.HeaderActionsContainer>
      </div>
    </Styled.HeaderContainer>
  );
};
