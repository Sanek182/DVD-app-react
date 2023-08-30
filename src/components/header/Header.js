import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../pages/authentification/authContext';

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
        {isAuthenticated ? <span>Welcome, {username}</span> : <span>Please log in</span>}

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
