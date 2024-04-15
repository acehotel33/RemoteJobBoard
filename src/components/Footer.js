// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-accent-500 text-white text-center p-4 mt-8">
      <div className="max-w-6xl mx-auto flex justify-center">
        {/* Left-aligned items */}
        <div>
          <a href="/" className="footer-link">WeRemote.ge</a>
          {/* Add additional links or content here */}
        </div>
        {/* Right-aligned items */}
        {/* <div>
          <a href="/about" className="footer-link">About Us</a>
          
        </div> */}
      </div>
      {/* Center-aligned items */}
      <div className="mt-4">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
