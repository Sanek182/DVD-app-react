import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ isAuthenticated, username, handleLogout }) {
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
          <div>
            <div className="user-greeting">Hello, {username}</div>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>
        ) : (
          <Link to="/auth/login" className="login-button">Login</Link>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  username: PropTypes.string,
  handleLogout: PropTypes.func,
};

export default Header;
