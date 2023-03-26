import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
          <Styled.LinkContainer>
            <Link to="/">COMICS</Link>
            <Link to="/checkout">CHECKOUT</Link>
          </Styled.LinkContainer>
          <SearchInput />

          {/* {!!itensOnCart && <span>{itensOnCart}</span>} */}
          {/* <AiOutlineShoppingCart size="3rem" /> */}
        </Styled.HeaderActionsContainer>
      </div>
    </Styled.HeaderContainer>
  );
};
