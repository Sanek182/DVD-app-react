import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/api/checkAuth');
        const data = await response.json();

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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
