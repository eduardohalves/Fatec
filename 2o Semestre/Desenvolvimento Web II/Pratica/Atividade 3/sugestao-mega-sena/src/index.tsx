import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PalpiteProvider } from './context/PalpiteContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PalpiteProvider>
      <App />
    </PalpiteProvider>
  </React.StrictMode>
);
