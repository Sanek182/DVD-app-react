import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../../api/authAPI';
import { isEmptyField, isValidPassword, doPasswordsMatch } from '../../components/validation/inputValidation';

function ResetPassPage() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { token } = useParams();
  const decodedToken = decodeURIComponent(token);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const emptyFieldCheck = isEmptyField(username, email, password, repeatPassword);
    const passwordValidation = isValidPassword(password);
    const passwordMatchValidation = doPasswordsMatch(password, repeatPassword);

    if (!emptyFieldCheck.isValid) {
      setErrorMessage(emptyFieldCheck.errorMessage);
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
