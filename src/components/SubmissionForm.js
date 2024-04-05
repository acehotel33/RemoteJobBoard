// src/components/SubmissionForm.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';



const SubmissionForm = () => {

  
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    remoteType: 'Fully',
    jobType: 'Full-time',
    salaryRange: { min: '', max: '' },
    englishOK: false,
    description: '',
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'salaryRangeMin' || name === 'salaryRangeMax') {
      // Use 'min' or 'max' as the key based on the input's name
      const key = name === 'salaryRangeMin' ? 'min' : 'max';
      setFormData(prev => ({
        ...prev,
        salaryRange: { ...prev.salaryRange, [key]: value },
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDescriptionChange = (value) => {
    setFormData(prev => ({ ...prev, description: value }));
  };

  // Handler for tags will be added here

  const sanitizeConfig = {
    ALLOWED_TAGS: ['h1', 'h2', 'h3', 'ul', 'ol', 'li', 'p', 'b', 'i', 'strong', 'em', 'br'], // Add more tags as needed
    ALLOWED_ATTR: ['href', 'align', 'alt', 'src', 'title', 'style'], // Add more attributes as needed
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Sanitize description with custom configuration
    const sanitizedDescription = DOMPurify.sanitize(formData.description, sanitizeConfig);
    const sanitizedFormData = { ...formData, description: sanitizedDescription };
  
    console.log(sanitizedFormData);  // This is now safe to send to your backend
  
    // TODO: Send sanitizedFormData to the backend
  };
  
  // For now, we're just logging the formData to the console
  // Here you would typically send the formData to the backend

  return (
    
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        {/* Inside the <form> in SubmissionForm.js */}

        <div className="form-field w-full">
          <label htmlFor="company" className="form-label">Company Name</label>
          <input type="text" id="company" name="company" className="form-input w-full" onChange={handleChange} value={formData.company} />
        </div>

        <div className="form-field w-full">
          <label htmlFor="role" className="form-label">Role</label>
          <input type="text" id="role" name="role" className="form-input w-full" onChange={handleChange} value={formData.role} />
        </div>

        <div className="form-field w-full">
          <label htmlFor="remoteType" className="form-label">Remote Type</label>
          <select id="remoteType" name="remoteType" className="form-input w-full" onChange={handleChange} value={formData.remoteType}>
            <option value="Fully">Fully Remote</option>
            <option value="Partly">Partly Remote</option>
          </select>
        </div>

        <div className="form-field w-full">
          <label htmlFor="jobType" className="form-label">Job Type</label>
          <select id="jobType" name="jobType" className="form-input w-full" onChange={handleChange} value={formData.jobType}>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div className="form-field w-full">
          <label htmlFor="salaryRangeMin" className="form-label">Salary Range Min</label>
          <input
            type="number"
            id="salaryRangeMin"
            name="salaryRangeMin"
            className="form-input w-full" 
            onChange={handleChange}
            value={formData.salaryRange.min} 
          />
          <label htmlFor="salaryRangeMax" className="form-label">Salary Range Max</label>
          <input
            type="number"
            id="salaryRangeMax"
            name="salaryRangeMax"
            className="form-input w-full" 
            onChange={handleChange}
            value={formData.salaryRange.max}
          />
        </div>

        <div className="form-field w-full">
          <label>
            <input type="checkbox" name="englishOK" className="form-input w-full" onChange={handleChange} checked={formData.englishOK} />
            English OK?
          </label>
        </div>

        <div className="form-field w-full">
          <label className="form-label">Description</label>
          <ReactQuill theme="snow" value={formData.description} onChange={handleDescriptionChange} />
        </div>

        {/* Tags input and other components can be added similarly */}

        {/* Submit Button */}
          <div className="text-center mt-6">
            <button type="submit" className="submit-button">
              Post Job
            </button>
          </div>
          
      </form>
  
  );
};

export default SubmissionForm;
