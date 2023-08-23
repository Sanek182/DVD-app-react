import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import './Background.css';

function Background({ children, isAuthenticated, username, handleLogout }) {

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} username={username} handleLogout = {handleLogout} />
      <div className="background-container">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Background;
