import React, { useEffect } from 'react';

import { useComics } from '../../contexts/ComicsContext';
import { ComicCard } from '../ComicCard';
import * as Styled from './styles';

export const ComicsContainer: React.FC = () => {
  const { comics, loadComics } = useComics();

  useEffect(() => {
    loadComics();
  }, [loadComics]);

  return (
    <Styled.Container>
      {comics?.results?.map((comic) => {
        return <ComicCard key={comic.id} comicData={comic} />;
      })}
    </Styled.Container>
  );
};
