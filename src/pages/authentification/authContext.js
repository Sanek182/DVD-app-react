import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch user authentication status from server
    // You should replace this with your actual fetch function
    const fetchAuthStatus = async () => {
      const res = await fetch('/api/checkAuth');
      const data = await res.json();

      if (data.isAuthenticated) {
        setIsAuthenticated(true);
        setUsername(data.username);
      }
    };

    fetchAuthStatus();
  }, []);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    username,
    setUsername,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
