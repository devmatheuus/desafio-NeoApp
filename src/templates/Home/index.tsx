import React from 'react';

import { ComicsContainer } from '../../Components/ComicsContainer';
import { Header } from '../../Components/Header';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ComicsContainer />
    </>
  );
};
