// src/components/SortFilters.js
import React from 'react';

const SortFilters = () => {



  return (
    <div className >
      <div className="flex flex-wrap gap-2 max-w-4xl mb-6 mt-0 mx-auto sm:px-6 lg:px-8"> 
      
        <select id="remoteType" name="remoteType" className="px-4 py-2 border rounded-full shadow-md text-sl bg-white text-gray-700 font-semibold hover:bg-gray-50">
            <option value="Fully">Fully Remote</option>
            <option value="Partly">Partly Remote</option>
        </select>

        <select id="jobType" name="jobType" className="px-4 py-2 border rounded-full shadow-md text-sl bg-white text-gray-700 font-semibold hover:bg-gray-50">
            <option value="Full">Full-Time</option>
            <option value="Part">Part-Time</option>
            <option value="Part">Contract</option>
        </select>

        <div id="englishOK" name="englishOK" className="px-4  py-2 border rounded-full shadow-md text-sl bg-white text-gray-700 font-semibold hover:bg-gray-50">
            
          <label htmlFor="englishOK" className="form-label text-gray-700">
            English OK?
          </label>
          {/* <input type="checkbox" id="englishOK" name="englishOK" className="form-checkbox" /> */}
        </div>
          
      </div>
    </div>
  );
};


export default SortFilters;
