import React from 'react';
import TagsFilters from './TagsFilters';
import Header from './Header';

const HeroSection = () => {
  return (
    <div className="mt-0 pt-4 hero-section bg-alabaster">
      <div><Header /></div>
      <h1 className="mb-10  text-6xl font-pacifico text-burgundy-500">WeRemote!</h1>
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