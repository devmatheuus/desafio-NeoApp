import React, { useState } from 'react';
import { BsTrash3 } from 'react-icons/bs';
import { SlBag } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

import { AnimatedCardImage } from '../../Components/AnimatedCardImage';
import { Button } from '../../Components/Button';
import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
import { ItemsOnCartCounter } from '../../Components/ItemsOnCartCounter';
import { DiscountCouponModal } from '../../Components/Modals/DiscountCoupon';
import { useCart } from '../../contexts/CartContext';
import { calculateTotalCart } from '../../utils/calculateTotalCart';
import { getQuantityOfItemsOnCart } from '../../utils/getItemsOfItensOnCart';
import { numberFormatter } from '../../utils/numberFormatter';
import * as Styled from './styles';

export const Checkout: React.FC = () => {
  const { comicsInCart, removeFromCart } = useCart();

  const [showModal, setShowModal] = useState(false);

  const itensOnCart = getQuantityOfItemsOnCart(comicsInCart);

  const navigate = useNavigate();

  return (
    <>
      {showModal && <DiscountCouponModal onClose={() => setShowModal(false)} />}
      <Header />

      {comicsInCart.length <= 0 && (
        <Styled.NoItemsContainer>
          <SlBag size="12rem" />
          <p>You have no items in the cart</p>
          <Button text="Buy now" onClick={() => navigate('/')} />
        </Styled.NoItemsContainer>
      )}

      {comicsInCart.length > 0 && (
        <Styled.CheckoutContainer>
          <Styled.CheckoutList>
            {comicsInCart.map((item) => (
              <Styled.CheckoutItem key={item.id}>
                <AnimatedCardImage
                  thumbnail={item.thumbnail}
                  title={item.title}
                  size="portrait_xlarge"
                  height="150"
                />

                <div>
                  <h2>{item.title}</h2>
                  <p>{numberFormatter(item.prices[0].price)}</p>
                  <div>
                    <ItemsOnCartCounter
                      comicId={item.id}
                      quantity={item.quantity}
                    />
                    <button onClick={() => removeFromCart(item.id)}>
                      <span>Remove</span>
                      <BsTrash3 />
                    </button>
                  </div>
                </div>
              </Styled.CheckoutItem>
            ))}
          </Styled.CheckoutList>
          <Styled.CheckoutInfos>
            <Styled.CheckoutInfosDescription>
              <h2>Total</h2>
              <h3>Quantity</h3>
            </Styled.CheckoutInfosDescription>
            <Styled.CheckoutInfosPrice>
              <h2>{calculateTotalCart(comicsInCart)}</h2>
              <h3>{itensOnCart}</h3>
            </Styled.CheckoutInfosPrice>
          </Styled.CheckoutInfos>
          <Styled.ButtonContainer>
            <Button
              text="Add discount coupon"
              onClick={() => setShowModal(true)}
            />
            <Button text="Purchase" />
          </Styled.ButtonContainer>
        </Styled.CheckoutContainer>
      )}

      <Footer />
    </>
  );
};
