// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="my-8">
      <input
        type="text"
        className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-md transition duration-300 ease-in-out focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="Search for jobs or companies..."
        />
    </div>
  );
};

export default SearchBar;
