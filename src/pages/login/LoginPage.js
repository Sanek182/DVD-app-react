import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authAPI';
import { isEmptyField } from '../../components/validation/inputValidation';
import { useAuth } from "../../components/authentication/authContext";
import "./LoginPage.css";
import { useLoginAvailable } from "./LoginState";

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { setIsAuthenticated, setUsername } = useAuth();
    const { closeLoginBar } = useLoginAvailable();

    const navigate = useNavigate();

    const handleLogin = async () => {
        const emptyFieldCheck = isEmptyField(user, password);

        if (!emptyFieldCheck.isValid) {
            setErrorMessage(emptyFieldCheck.errorMessage);
            return;
        }

        try {
            const response = await loginUser(user, password);
            if (response.success) {
                alert(response.message);
                setIsAuthenticated(true);
                setUsername(user);
                navigate('/');
                closeLoginBar();
            } else {
            setErrorMessage(response.message);
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    const handleClose = () => {
        closeLoginBar();
        navigate(-1);
    };

    return (
        <div className="login-section.active">
            <button onClick={handleClose}>Close</button>
            <div className="login-section">
                <h2>Please login</h2>
                <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="registration-links">
                <p>Do not have an account on our site yet?</p>
                <button onClick={() => navigate('/auth/register')}>Registration</button>
                <button onClick={() => navigate('/auth/reset-password-request')}>Forgot password?</button>
                </div>
            </div>
        </div>
    );
};

export default Login;

