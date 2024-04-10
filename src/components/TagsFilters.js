// src/components/TagsFilters.js
import React from 'react';

const tags = ["Fully Remote", "Backend", "Hybrid", "Software Development"]; // Example categories

const TagsFilters = () => {
  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"> 
        {tags.map((tag, index) => (
          <div key={index} className="px-4 py-2 border border-gray-200 rounded-full shadow-sm text-sm bg-white text-burgundy-500 hover:bg-gray-50">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};


export default TagsFilters;
