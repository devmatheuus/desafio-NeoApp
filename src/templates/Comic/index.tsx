import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
import { useComics } from '../../contexts/ComicsContext';

export const Comic: React.FC = () => {
  const { comicId } = useParams<{ comicId: string }>();

  const { comic, loadOneComic } = useComics();

  useEffect(() => {
    if (comicId) {
      loadOneComic(comicId);
    }
  }, [comicId, loadOneComic]);

  console.log(comic.results);

  return (
    <>
      <Header />
      <div>Comic</div>
      <Footer />
    </>
  );
};
