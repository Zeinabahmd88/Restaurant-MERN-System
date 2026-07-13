import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <>
      {/* Spacer added before the footer */}
      <div className="spacer"></div>

      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy nibh euismod tincidunt.</p>
            <div className="social-media-icons">
              <img src={assets.facebook} alt="" />
              <img src={assets.instagram} alt="" />
            </div>
          </div>
          
          <div className="footer-content-center">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Company</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-content-right">
            <h3>Get In Touch With Us</h3>
            <ul>
              <li><a href="#">Email: info@example.com</a></li>
              <li><a href="#">Phone: +1 123 456 7890</a></li>
              <li><a href="#">Address: 123 Main St, City, State, Zip</a></li>
            </ul>
          </div>
        </div>

        <p className="footer-copyright">
          © 2025 Food App. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
