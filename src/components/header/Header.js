import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../authentication/AuthContext';

function Header() {
  const { isAuthenticated, username } = useAuth();

  return (
    <header className="header-container">
      <div className="logo-section">
        <img src="path/to/logo.png" alt="Logo" className="logo" />
        <h1>Site Title</h1>
      </div>
      <div className="navigation-section">
        <select className="dropdown-bar">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <Link to="/products" className="products-icon">Products</Link>
        <input type="search" className="search-window" placeholder="Search" />
        <Link to="/cart" className="cart-icon">Cart</Link>
        {isAuthenticated ? (
          <>
            <span>Welcome, {username}</span>
            <Link to="/logout">Log Out</Link>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
