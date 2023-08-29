import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';
import ProductPage from './pages/product-page/ProductPage';
import Login from './pages/login/LoginPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import ResetPassPage from './pages/authentification/ResetPassPage';
import ResetPassRequest from './pages/authentification/ResetPassRequest';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3500/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      console.log(response);
      if (response.ok) {
        setIsAuthenticated(false);
        setUsername('');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
      }
    } catch (error) {
      console.error("Couldn't logout:", error);
    }
  };

  return (
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
  );
}

export default App;
