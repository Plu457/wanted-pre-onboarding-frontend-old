import React, { createContext, useState, useMemo, useContext } from 'react';
import { Constants } from 'commons';
import { Storage } from 'utils';

const AuthContext = createContext(null);

export const useAuthState = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!Storage.getAuthToken({ name: Constants.AuthTokenName }),
  );

  const state = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
