// src/components/TagsFilters.js
import React from 'react';

const tags = ["Fully Remote", "English OK", "Backend", "Hybrid", "Software Development"]; // Example categories

const TagsFilters = () => {
  return (
    <div className="flex overflow-x-scroll my-4">
      {tags.map((tag, index) => (
        <div key={index} className="first:ml-0 ml-4 px-4 py-2 border rounded-full">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagsFilters;
