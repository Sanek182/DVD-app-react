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
import { LoginProvider } from './pages/login/LoginState';
import StockPage from './pages/stock/StockPage';
import SearchPage from './pages/stock/SearchPage';
import CartPage from './pages/cart/CartPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Router>
      <AuthProvider>
        <LoginProvider>
          <Header />
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <main>
            <Routes>
              <Route path="/auth/login" element={<MainPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/auth/logout" element={<Logout />} />
              <Route path="/movie/:id" element={<ProductPage />} />
              <Route path="/auth/register" element={<Registration />} />
              <Route path="/auth/reset-password-request" element={<ResetPassRequest />} />
              <Route path="/auth/reset-password/:token" element={<ResetPassPage />} />
              <Route path="/products" element={<StockPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </LoginProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
