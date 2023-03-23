import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { Contexts } from './contexts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Contexts>
      <App />
    </Contexts>
  </React.StrictMode>
);
