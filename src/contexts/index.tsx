import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import { CartProvider } from './CartContext';
import { ComicsProvider } from './ComicsContext';

interface IContexts {
  children: React.ReactNode;
}

export const Contexts = ({ children }: IContexts) => {
  return (
    <BrowserRouter>
      <ComicsProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CartProvider>
      </ComicsProvider>
    </BrowserRouter>
  );
};
