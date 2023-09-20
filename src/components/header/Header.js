import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authentication/authContext';
import Login from '../../pages/login/LoginPage';
import { useLoginAvailable } from '../../pages/login/LoginState';
import { useForm } from 'react-hook-form';
import './Header.css';

function Header() {
  const { isAuthenticated, username } = useAuth();
  const { showLogin, setLoginBar } = useLoginAvailable();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [spin, setSpin] = useState(false);

  const onSearch = async (data) => {
    navigate(`/search?query=${data.query}`);
  };

  useEffect(() => {
    console.log("showLogin value:", showLogin);
}, [showLogin]);

  useEffect(() => {
    setSpin(true);
    const timer = setTimeout(() => setSpin(false), 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header-container">
      <div className="logo-section">
        <Link to="/">
        <img 
          src="/logos/image1.png" 
          alt="Site Logo" 
          className={`site-logo ${spin ? 'spin' : ''}`}
        />
        </Link>
        <h3>AlexDVD LLC</h3>
      </div>
      <div className="navigation-section">
        <select className="dropdown-bar">
          <option value="option1">Site Navigation</option>
          <option value="option2">Option 2</option>
        </select>
        <Link to="/products" className="nav-button">Products</Link>
        <form onSubmit={handleSubmit(onSearch)}>
          <input
            type="search"
            {...register("query")}
            className="search-window"
            placeholder="Search"
          />
          <button type="submit">Search</button>
        </form>        
        <Link to="/cart" className="nav-button">
          Cart <i className="fas fa-shopping-cart"></i>
        </Link>
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
