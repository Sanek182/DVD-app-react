import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authAPI';

import "./LoginPage.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser(username, password);
      if (response.success) {
        navigate('/');
      } else {
        setErrorMessage(response.error || "Login failed");
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
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="registration-links">
          <p>Do not have an account on our site yet?</p>
          <button onClick={() => navigate('/auth/registration')}>Registration</button>
          <button onClick={() => {/* ... */}}>Forgot password?</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

