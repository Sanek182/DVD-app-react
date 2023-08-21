import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';
import ProductPage from './pages/product-page/ProductPage';
import LoginPage from './pages/login/LoginPage';
import RegistrationPage from './pages/registration/RegistrationPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} >
          <Route path="/auth/login" element={<LoginPage />} />
        </Route>
        <Route path="/auth/registration" element={<RegistrationPage />} />
        <Route path="/movie/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
