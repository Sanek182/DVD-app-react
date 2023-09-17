import React from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toastr from "toastr";
import { resetUser } from '../../api/authAPI';
import { inputValidation } from "../../components/validation/inputValidation";

function ResetPassPage() {
  const { token } = useParams();
  const decodedToken = decodeURIComponent(token);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await resetUser(decodedToken, data.password);
      if (response.success) {
        toastr.success("Password has been successfully reset!");
        navigate("/auth/login");
      } else {
        toastr.warning(response.message);
      }
    } catch (error) {
      toastr.error("An error occurred. Please try again later.");
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
      rules: {
        validate: value => value === data.password || "The passwords do not match"
      }
    }
  ];

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <ReusableForm fields={fields} onSubmit={onSubmit} />
    </div>
  );
}

export default ResetPassPage;
