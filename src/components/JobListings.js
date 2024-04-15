// src/components/JobListings.js

import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import SortFilters from './SortFilters';
import TagsFilters from './TagsFilters';

const JobListings = ({ onJobSelect }) => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    remoteType: '',
    jobType: '',
    englishOK: false,
  });
  const [selectedTags, setSelectedTags] = useState([]);


  useEffect(() => {
    const fetchJobPostings = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/jobs');
            const data = await response.json();
            setJobs(data);
          } catch (error) {
            console.error("Error fetching job postings:", error);
          }
    };

    fetchJobPostings();
  }, []);

  const formatSalaryRange = (min, max) => `$${min.toLocaleString()} - $${max.toLocaleString()}`;

  const filteredJobs = jobs.filter((job) => {
    const matchesRemoteType = filters.remoteType ? job.remoteType === filters.remoteType : true;
    const matchesJobType = filters.jobType ? job.jobType === filters.jobType : true;
    const matchesEnglishOK = filters.englishOK ? job.englishOK === filters.englishOK : true;
    const matchesTags = selectedTags.length === 0 || (Array.isArray(job.descriptors) && selectedTags.every(tag => job.descriptors.includes(tag)));
    
    return matchesRemoteType && matchesJobType && matchesEnglishOK && matchesTags;
  });
  
  

  return (
    <div>
      <TagsFilters selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <SortFilters filters={filters} setFilters={setFilters} />
      <div className="my-2 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 ">
        {filteredJobs.map((job) => (
          <div 
            key={job._id} 
            className="bg-white shadow-lg rounded-lg px-6 py-4 border border-gray-200 hover:bg-gray-50 cursor-pointer mb-6 flex justify-between items-center"
            onClick={() => onJobSelect(job)}
          >
            <div>
              <h3 className="text-lg font-bold">{job.role}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500">{formatSalaryRange(job.salaryRange.min, job.salaryRange.max)}</p>
            </div>
            <p className="text-sm text-accent-500 font-light italic">{formatDistanceToNow(new Date(job.datePosted)) + ' ago'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default JobListings;
