import React, { createContext, useContext, useState, useEffect } from 'react';
import { checkAuth } from '../../api/authAPI';

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const data = await checkAuth();

        if (data.isAuthenticated) {
          setIsAuthenticated(true);
          setUsername(data.username);
        }
      } catch (error) {
        console.error("Error fetching auth status:", error);
      }
    };

    checkAuthStatus();
  }, []);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    username,
    setUsername,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
