// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for jobs or companies..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;