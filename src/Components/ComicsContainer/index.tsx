import React, { useEffect } from 'react';

import { useComics } from '../../contexts/ComicsContext';
import { ComicCard } from '../ComicCard';
import * as Styled from './styles';

export const ComicsContainer: React.FC = () => {
  const { comics, filteredComics, loadComics, search } = useComics();

  useEffect(() => {
    loadComics();
  }, [loadComics]);

  return (
    <Styled.Container>
      {filteredComics.results?.length > 0 && search
        ? filteredComics.results.map((comic) => (
            <ComicCard key={comic.id} comicData={comic} />
          ))
        : comics?.results?.map((comic) => {
            return <ComicCard key={comic.id} comicData={comic} />;
          })}
    </Styled.Container>
  );
};
