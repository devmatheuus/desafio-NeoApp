import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyles } from '../styles/globalStyles';
import { Checkout } from '../templates/Checkout';
import { Home } from '../templates/Home';

export const Router: React.FC = () => (
  <>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </>
);
