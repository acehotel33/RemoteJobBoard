import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-burgundy text-white text-center p-16">
      <h1 className="text-4xl mb-4">Find Your Dream Job</h1>
      {/* Replace this div with actual SearchBar component */}
      <div className="inline-block w-full md:w-1/2">
        <input
          type="text"
          className="p-2 w-full"
          placeholder="Search for jobs or companies..."
        />
      </div>
    </div>
  );
};

  export default HeroSection;