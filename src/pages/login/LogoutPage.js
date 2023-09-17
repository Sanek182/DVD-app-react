import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/authentication/authContext';
import toastr from 'toastr';

function Logout() {
  const { setIsAuthenticated, setUsername } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
        setIsAuthenticated(false);
        setUsername(null);
        toastr.success('Successfully logged out.');
        navigate('/');
    } catch (error) {
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
