import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { IComic } from '../../types/IComicData';
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
    <Styled.CardContainer onClick={handleClick}>
      <figure>
        <img
          src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
          alt={title}
          title={title}
          loading="lazy"
        />
      </figure>
      <p>{title}</p>
    </Styled.CardContainer>
  );
};
