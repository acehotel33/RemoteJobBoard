import React from 'react';

const JobPage = ({ job, onClose }) => {
  if (!job) {
    return <div className="text-center p-20">Loading job details...</div>;
  }

  // Formatting the datePosted
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-start pt-10">
      <div className="container mx-auto p-4 bg-white max-w-2xl mt-12 rounded-lg shadow-lg">
        {/* Close Button */}
        <div className="text-right">
          <button className="text-lg font-semibold text-gray-600 hover:text-gray-800" onClick={onClose}>&times;</button>
        </div>

        {/* Job Role and Company */}
        <h1 className="text-3xl font-bold text-center mb-1">{job.role}</h1>
        <p className="text-xl text-gray-800 text-center mb-4">{job.company}</p>

        {/* Job Details */}
        <div className="border-t border-gray-200">

          <div className="mt-4">
            <h2 className="text-lg font-bold">Salary Range</h2>
            <p className="mt-2">${job.salaryRange.min.toLocaleString()} - ${job.salaryRange.max.toLocaleString()}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-bold">Job Type</h2>
            <p className="mt-2">{job.jobType}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-bold">Remote Type</h2>
            <p className="mt-2">{job.remoteType}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-bold">English Required</h2>
            <p className="mt-2">{job.englishOK ? 'Yes' : 'No'}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-bold">Posted On</h2>
            <p className="mt-2">{formatDate(job.datePosted)}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-bold">Job Description</h2>
            <p className="mt-2 text-gray-700 whitespace-pre-line">{job.description}</p>
          </div>

          {/* Descriptors Tags */}
          <div className="mt-4">
            <h2 className="text-lg font-bold">Tags</h2>
            <div className="mt-2 flex flex-wrap">
              {job.descriptors.map((desc, index) => (
                <span key={index} className="px-3 py-1 m-1 border rounded-full text-sm bg-blue-100 text-blue-800">
                  {desc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="mt-6 text-center">
          <button className="bg-burgundy text-white rounded px-6 py-2 font-bold">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
