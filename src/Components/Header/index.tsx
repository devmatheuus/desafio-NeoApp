import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../contexts/CartContext';
import { SearchInput } from '../SearchInput';
import * as Styled from './styles';

export const Header: React.FC = () => {
  const { comicsInCart } = useCart();

  const navigate = useNavigate();
  return (
    <Styled.HeaderContainer>
      <div>
        <div role="button" onClick={() => navigate('/')}>
          <h1>MARVEL COMICS</h1>
        </div>

        <Styled.HeaderActionsContainer role="button">
          <SearchInput />
          <Styled.HeaderCartContainer
            role="button"
            onClick={() => navigate('/checkout')}
          >
            {comicsInCart.length > 0 && <span>{comicsInCart.length}</span>}
            <AiOutlineShoppingCart size="3rem" />
          </Styled.HeaderCartContainer>
        </Styled.HeaderActionsContainer>
      </div>
    </Styled.HeaderContainer>
  );
};
