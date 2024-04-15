// src/utils.js
export const displaySalaryRange = (min, max) => {
    if (min !== null && max !== null) {
      return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
    }
    return "Salary not specified";
  };