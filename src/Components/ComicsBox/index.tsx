import React, { useState } from 'react';

import hero from '../../assets/characters/hero.jpg';
import heros from '../../assets/characters/heros.jpg';
import x23 from '../../assets/characters/x23.svg';
import xmen from '../../assets/characters/xmen.jpg';
import * as Styled from './styles';

export const ComicsBox: React.FC = () => {
  const images = React.useMemo(() => [hero, heros, xmen, x23], []);

  const [image, setImage] = useState(images[0]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setImage((prevImage) => {
        const nextImageIndex = (images.indexOf(prevImage) + 1) % images.length;
        return images[nextImageIndex];
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return <Styled.Slider background={image} />;
};
