// src/components/Header.js
import React from 'react';

const Header = () => {
  return (

    <header className="text-burgundy-500 text-center">
        <div className="max-w-7xl mx-auto flex justify-between">
            {/* Left-aligned items */}
            <div>
                    <a href="/" className="header-link hover:underline">weremote.ge</a>
                      {/* Add additional links or content here */}
                  </div>

              {/* Right-aligned items */}
              <div>
                  <a href="/submit-job" className="header-link hover:underline">Post a Job</a>
                  {/* Add additional links or content here */}
              </div>
          </div>
    </header>
  );
};

export default Header;
