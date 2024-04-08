import React from 'react';
import TagsFilters from './TagsFilters';

const HeroSection = () => {
  return (
    <div className="hero-section bg-alabaster">
      <h1 className="mb-10 text-6xl font-pacifico text-burgundy-500">WeRemote!</h1>
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for jobs or companies..."
        />
      </div>
      <TagsFilters />
    </div>
  );
};

  

  export default HeroSection;