import React, { createContext, useReducer, useEffect, useState } from 'react';
import t from 'prop-types';

import authReducer from './reducer';
import authMiddleware from './middleware';
import INITIAL_STATE from './INITIAL_STATE';
import { store, getStoredState } from './store';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [rehydrated, setRehydrated] = useState(false);
  const [state, dispatch] = useReducer(
    authReducer,
    INITIAL_STATE,
    getStoredState
  );

  useEffect(() => {
    store(state);
    setRehydrated(true);
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch: authMiddleware(dispatch) }}>
      {rehydrated ? children : null}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: t.node.isRequired,
};
