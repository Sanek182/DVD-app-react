import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';
import ProductPage from './pages/product-page/ProductPage';
import Login from './pages/login/LoginPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import ResetPassPage from './pages/authentification/ResetPassPage';
import ResetPassRequest from './pages/authentification/ResetPassRequest';
import { AuthProvider } from '../../pages/authentification/AuthContext';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} >
            <Route path="/auth/login" element={<Login />} />
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
