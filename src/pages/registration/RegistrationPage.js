import React, { useState } from "react";
import Background from '../../components/static/Background';
import "./RegistrationPage.css";

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = () => {
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Register the user in your MySQL database
    // Redirect to main page or show "Continue Exploring" button
  };

  return (
    <Background>
        <div className="registration-container">
        <h2>Please register</h2>
        <div className="registration-form">
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Repeat Password" onChange={(e) => setRepeatPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    </Background>
  );
}

export default Registration;
