import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyles } from '../styles/globalStyles';
import { Checkout } from '../templates/Checkout';
import { Comic } from '../templates/Comic';
import { Home } from '../templates/Home';

export const Router: React.FC = () => (
  <>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comic/:comicId" element={<Comic />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </>
);
