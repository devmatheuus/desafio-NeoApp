import React from 'react';

import { IComic } from '../../types/IComicData';
import * as Styled from './styles';

interface IComicCard {
  comicData: IComic;
}

export const ComicCard: React.FC<IComicCard> = ({ comicData }: IComicCard) => {
  const { thumbnail, title } = comicData;

  return (
    <Styled.CardContainer>
      <figure>
        <img
          src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
          alt={title}
          title={title}
        />
      </figure>
      <p>{title}</p>
    </Styled.CardContainer>
  );
};
