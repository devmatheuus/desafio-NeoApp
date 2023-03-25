import React from 'react';

import { Button } from '../../Components/Button';
import { ComicsBox } from '../../Components/ComicsBox';
import { ComicsContainer } from '../../Components/ComicsContainer';
import { Footer } from '../../Components/Footer';
import { LoadingSpinner } from '../../Components/LoadingSpinner';
import { useComics } from '../../contexts/ComicsContext';
import * as Styled from './styles';

export const Home: React.FC = () => {
  const { loadMoreComics, isLoading, search } = useComics();

  return (
    <>
      <ComicsBox />
      <ComicsContainer />
      {!search && (
        <Styled.GenericContainer>
          {isLoading && <LoadingSpinner />}

          {!isLoading && (
            <Button text="Load more" loadMoreComics={loadMoreComics} />
          )}
        </Styled.GenericContainer>
      )}
      <Footer />
    </>
  );
};
