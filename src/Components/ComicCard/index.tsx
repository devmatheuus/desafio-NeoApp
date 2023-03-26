import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { IComic } from '../../types/IComicData';
import { AnimatedCardImage } from '../AnimatedCardImage';
import * as Styled from './styles';

interface IComicCard {
  comicData: IComic;
}

export const ComicCard: React.FC<IComicCard> = ({ comicData }: IComicCard) => {
  const { thumbnail, title, id } = comicData;

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/comic/${id}`);
  }, [navigate, id]);

  return (
    <Styled.CardContainer onClick={handleClick} role="button">
      <AnimatedCardImage thumbnail={thumbnail} title={title} />
      <p>{title}</p>
    </Styled.CardContainer>
  );
};
