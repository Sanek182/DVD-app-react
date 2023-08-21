import React from 'react';
import './Header.css';

function Header() {
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
        <a href="/products" className="products-icon">Products</a>
        <input type="search" className="search-window" placeholder="Search" />
        <a href="/cart" className="cart-icon">Cart</a>
        <a href="/auth/login" className="login-button">Login</a>
      </div>
    </header>
  );
}

export default Header;
