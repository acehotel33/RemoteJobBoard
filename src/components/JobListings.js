// src/components/JobListings.js
import React from 'react';

const jobs = [
  // Sample data structure
  { 
    id: 1,
    title: "Frontend Developer",
    company: "Tech Co.",
    descriptors: ["Fully Remote", "Full-time"],
    logo: "path_to_logo.png", // Placeholder for company logo path
    salaryRange: "$70k - $90k",
  },
  { 
    id: 2,
    title: "Account Manager",
    company: "Tatia & Co.",
    descriptors: ["Flexible Hours", "Great Benefits"],
    logo: "path_to_logo.png", // Placeholder for company logo path
    salaryRange: "$120k - $150k",
  },
  { 
    id: 3,
    title: "Customer Service Specialist",
    company: "Benedict Factories.",
    descriptors: ["Part-time", "Fully Remote"],
    logo: "path_to_logo.png", // Placeholder for company logo path
    salaryRange: "$50k - $60k",
  },
  { 
    id: 3,
    title: "Customer Service Specialist",
    company: "Benedict Factories.",
    descriptors: ["Part-time", "Fully Remote"],
    logo: "path_to_logo.png", // Placeholder for company logo path
    salaryRange: "$50k - $60k",
  },
  { 
    id: 3,
    title: "Customer Service Specialist",
    company: "Benedict Factories.",
    descriptors: ["Part-time", "Fully Remote"],
    logo: "path_to_logo.png", // Placeholder for company logo path
    salaryRange: "$50k - $60k",
  },
  { 
    id: 3,
    title: "Customer Service Specialist",
    company: "Benedict Factories.",
    descriptors: ["Part-time", "Fully Remote"],
    logo: "path_to_logo.png", // Placeholder for company logo path
    salaryRange: "$50k - $60k",
  },
  { 
    id: 3,
    title: "Customer Service Specialist",
    company: "Benedict Factories.",
    descriptors: ["Part-time", "Fully Remote"],
    logo: "path_to_logo.png", // Placeholder for company logo path
    salaryRange: "$50k - $60k",
  },
  { 
    id: 3,
    title: "Customer Service Specialist",
    company: "Benedict Factories.",
    descriptors: ["Part-time", "Fully Remote"],
    logo: "path_to_logo.png", // Placeholder for company logo path
    salaryRange: "$50k - $60k",
  },
  // ...add more sample jobs
];

const JobListings = () => {
  return (
    <div className="my-8 space-y-6">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <div className="flex items-center space-x-4">
            <img src={job.logo} alt={`${job.company} logo`} className="h-12 w-12 rounded-full" />
            <div className="flex-1">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-800">{job.company}</p>
              <p className="text-gray-500">{job.salaryRange}</p>
            </div>
          </div>
          <div className="flex mt-4 flex-wrap gap-2">
            {job.descriptors.map((desc, index) => (
              <span key={index} className="px-3 py-1 border rounded-full text-sm bg-blue-100 text-blue-800">
                {desc}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
