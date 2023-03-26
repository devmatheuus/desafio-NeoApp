import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../contexts/CartContext';
import { getQuantityOfItemsOnCart } from '../../utils/getItemsOfItensOnCart';
import * as Styled from './styles';

export const CartIcon: React.FC = () => {
  const { comicsInCart } = useCart();

  const itensOnCart = getQuantityOfItemsOnCart(comicsInCart);
  const navigate = useNavigate();

  return (
    <Styled.CartIconContainer
      role="button"
      onClick={() => navigate('/checkout')}
    >
      <div>{!!itensOnCart && <span>{itensOnCart}</span>}</div>
      <AiOutlineShoppingCart size="3rem" />
    </Styled.CartIconContainer>
  );
};
