import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../contexts/CartContext';
import { getQuantityOfItemsOnCart } from '../../utils/getItemsOfItensOnCart';
import { SearchInput } from '../SearchInput';
import * as Styled from './styles';

export const Header: React.FC = () => {
  const { comicsInCart } = useCart();

  const itensOnCart = getQuantityOfItemsOnCart(comicsInCart);

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
            {!!itensOnCart && <span>{itensOnCart}</span>}
            <AiOutlineShoppingCart size="3rem" />
          </Styled.HeaderCartContainer>
        </Styled.HeaderActionsContainer>
      </div>
    </Styled.HeaderContainer>
  );
};
