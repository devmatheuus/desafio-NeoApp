import React, { useState } from 'react';

import { AnimatedCardImage } from '../../Components/AnimatedCardImage';
import { Button } from '../../Components/Button';
import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
import { DiscountCouponModal } from '../../Components/Modals/DiscountCoupon';
import * as Styled from './styles';

const mock = [
  {
    id: 1,
    title: 'X-Men: Phoenix - Warsong (2006)',
    price: 3.99,
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/50/4c3645d0d29e3',
      extension: 'jpg',
    },
  },
  {
    id: 2,
    title: 'X-Men: Phoenix - Warsong (2006)',
    price: 3.99,
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/50/4c3645d0d29e3',
      extension: 'jpg',
    },
  },
  {
    id: 3,
    title: 'X-Men: Phoenix - Warsong (2006)',
    price: 3.99,
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/50/4c3645d0d29e3',
      extension: 'jpg',
    },
  },
];

export const Checkout: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <DiscountCouponModal
          onClose={() => setShowModal(false)}
          onSubmit={() => console.log('oi')}
        />
      )}
      <Header />
      <Styled.CheckoutContainer>
        <Styled.CheckoutList>
          {mock.map((item) => (
            <Styled.CheckoutItem key={item.id}>
              <AnimatedCardImage
                thumbnail={item.thumbnail}
                title={item.title}
                size="portrait_xlarge"
                height="150"
              />

              <div>
                <h2>{item.title}</h2>
                <h3>{item.price}</h3>
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
            <h2>$ 3.99</h2>
            <h3>3</h3>
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
      <Footer />
    </>
  );
};
