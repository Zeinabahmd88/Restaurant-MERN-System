import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';  // Import assets

const AppDownload = () => {
  return (
    <div className='app-download' id="app-download">
     
      <p className="app-download-text">For Better Experience Download<br />Tamto App</p>
      <div className="app-download-platforms">
        {/* Google Play Button from Online URL */}
        <a href="#">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" 
            alt="Google Play" 
            className="app-download-btn"
          />
        </a>

        {/* Apple Store Button from Local Assets */}
        <a href="#">
          <img 
            src={assets.apple} 
            alt="App Store" 
            className="app-download-btn"
          />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
