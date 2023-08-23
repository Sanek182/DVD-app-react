import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';
import ProductPage from './pages/product-page/ProductPage';
import LoginPage from './pages/login/LoginPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import ResetPassPage from './pages/authentification/ResetPassPage';
import ResetPassRequest from './pages/authentification/ResetPassRequest';
import Header from './components/header/Header';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} username={username} />
      <Routes>
        <Route path="/" element={<MainPage />} >
        <Route path="/auth/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
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
