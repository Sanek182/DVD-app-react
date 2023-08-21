import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Background.css';

function Background({ children }) {
  return (
    <div>
      <Header />
      <div className="background-container">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Background;
