import React, { useState, useEffect } from 'react';

// Function to calculate "x time ago"
const timeSince = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  
    let interval = Math.floor(seconds / 31536000); // Year
    if (interval > 1) return interval + " years ago";
    if (interval === 1) return interval + " year ago";
  
    interval = Math.floor(seconds / 2592000); // Month
    if (interval > 1) return interval + " months ago";
    if (interval === 1) return interval + " month ago";
  
    interval = Math.floor(seconds / 86400); // Day
    if (interval > 1) return interval + " days ago";
    if (interval === 1) return interval + " day ago";
  
    interval = Math.floor(seconds / 3600); // Hour
    if (interval > 1) return interval + " hours ago";
    if (interval === 1) return interval + " hour ago";
  
    interval = Math.floor(seconds / 60); // Minute
    if (interval > 1) return interval + " minutes ago";
    if (interval === 1) return interval + " minute ago";
  
    return Math.floor(seconds) + " seconds ago"; // Second, assuming it's always plural
  };
  

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

  return (
    <div className="my-8 space-y-6">
      {jobs.map((job) => (
        <div key={job._id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 cursor-pointer"
          onClick={() => onJobSelect(job)}>
          <h3 className="text-xl font-bold">{job.role}</h3>
          <p>{job.company}</p>
          <p>Salary Range: ${job.salaryRange.min.toLocaleString()} - ${job.salaryRange.max.toLocaleString()}</p>
          <p>{timeSince(job.datePosted)}</p>
          {/* Mapping descriptors if needed */}
        </div>
      ))}
    </div>
  );
};

export default JobListings;
