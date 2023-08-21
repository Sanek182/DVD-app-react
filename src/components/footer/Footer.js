import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="contact-section">
        <a href="/contact">Contact Us</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="social-media-section">
        <h3>Follow Us</h3>
        <a href="link_to_facebook" target="_blank" rel="noreferrer">Facebook</a>
        <a href="link_to_twitter" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
