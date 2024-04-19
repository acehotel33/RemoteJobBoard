import React from 'react';
// import TagsFilters from './TagsFilters';
import Header from './Header';

const HeroSection = () => {
  return (
    <div>
      <div className="mt-10 pt-4 hero-section">
        {/* <div><Header /></div> */}
        <h1 className="mb-6  text-6xl font-poppins font-extra-bold text-accent-500">
          {/* <span className="italic">we</span>REMOTE<span className="italic">.ge</span> */}
          {/* <span className="italic">we</span>REMOTE.ge */}
          <span className="italic">we</span>REMOTE
          {/* we<span className="italic">REMOTE</span> */}
          {/* WeREMOTE */}
        </h1>
      
        {/* <div className="search-bar-wrapper">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for jobs or companies..."
          />
        </div> */}
        
      </div>
    </div>
  );
};

  

  export default HeroSection;