// src/components/HomePage.js
import React from 'react';
import Navbar from './Navbar'; // Component for the navigation bar
import HeroSection from './HeroSection'; // Component for the hero section with the search bar
import TagsFilters from './TagsFilters'; // Component for the tag category bubbles
import JobListings from './JobListings'; // Component for the job listings
import Footer from './Footer'; // Component for the footer

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TagsFilters />
      <JobListings />
      <Footer />
    </div>
  );
};

export default HomePage;
