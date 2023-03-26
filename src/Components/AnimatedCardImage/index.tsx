import React from 'react';

import * as Styled from './styles';

interface IAnimatedCardImage {
  thumbnail: {
    path: string;
    extension: string;
  };
  title: string;
}

export const AnimatedCardImage: React.FC<IAnimatedCardImage> = ({
  thumbnail,
  title,
}: IAnimatedCardImage) => (
  <Styled.FigureContainer>
    <img
      src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
      alt={title}
      title={title}
      loading="lazy"
    />
  </Styled.FigureContainer>
);
