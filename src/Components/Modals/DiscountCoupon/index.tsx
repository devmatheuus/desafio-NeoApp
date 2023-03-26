import React from 'react';

import { Button } from '../../Button';
import * as Styled from './styles';

interface Props {
  onClose: () => void;
  onSubmit: (coupon: string) => void;
}

export const DiscountCouponModal: React.FC<Props> = ({ onClose, onSubmit }) => {
  const [coupon, setCoupon] = React.useState('');

  const handleSubmit = () => {
    onSubmit(coupon);
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
            <Button text="Cancel" onClick={handleSubmit} />
            <Button text="Add" onClick={onClose} />
          </Styled.ModalButtonContainer>
        </Styled.ModalBody>
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
};
