

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
    <div className="my-2 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {jobs.map((job) => (
            <div 
            key={job._id} 
            className="bg-white shadow-lg rounded-lg px-6 py-4 border border-gray-200 cursor-pointer mb-6 flex justify-between items-center"
            onClick={() => onJobSelect(job)}
          >
          
            <div>
                <h3 className="text-lg font-bold text-gray-800">{job.role}</h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-500">{formatSalaryRange(job.salaryRange.min, job.salaryRange.max)}</p>
            </div>
            <p className="text-sm text-burgundy font-light italic">{formatDistanceToNow(new Date(job.datePosted)) + ' ago'}</p>
            </div>
      ))}
    </div>
  );
};

export default JobListings;
