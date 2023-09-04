import React, { useState } from "react";
import Background from '../../components/container/Background';
import { registerUser } from '../../api/authAPI';
import { useNavigate } from 'react-router-dom'; 
import "./RegistrationPage.css";
import { isEmptyField, isValidEmail, isValidPassword, doPasswordsMatch } from '../../components/validation/inputValidation';

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const emptyFieldCheck = isEmptyField(username, email, password, repeatPassword);
    const emailValidation = isValidEmail(email);
    const passwordValidation = isValidPassword(password);
    const passwordMatchValidation = doPasswordsMatch(password, repeatPassword);

    if (!emptyFieldCheck.isValid) {
        setErrorMessage(emptyFieldCheck.errorMessage);
        return;
    }

    if (!emailValidation.isValid) {
        setErrorMessage(emailValidation.errorMessage);
        return;
    }

    if (!passwordValidation.isValid) {
        setErrorMessage(passwordValidation.errorMessage);
        return;
    }

    if (!passwordMatchValidation.isValid) {
        setErrorMessage(passwordMatchValidation.errorMessage);
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
