import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faComments } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
  

function Footer() {
  return (
    <footer className="footer-container">
      <div className="contact-section">
      <a href="/contact">
          <FontAwesomeIcon icon={faComments} /> Contact Us
        </a>
        <a href="/faq">
          <FontAwesomeIcon icon={faCircleQuestion} /> FAQ
        </a>
      </div>
      <div className="social-media-section">
        <h3>Follow Us: </h3>
        <a href="link_to_facebook" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
        <a href="link_to_twitter" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faXTwitter} /> Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
