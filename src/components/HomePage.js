import React, { useState } from 'react';
// Import components
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TagsFilters from './TagsFilters';
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
      <Navbar />
      <HeroSection />
      <TagsFilters />
      <JobListings onJobSelect={handleJobSelect} />
      {selectedJob && <JobPage job={selectedJob} onClose={() => setSelectedJob(null)} />}
      <Footer />
    </div>
  );
};

export default HomePage;
