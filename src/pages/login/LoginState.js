import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoginAvailable = createContext();

export function useLoginAvailable() {
    return useContext(LoginAvailable);
}

export function LoginProvider({ children }) {
    const [showLogin, setShowLogin] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/auth/login") {
            setShowLogin(true);
        } else {
            setShowLogin(false);
        }
    }, [location.pathname]);

    const setLoginBar = useCallback(() => {
        setShowLogin(true);
    }, []);

    const closeLoginBar = useCallback(() => {
        setShowLogin(false);
    }, []);

    return (
        <LoginAvailable.Provider value={{ showLogin, setLoginBar, closeLoginBar }}>
            {children}
        </LoginAvailable.Provider>
    );
}
