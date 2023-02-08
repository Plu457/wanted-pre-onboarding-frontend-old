import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { AuthContextProvider } from 'context/AuthContext';
import { TodoListContextProvider } from 'context/TodoContext';
import Router from 'Router';
import 'styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TodoListContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TodoListContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
