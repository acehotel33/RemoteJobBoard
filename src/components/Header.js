// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="sticky top-0 flex justify-between items-center py-2 px-8 mx-16 bg-transparent z-10">
      <Link to="/" className="text-accent-500 hover:underline">WeRemote.ge</Link>
      <Link to="/submit-job" className="text-accent-500 hover:underline">Post Your Job</Link>
    </header>
  );
};

export default Header;

