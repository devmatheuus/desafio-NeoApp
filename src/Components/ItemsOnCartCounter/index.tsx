import React, { useCallback } from 'react';

import { useCart } from '../../contexts/CartContext';
import * as Styled from './styles';

interface IItemsOnCartCounter {
  quantity: number;
  comicId: number;
  //   subtractQuantity: (quantity: number) => void;
}

export const ItemsOnCartCounter: React.FC<IItemsOnCartCounter> = ({
  comicId,
  quantity,
}: IItemsOnCartCounter) => {
  const { editComicQuantity } = useCart();

  const subtractQuantity = useCallback(() => {
    if (quantity > 1) {
      editComicQuantity(comicId, quantity - 1);
    }
  }, [quantity, comicId, editComicQuantity]);

  const addQuantity = useCallback(() => {
    editComicQuantity(comicId, quantity + 1);
  }, [comicId, quantity, editComicQuantity]);

  return (
    <Styled.CounterContainer title="Manipulate quantity of items">
      <button
        onClick={subtractQuantity}
        title="Remove one item"
        disabled={quantity <= 1}
      >
        -
      </button>
      <span>{quantity}</span>
      <button onClick={addQuantity} title="Add one item">
        +
      </button>
    </Styled.CounterContainer>
  );
};
