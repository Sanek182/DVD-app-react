import React, { useState } from "react";
import Background from '../../components/static/Background';
import { registerUser } from '../../api/authAPI';
import { useNavigate } from 'react-router-dom'; 
import "./RegistrationPage.css";

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (username.trim() === "" || email.trimEnd() === "" || password.trim() === "" || repeatPassword.trim() === "") {
        setErrorMessage("Please fill in all the required fields.");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        setErrorMessage("Please enter a valid email address.");
        return;
    }

    const passPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{5,15}$/;
    if (!passPattern.test(password)) {
        setErrorMessage("Password must be between 5 and 15 characters, contain at least one letter, one number, and one symbol.");
        return;
    }

    if (password !== repeatPassword) {
        setErrorMessage("Passwords do not match!");
        return;
    }
    try {
        const response = await registerUser(username, email, password);
        if (response.success) {
            alert(response.message);
            navigate('/auth/login');
        } else {
            setErrorMessage(response.message);
        }
    } catch (error) {
        setErrorMessage("An error occurred. Please try again later.");
    }       
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        </div>
    </Background>
  );
}

export default Registration;
