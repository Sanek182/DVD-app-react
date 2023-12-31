import React from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestResetUser } from '../../api/authAPI';
import { InputValidation } from "../../components/validation/InputValidation";

function ResetPassRequest() {
    const navigate = useNavigate();

    const onSubmit = async (data) => {
      try {
        const response = await requestResetUser(data.email);
        toast.success(response.message);
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      }
    };

    const fields = [
      {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        rules: { required: 'Email is required' }
      }
    ];

    return (
      <div className="reset-password-container">
        <button onClick={() => navigate("/")}>Close</button>
        <div className="reset-password-section">
          <h2>Enter your email address</h2>
          <InputValidation fields={fields} onSubmit={onSubmit} />
        </div>
      </div>
    );
};

export default ResetPassRequest;