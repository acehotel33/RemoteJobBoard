import React, { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';


const JobPage = ({ job, onClose }) => {
  
  // This function safely sets inner HTML from job.description
  // const createMarkup = (htmlContent) => {
  //   return { __html: htmlContent };
  // };

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
      <div className="container mx-auto p-4 pt-2 bg-white max-w-2xl mt-12 rounded-lg shadow-lg pb-10" ref={modalRef}>

        {/* Close Button */}
        <div className="text-right">
          <button className="text-lg font-semibold text-gray-600 hover:text-gray-900" onClick={onClose}>&times;</button>
        </div>

        {/* Job Role and Company */}
        <div className="grid md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold mb-1">{job.role}</h1>
            <p className="text-xl text-gray-900 mb-4 pb-2">{job.company}</p>
          </div>
          
          <div className="mt-6 text-center">
            <button className="submit-button bg-burgundy-500 text-white rounded-full">
              Apply Now
            </button>
          </div>
          
        </div>
        

        {/* Job Highlights */}
        <div className="border-t border-b border-gray-200 pb-5 grid gap-1 md:grid-cols-2">

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Job Type</h2>
            <p className="text-burgundy-600">{job.jobType}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">English OK?</h2>
            <p className="text-burgundy-600">{job.englishOK ? 'Yes' : 'No'}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Remote Type</h2>
            <p className="text-burgundy-600">{job.remoteType}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Posted On</h2>
            <p className="text-burgundy-600">{formatDate(job.datePosted)}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Salary Range</h2>
            <p className="text-burgundy-600">${job.salaryRange.min.toLocaleString()} - ${job.salaryRange.max.toLocaleString()}</p>
          </div>
          

        </div>

        {/* Detailed Job Description */}
        <div className="mt-4">
              <h2 className="text-lg font-semibold">Job Description</h2>
                <div className="job-description-quill">
                  <ReactQuill value={job.description} readOnly={true} theme={"bubble"} />
                </div>
            </div>

          {/* Descriptors Tags */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Tags</h2>
            <div className="mt-2 flex flex-wrap">
              {job.descriptors.map((desc, index) => (
                <span key={index} className="px-3 py-1 m-1 border rounded-full text-sm bg-blue-100 text-blue-900">
                  {desc}
                </span>
              ))}
            </div>
          </div>

        {/* Apply Now Button */}
        <div className="mt-6 text-center">
        <button className="submit-button bg-burgundy-500 text-white rounded-full">
          Apply Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
