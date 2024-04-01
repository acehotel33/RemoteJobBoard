// src/components/CategoryFilters.js
import React from 'react';

const categories = ["Fully Remote", "English OK", "Backend", "Hybrid", "Software Development"]; // Example categories

const CategoryFilters = () => {
  return (
    <div className="flex overflow-x-scroll my-4">
      {categories.map((category, index) => (
        <div key={index} className="first:ml-0 ml-4 px-4 py-2 border rounded-full">
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilters;
