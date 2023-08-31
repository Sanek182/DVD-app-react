import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';
import ProductPage from './pages/product-page/ProductPage';
import Login from './pages/login/LoginPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import ResetPassPage from './pages/authentification/ResetPassPage';
import ResetPassRequest from './pages/authentification/ResetPassRequest';
import { logoutUser } from './api/authAPI';
import { AuthProvider } from './pages/authentification/authContext';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const checkAuthStatus = async () => {
      const response = await fetch('/api/checkAuth');
      const data = await response.json();

      if (data.isAuthenticated) {
        setIsAuthenticated(true);
        setUsername(data.username);
      }
    };

    checkAuthStatus();
  }, []);
  
  const handleLogout = async () => {
    const response = await logoutUser();
    if (response.success) {
      setIsAuthenticated(false);
      setUsername('');
    } else {
      console.error("Couldn't logout:", response.message);
    }
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage isAuthenticated={isAuthenticated} username={username} handleLogout={handleLogout} />} >
            <Route path="/auth/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
          </Route>
          <Route path="/movie/:id" element={<ProductPage />} />
          <Route path="/auth/registration" element={<RegistrationPage />} />
          <Route path="/auth/reset-password-request" element={<ResetPassRequest />} />
          <Route path="/auth/reset-password/:token" element={<ResetPassPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
