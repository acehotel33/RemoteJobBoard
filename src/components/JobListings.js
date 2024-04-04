

import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

const JobListings = ({ onJobSelect }) => {
  const [jobs, setJobs] = useState([]);

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

  return (
    <div className="my-4 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      {jobs.map((job) => (
        <div key={job._id} 
             className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 cursor-pointer mb-4"
             onClick={() => onJobSelect(job)}>
          <h3 className="text-xl font-bold text-gray-800">{job.role}</h3>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-gray-500">{formatSalaryRange(job.salaryRange.min, job.salaryRange.max)}</p>
          <p className="text-sm text-gray-400">{formatDistanceToNow(new Date(job.datePosted)) + ' ago'}</p>
          {/* Mapping descriptors if needed */}
        </div>
      ))}
    </div>
  );
};

export default JobListings;
