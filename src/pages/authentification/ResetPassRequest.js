import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { requestResetUser } from '../../api/authAPI'

function ResetPassRequest() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleResetRequest = async () => {
        if (email.trim() === "") {
          setMessage("Check your input box. It cannot be empty.");
          return;
        }
      
        try {
          const data = await requestResetUser(email);
          setMessage(data.message);
        } catch (error) {
          setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="reset-password-container">
            <button onClick={() => navigate('/')}>Close</button>
            <div className="reset-password-section">
                <h2>Enter your email address</h2>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <button onClick={handleResetRequest}>Send reset link</button>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}

export default ResetPassRequest;
