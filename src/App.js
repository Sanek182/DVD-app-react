import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';
import ProductPage from './pages/product-page/ProductPage';
import Registration from './pages/registration/RegistrationPage';
import ResetPassPage from './pages/psw-change/ResetPassPage';
import ResetPassRequest from './pages/psw-change/ResetPassRequest';
import { AuthProvider } from './components/authentication/authContext';
import Logout from './pages/login/LogoutPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage showLogin={showLogin} setShowLogin={setShowLogin} />} />
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/movie/:id" element={<ProductPage />} />
            <Route path="/auth/register" element={<Registration />} />
            <Route path="/auth/reset-password-request" element={<ResetPassRequest />} />
            <Route path="/auth/reset-password/:token" element={<ResetPassPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
