import React from 'react';

import { useCart } from '../../../contexts/CartContext';
import { IComic } from '../../../types/IComicData';
import { Button } from '../../Button';
import * as Styled from '../modalStyles';

interface Props {
  onClose: () => void;
  comic: IComic;
}

export const AddToCartModal: React.FC<Props> = ({ onClose, comic }) => {
  const [quantity, setQuantity] = React.useState('');

  const { addToCart } = useCart();

  const handleSubmit = () => {
    addToCart({ ...comic, quantity: +quantity });
    onClose();
  };

  return (
    <Styled.ModalWrapper>
      <Styled.ModalContent>
        <Styled.ModalHeader>
          <Styled.ModalTitle>Add to cart</Styled.ModalTitle>
          <Styled.ModalCloseButton onClick={onClose}>×</Styled.ModalCloseButton>
        </Styled.ModalHeader>
        <Styled.ModalBody>
          <Styled.ModalLabel htmlFor="quantity">Quantity</Styled.ModalLabel>
          <Styled.ModalInput
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
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
