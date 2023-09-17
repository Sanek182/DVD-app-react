import React from "react";
import { registerUser } from '../../api/authAPI';
import { useNavigate } from 'react-router-dom'; 
import { inputValidation } from "../../components/validation/inputValidation";
import toastr from "toastr";
import "./RegistrationPage.css";

function Registration() {
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
          const response = await registerUser(data.username, data.email, data.password);
          if (response.success) {
            toastr.success(response.message);
            navigate("/auth/login");
          } else {
            toastr.warning(response.message);
          }
        } catch (error) {
          toastr.error("An error occurred. Please try again later.");
        }
      };
      const password = watch("password");

      const fields = [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Username',
          rules: { required: 'Username is required' }
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email',
          rules: {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          }
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          rules: {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          }
        },
        {
          name: 'repeatPassword',
          type: 'password',
          placeholder: 'Repeat Password',
          rules: {
            validate: value => value === password || "The passwords do not match"
          }
        }
      ];

  return (
    <main>
        <div className="registration-container">
        <h2>Please register</h2>
        <inputValidation fields={fields} onSubmit={onSubmit} />
      </div>
    </main>
    );
};

export default Registration;
