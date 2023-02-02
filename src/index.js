import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'Router';
import { AuthProvider } from 'context/LoginContext';

import 'styles/global.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
