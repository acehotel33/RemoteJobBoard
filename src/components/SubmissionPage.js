// src/components/SubmissionPage.js
import React from 'react';
import SubmissionForm from './SubmissionForm';

const SubmissionPage = () => {
  return (
    // Use the same classes for consistent width and padding
    <div className="container mx-auto p-10 pb-20 max-w-4xl">
      {/* <h1 className="text-2xl font-bold mb-4">Post a Job</h1> */}
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Post a Job</h2>
      {/* Title for context */}
      <SubmissionForm />
    </div>
  );
};

export default SubmissionPage;