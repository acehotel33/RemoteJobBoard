// src/components/TagsFilters.js
import React from 'react';

const tags = ["Fully Remote", "English OK", "Backend", "Hybrid", "Software Development", "Backend", "Hybrid", "Software Development","Backend", "Hybrid", "Software Development","Backend", "Hybrid", "Software Development"]; // Example categories

const TagsFilters = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"> 
        {tags.map((tag, index) => (
          <div key={index} className="px-4 py-2 border rounded-full text-sm bg-white text-burgundy font-semibold hover:bg-gray-300 cursor-pointer">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsFilters;
