import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useCart } from '../../contexts/CartContext';
import { getQuantityOfItemsOnCart } from '../../utils/getItemsOfItensOnCart';
import * as Styled from './styles';

export const CartIcon: React.FC = () => {
  const { comicsInCart } = useCart();

  const itensOnCart = getQuantityOfItemsOnCart(comicsInCart);

  return (
    <Styled.CartIconContainer>
      <div>{!!itensOnCart && <span>{itensOnCart}</span>}</div>
      <AiOutlineShoppingCart size="3rem" />
    </Styled.CartIconContainer>
  );
};
