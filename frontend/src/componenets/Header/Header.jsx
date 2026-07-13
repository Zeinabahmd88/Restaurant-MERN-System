import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className="header">
      {/* Background Image */}
      <img src={assets.header_img} alt="Delicious food" className="header-img" />
      
      {/* Overlay Content */}
      <div className="header-contents">
        <h1>Food App</h1>
        <p>Discover the best dishes around you</p>
        <button >View Menu</button>
      </div>
    </div>
  );
};

export default Header;
