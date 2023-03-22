import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { theme } from '../../styles/theme';
import * as Styled from './styles';

export const SearchInput: React.FC = () => {
  return (
    <Styled.SearchInputContainer>
      <AiOutlineSearch color={theme.colors.black} />
      <input type="text" placeholder="Buscar quadrinho" />
    </Styled.SearchInputContainer>
  );
};
