import React, { useState } from 'react';

import HeroSection from './HeroSection';
import JobListings from './JobListings';
import JobPage from './JobPage'; // Import JobPage
import Footer from './Footer';

const HomePage = () => {
  // State to manage the selected job
  const [selectedJob, setSelectedJob] = useState(null);

  // Handler to update the selected job
  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  return (
    <div>
      <HeroSection />
      <JobListings onJobSelect={handleJobSelect} />
      {selectedJob && <JobPage job={selectedJob} onClose={() => setSelectedJob(null)} />}
      <Footer />
    </div>
  );
};

export default HomePage;
