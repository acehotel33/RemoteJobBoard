// src/components/TagsFilters.js
import React from 'react';

const tags = ["Copywriting", "Agile", "SEO", "Risk Assessment", "Scrum", "Team Leadership", "Budget Management"];

const TagsFilters = ({ selectedTags, setSelectedTags }) => {

  const toggleTag = (tag) => {
    if (selectedTags && selectedTags.includes(tag)) {
      const newTags = selectedTags.filter(t => t !== tag);
      setSelectedTags(newTags);
    } else {
      const newTags = selectedTags ? [...selectedTags, tag] : [tag];
      setSelectedTags(newTags);
    }
  };

  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"> 
        {tags.map((tag, index) => (
          <div key={index}
            className={`px-4 py-2 border cursor-pointer border-gray-200 rounded-full shadow-sm text-sm ${selectedTags.includes(tag) ? 'bg-burgundy-500 text-white hover:bg-burgundy-600' : 'bg-white text-burgundy-500 hover:bg-gray-50 hover:text-burgundy-600'}`}
               onClick={() => toggleTag(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsFilters;
