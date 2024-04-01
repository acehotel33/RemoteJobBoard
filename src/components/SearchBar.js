// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="my-8">
      <input
        type="text"
        placeholder="Search for jobs or companies..."
        className="w-full p-4 border rounded-md"
      />
    </div>
  );
};

export default SearchBar;
