import React from 'react';

import { useCart } from '../../../contexts/CartContext';
import { Button } from '../../Button';
import * as Styled from '../modalStyles';

interface Props {
  onClose: () => void;
}

export const DiscountCouponModal: React.FC<Props> = ({ onClose }) => {
  const [coupon, setCoupon] = React.useState('');

  const { addCoupon } = useCart();

  const handleSubmit = () => {
    addCoupon(coupon);
    onClose();
  };

  return (
    <Styled.ModalWrapper>
      <Styled.ModalContent>
        <Styled.ModalHeader>
          <Styled.ModalTitle>Add coupon</Styled.ModalTitle>
          <Styled.ModalCloseButton onClick={onClose}>×</Styled.ModalCloseButton>
        </Styled.ModalHeader>
        <Styled.ModalBody>
          <Styled.ModalLabel htmlFor="coupon">Coupon name:</Styled.ModalLabel>
          <Styled.ModalInput
            id="coupon"
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <Styled.ModalButtonContainer>
            <Button text="Cancel" onClick={onClose} />
            <Button text="Add" onClick={handleSubmit} />
          </Styled.ModalButtonContainer>
        </Styled.ModalBody>
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
};
