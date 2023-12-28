
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About</h2>
          <p>Rajshish Singh is a passionate developer dedicated to creating awesome web experiences.</p>
        </div>
        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>Email: rajshish333@example.com</p>
          <p>Phone: +910000000000</p>
        </div>
        <div className="footer-section social">
          <h2>Follow Me</h2>
          <ul className="social-links">
            <li><a href="https://github.com/rajshish" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/rajshish" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Rajshish Singh | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
