import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./LoginPage.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <button onClick={() => navigate('/')}>Close</button>
      <div className="login-section">
        <h2>Please login</h2>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
