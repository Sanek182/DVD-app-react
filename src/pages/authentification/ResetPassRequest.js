import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ResetPassRequest() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleResetRequest = async () => {
        if (email.trim() === "") {
            setMessage("Check you input box. It cannot be empty.");
            return;
        }

        // const response = await requestPasswordReset(email);
        const response = { success: true, message: "Reset link sent to your email." };

        if (response.success) {
            alert(response.message);
            navigate('/reset-password');
        } else {
            setMessage(response.message);
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
