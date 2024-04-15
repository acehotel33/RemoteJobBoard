// src/components/SortFilters.js
import React from 'react';

const SortFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [name]: type === 'checkbox' ? checked : value,
      };
      console.log(updatedFilters); // Log the updated filters
      return updatedFilters;
    });
  };

  return (
    <div className>
      <div className="flex flex-wrap gap-3 max-w-4xl mb-6 mt-0 mx-auto sm:px-6 lg:px-8 font-semibold"> 
        <select 
          id="remoteType" 
          name="remoteType" 
          className="px-4 border rounded-full cursor-pointer shadow-md text-sm bg-white hover:bg-gray-50"
          onChange={handleChange}
          value={filters.remoteType}
          >
          <option value="">Remote Type</option>
          <option value="Fully Remote">Fully Remote</option>
          <option value="Partly Remote">Partly Remote</option>
        </select>

        <select 
          id="jobType" 
          name="jobType" 
          className="px-4 border rounded-full cursor-pointer shadow-md text-sm bg-white  hover:bg-gray-50"
          onChange={handleChange}
          value={filters.jobType}
          >
            <option value="">Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
        </select>

        <div className="px-4 border rounded-full cursor-pointer shadow-md text-sm bg-white  hover:bg-gray-50 flex items-center">
          <label htmlFor="englishOK" className="form-label cursor-pointer text-gray-700 mr-2 mt-2">
            English OK
          </label>
          <input
            type="checkbox" 
            id="englishOK" 
            name="englishOK" 
            className="form-checkbox" 
            onChange={handleChange}
            checked={filters.englishOK}        
          />
        </div>
          
      </div>
    </div>
  );
};

export default SortFilters;
