import React, { createContext, useState, useMemo, useContext } from 'react';
import { Storage } from 'utils';

const TOKEN_NAME = 'access_token';

const AuthContext = createContext(null);

export const useAuthState = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!Storage.getAuthToken({ name: TOKEN_NAME }));

  const state = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
