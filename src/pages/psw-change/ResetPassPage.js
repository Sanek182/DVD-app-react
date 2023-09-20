import React from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetUser } from '../../api/authAPI';
import { InputValidation } from "../../components/validation/InputValidation";

function ResetPassPage() {
  const { token } = useParams();
  const decodedToken = decodeURIComponent(token);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await resetUser(decodedToken, data.password);
      if (response.success) {
        toast.success("Password has been successfully reset!");
        navigate("/auth/login");
      } else {
        toast.warning(response.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  const fields = [
    {
      name: 'password',
      type: 'password',
      placeholder: 'New Password',
      rules: { required: 'New Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } }
    },
    {
      name: 'repeatPassword',
      type: 'password',
      placeholder: 'Repeat Password',
    }
  ];

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <InputValidation fields={fields} onSubmit={onSubmit} />
    </div>
  );
}

export default ResetPassPage;
