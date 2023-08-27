import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../../api/authAPI'

function ResetPassPage() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { token } = useParams();
  const decodedToken = decodeURIComponent(token);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (password.trim() === "") {
        setErrorMessage("Please enter a new password.");
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
      const response = await resetUser(decodedToken, password);

      if (response.success) {
        alert("Password has been successfully reset!");
        navigate('/auth/login');
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } 
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <input type="password" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Repeat Password" onChange={(e) => setRepeatPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default ResetPassPage;
