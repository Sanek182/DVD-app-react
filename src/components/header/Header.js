import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authentication/authContext';
import Login from '../../pages/login/LoginPage';
import { useLoginAvailable } from '../../pages/login/LoginState';
import { useForm } from 'react-hook-form';

function Header() {
  const { isAuthenticated, username } = useAuth();
  const { showLogin, setLoginBar } = useLoginAvailable();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSearch = async (data) => {
    navigate(`/search?query=${data.query}`);
  };

  useEffect(() => {
    console.log("showLogin value:", showLogin);
}, [showLogin]);

  return (
    <header className="header-container">
      <div className="logo-section">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>AlexDVD LLC</h1>
      </div>
      <div className="navigation-section">
        <select className="dropdown-bar">
          <option value="option1">Site Navigation</option>
          <option value="option2">Option 2</option>
        </select>
        <Link to="/products" className="products-icon">Products</Link>
        <form onSubmit={handleSubmit(onSearch)}>
          <input
            type="search"
            {...register("query")}
            className="search-window"
            placeholder="Search"
          />
          <button type="submit">Search</button>
        </form>        
        <Link to="/cart" className="cart-icon">Cart</Link>
        {isAuthenticated ? (
          <>
            <span>Welcome, {username}</span>
            <Link to="auth/logout">Log Out</Link>
          </>
        ) : (
          <>
            <button onClick={setLoginBar}>Log In</button>
            {showLogin && <Login />}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
