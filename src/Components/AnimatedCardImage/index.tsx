import React from 'react';

import * as Styled from './styles';

type ImageSize =
  | 'portrait_small'
  | 'portrait_medium'
  | 'portrait_xlarge'
  | 'portrait_fantastic'
  | 'portrait_uncanny'
  | 'portrait_incredible';

interface IAnimatedCardImage {
  thumbnail: {
    path: string;
    extension: string;
  };
  title: string;
  size?: ImageSize;
  height?: string;
}

export const AnimatedCardImage: React.FC<IAnimatedCardImage> = ({
  thumbnail,
  title,
  size = 'portrait_uncanny',
  height,
}: IAnimatedCardImage) => (
  <Styled.FigureContainer height={height}>
    <img
      src={`${thumbnail.path}/${size}.${thumbnail.extension}`}
      alt={title}
      title={title}
      loading="lazy"
    />
  </Styled.FigureContainer>
);
