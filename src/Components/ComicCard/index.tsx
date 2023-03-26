import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../contexts/CartContext';
import { IComic } from '../../types/IComicData';
import { AnimatedCardImage } from '../AnimatedCardImage';
import { Button } from '../Button';
import { AddToCartModal } from '../Modals/AddToCart';
import * as Styled from './styles';

interface IComicCard {
  comicData: IComic;
}

export const ComicCard: React.FC<IComicCard> = ({ comicData }: IComicCard) => {
  const { thumbnail, title, id } = comicData;
  const [showModal, setShowModal] = useState(false);

  const { addToCart } = useCart();

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/comic/${id}`);
  }, [navigate, id]);

  return (
    <>
      {showModal && (
        <AddToCartModal comic={comicData} onClose={() => setShowModal(false)} />
      )}
      {!showModal && (
        <Styled.ExternalContainer>
          <Styled.CardContainer onClick={handleClick} role="button">
            <AnimatedCardImage thumbnail={thumbnail} title={title} />
            <p>{title}</p>
          </Styled.CardContainer>
          <Button text="Add to cart" onClick={() => setShowModal(true)} />
        </Styled.ExternalContainer>
      )}
    </>
  );
};
