import React from 'react';

import { Header } from './Components/Header';
import { Router } from './routes';

export const App: React.FC = () => (
  <>
    <Header />
    <Router />
  </>
);
