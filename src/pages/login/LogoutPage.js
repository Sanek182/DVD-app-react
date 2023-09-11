import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../api/authAPI'
import { useAuth } from '../../components/authentication/authContext';

function Logout() {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUsername } = useAuth();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await logoutUser();
        if (response.success) {
          setIsAuthenticated(false);
          setUsername('');
          navigate('/');
        } else {
          console.error("Couldn't logout:", response.message);
        }
      } catch (error) {
          alert("An error occurred during logout. Please try again.");
        }
    };
    
    handleLogout();
  }, [navigate]);

  return null;
}
export default Logout;
