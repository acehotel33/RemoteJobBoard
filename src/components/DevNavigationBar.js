// src/components/DevNavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const DevNavigationBar = () => {
  // Add more page links as needed
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Job Page', path: '/job-page' },
    
    // ... any other pages you have
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t">
      <div className="flex justify-center space-x-4 p-2">
        {pages.map((page, index) => (
          <Link key={index} to={page.path} className="text-blue-500 hover:text-blue-700">
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DevNavigationBar;
