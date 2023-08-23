import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ResetPassRequest() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleResetRequest = async () => {
        if (email.trim() === "") {
            setMessage("Check you input box. It cannot be empty.");
            return;
        }

        try {
            const response = await fetch('http://localhost:3500/auth/reset-password-request', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email }),
            });
            
            const data = await response.json();
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
