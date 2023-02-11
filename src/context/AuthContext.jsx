import { createContext, useState, useMemo, useContext } from 'react';
import { Constants } from 'commons';
import { Storage } from 'utils';

const AuthContext = createContext(null);

export const useAuthState = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(
    !!Storage.getAuthToken({ name: Constants.AuthTokenName }),
  );

  const state = useMemo(() => ({ isAuthorized, setIsAuthorized }), [isAuthorized]);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
