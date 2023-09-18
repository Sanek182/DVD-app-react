import React from "react";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authAPI';
import { useAuth } from "../../components/authentication/authContext";
import { useLoginAvailable } from "./LoginState";
import { InputValidation } from "../../components/validation/InputValidation";
import toastr from 'toastr';
import "./LoginPage.css";

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
            placeholder: 'USERNAME',
            rules: { required: 'Username is required' }
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'PASSWORD',
            rules: { required: 'Password is required' }
        }
    ];

    return (
        <div className={showLogin ? "login-container active" : "login-container"}>
            <button onClick={handleClose}>Close</button>
            <div className="login-section">
                <h2>PLEASE LOG IN</h2>
                <InputValidation fields={fields} onSubmit={handleLogin} />
                <div className="registration-links">
                    <p><i>Forgot your password?</i></p>
                    <button onClick={() => navigate('/auth/reset-password-request')}>Reset Password</button>
                    <p><i>Do not have an account on our site yet?</i></p>
                    <button onClick={() => navigate('/auth/register')}>Register Me</button>
                </div>
            </div>
        </div>
    );
};

export default Login;