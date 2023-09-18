import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/authentication/authContext';
import { logoutUser } from '../../api/authAPI';
import toastr from 'toastr';

function Logout() {
  const { setIsAuthenticated, setUsername } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response.success) {
          setIsAuthenticated(false);
          setUsername(null);
          console.log("Context reset done");
          toastr.success('Successfully logged out.');
          navigate('/');
      } else {
        console.log("Server-side logout failed", response);
        toastr.error('An error occurred while logging out.');
      }
    } catch (error) {
        console.log("Error during logout", error);
        toastr.error('An error occurred while logging out.');
    }
  };

  return (
    <div>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Yes, Log Me Out</button>
    </div>
  );
};

export default Logout;
