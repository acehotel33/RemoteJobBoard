import React from 'react';
import TagsFilters from './TagsFilters';

const HeroSection = () => {
    return (
      <div className="hero-section">
        <h1 className="text-burgundy mb-10">
        <span className="text-6xl font-pacifico">WeRemote!</span>
          {/* <span className="text-4xl font-inter"> and so should you!</span> */}
        </h1>
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