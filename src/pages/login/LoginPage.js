import React from "react";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authAPI';
import { useAuth } from "../../components/authentication/authContext";
import "./LoginPage.css";
import { useLoginAvailable } from "./LoginState";
import { inputValidation } from "../../components/validation/inputValidation";
import toastr from 'toastr';

function Login() {
    const { setIsAuthenticated, setUsername } = useAuth();
    const { showLogin, closeLoginBar } = useLoginAvailable();

    const navigate = useNavigate();

    const handleLogin = async (data) => {
        const { user, password } = data;

        try {
            const response = await loginUser(user, password);
            if (response.success) {
                toastr.success(response.message);
                setIsAuthenticated(true);
                setUsername(user);
                closeLoginBar();
            } else {
                toastr.warning(response.message);
            }
        } catch (error) {
            toastr.error("An error occurred. Please try again later.");
        }
    };

    const handleClose = () => {
        closeLoginBar();
    };

    console.log("Rendering Login component");

    const fields = [
        {
            name: 'user',
            type: 'text',
            placeholder: 'Username',
            rules: { required: 'Username is required' }
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            rules: { required: 'Password is required' }
        }
    ];

    return (
        <div className={showLogin ? "login-container active" : "login-container"}>
            <button onClick={handleClose}>Close</button>
            <div className="login-section">
                <h2>Please login</h2>
                <inputValidation fields={fields} onSubmit={handleLogin} />
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