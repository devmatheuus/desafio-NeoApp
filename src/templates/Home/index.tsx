import React from 'react';

import { ComicsBox } from '../../Components/ComicsBox';
import { ComicsContainer } from '../../Components/ComicsContainer';
import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ComicsBox />
      <ComicsContainer />
      <Footer />
    </>
  );
};
