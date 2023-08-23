import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authAPI';

import "./LoginPage.css";

function Login({ setIsAuthenticated, setUsername }) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (user.trim() === "" || password.trim() === "") {
            setErrorMessage("Please enter all the required fields.");
            return;
        }

        try {
            const response = await loginUser(user, password);
            if (response.success) {
                alert(response.message);
                setIsAuthenticated(true);
                setUsername(user);
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('username', user);
                navigate('/');
            } else {
            setErrorMessage(response.message);
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="login-container">
            <button onClick={() => navigate('/')}>Close</button>
            <div className="login-section">
                <h2>Please login</h2>
                <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="registration-links">
                <p>Do not have an account on our site yet?</p>
                <button onClick={() => navigate('/auth/registration')}>Registration</button>
                <button onClick={() => navigate('/auth/reset-password-request')}>Forgot password?</button>
                </div>
            </div>
        </div>
    );
}

export default Login;

