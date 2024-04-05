// src/components/SubmissionPage.js
import React from 'react';
import SubmissionForm from './SubmissionForm';

const SubmissionPage = () => {
  return (
    // Use the same classes for consistent width and padding
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Job Submission</h1>
      <SubmissionForm />
    </div>
  );
};

export default SubmissionPage;