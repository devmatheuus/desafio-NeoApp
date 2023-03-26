import React, { useCallback } from 'react';

import { Button } from '../../Components/Button';
import { ComicsBox } from '../../Components/ComicsBox';
import { ComicsContainer } from '../../Components/ComicsContainer';
import { Footer } from '../../Components/Footer';
import { LoadingSpinner } from '../../Components/LoadingSpinner';
import { useComics } from '../../contexts/ComicsContext';
import * as Styled from './styles';

export const Home: React.FC = () => {
  const { loadComics, isLoading, search, setOffset } = useComics();

  const handleLoadComics = useCallback(() => {
    setOffset((offset) => offset + 40);
    loadComics();
  }, [loadComics, setOffset]);

  return (
    <>
      <ComicsBox />
      <ComicsContainer />
      {!search && (
        <Styled.GenericContainer>
          {isLoading && <LoadingSpinner />}

          {!isLoading && (
            <Button text="Load more" loadComics={handleLoadComics} />
          )}
        </Styled.GenericContainer>
      )}
      <Footer />
    </>
  );
};
