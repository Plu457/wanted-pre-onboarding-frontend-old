import { createContext, useState, useMemo, useContext } from 'react';
import { Constants } from 'commons';
import { Storage } from 'utils';

const AuthContext = createContext(null);

export const useAuthState = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const token = Storage.getAuthToken({ name: Constants.AuthTokenName });
  const isValidToken = !['undefined', null, ''].includes(token);

  const [isLoggedIn, setIsLoggedIn] = useState(isValidToken);

  const state = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
