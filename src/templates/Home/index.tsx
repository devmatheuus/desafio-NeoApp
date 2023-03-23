import React from 'react';

import { ComicsBox } from '../../Components/ComicsBox';
import { ComicsContainer } from '../../Components/ComicsContainer';
import { Header } from '../../Components/Header';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ComicsBox />
      <ComicsContainer />
    </>
  );
};
