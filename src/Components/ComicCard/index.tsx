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
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </Styled.CardContainer>
  );
};
