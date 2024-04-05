import React, { useEffect, useRef } from 'react';


const JobPage = ({ job, onClose }) => {
  
  // This function safely sets inner HTML from job.description
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  // Reference to the modal content
  const modalRef = useRef(null);

  useEffect(() => {
    // Function to handle click outside
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function
    return () => {
      // Re-enable scrolling when the component unmounts
      document.body.style.overflow = 'unset';
      // Remove event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]); // Depend on onClose to recreate the effect if it changes


  if (!job) {
    return <div className="text-center p-20">Loading job details...</div>;
  }


  // Formatting the datePosted
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-start pb-20">
      <div className="container mx-auto p-4 bg-white max-w-2xl mt-12 rounded-lg shadow-lg pb-10" ref={modalRef}>

        {/* Close Button */}
        <div className="text-right">
          <button className="text-lg font-semibold text-gray-600 hover:text-gray-800" onClick={onClose}>&times;</button>
        </div>

        {/* Job Role and Company */}
        <h1 className="text-3xl font-bold text-center mb-1">{job.role}</h1>
        <p className="text-xl text-gray-800 text-center mb-4">{job.company}</p>

        {/* Job Highlights */}
        <div className="border-t border-gray-200">

          <div className="mt-4">
            <h2 className="text-lg font-bold">Salary Range</h2>
            <p>${job.salaryRange.min.toLocaleString()} - ${job.salaryRange.max.toLocaleString()}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-bold">Job Type</h2>
            <p>{job.jobType}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-bold">Remote Type</h2>
            <p>{job.remoteType}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-bold">English Required</h2>
            <p>{job.englishOK ? 'Yes' : 'No'}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-bold">Posted On</h2>
            <p>{formatDate(job.datePosted)}</p>
          </div>

          {/* Detailed Job Description */}
          <div className="mt-4">
            <h2 className="text-lg font-bold">Job Description</h2>
            {/* This div will render the HTML content from the job's description */}
            <div dangerouslySetInnerHTML={createMarkup(job.description)} />
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
        <button className="submit-button">
          Apply Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
