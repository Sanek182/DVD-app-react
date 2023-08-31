import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useAuth } from './AuthContext';

import './Background.css';

function Background() {
  const { isAuthenticated, username } = useAuth();

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
