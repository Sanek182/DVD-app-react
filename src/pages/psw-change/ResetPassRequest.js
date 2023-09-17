import React from "react";
import { useNavigate } from 'react-router-dom';
import toastr from "toastr";
import { requestResetUser } from '../../api/authAPI';
import { inputValidation } from "../../components/validation/inputValidation";

function ResetPassRequest() {
    const navigate = useNavigate();

    const onSubmit = async (data) => {
      try {
        const response = await requestResetUser(data.email);
        toastr.success(response.message);
      } catch (error) {
        toastr.error("An error occurred. Please try again later.");
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
          <inputValidation fields={fields} onSubmit={onSubmit} />
        </div>
      </div>
    );
};

export default ResetPassRequest;