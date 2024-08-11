import React, { useState } from 'react';
import './Privacy.css';

function Privacy () {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    
    localStorage.setItem('cookiesAccepted', 'true');
  };

  return (
    isVisible && (
      <div className="privacy-popup">
        <div className="privacy-popup-content">
          <p>We use cookies to ensure you get the best experience on our website. By continuing to browse, you consent to our use of cookies.</p>
          <button onClick={handleAccept}>Accept</button>
        </div>
      </div>
    )
  );
}

export default Privacy;