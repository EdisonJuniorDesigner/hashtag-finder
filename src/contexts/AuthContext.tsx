import React, { createContext, useState, useEffect } from 'react';

import { useAuth } from 'hooks/useAuth';

type AuthContextData = {
  loading: boolean;
  authenticated: boolean;
  handleLogin: (email: string, password: string) => Promise<any>;
  handleLogout: () => void;
};

const DEFAULT_VALUE: AuthContextData = {
  loading: true,
  authenticated: false,
  handleLogin: (email: string, password: string) => Promise.resolve(),
  handleLogout: () => {}
}

export const AuthContext = createContext<AuthContextData>(DEFAULT_VALUE);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    authenticated, loading, handleLogin, handleLogout
  } = useAuth();

  return (
    <AuthContext.Provider value={{
      authenticated, loading, handleLogin, handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  );
}
