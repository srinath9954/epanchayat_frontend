import React from 'react';
import './Education.css';

const Education = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <header>
        <h1>Government Education Portal</h1>
      </header>

      <nav>
        <a href="scholarship.html" target="_blank">Apply for Scholarship</a>
        <a href="school.html" target="_blank">School</a>
        <a href="college.html" target="_blank">College</a>
        <a href="higher_education.html" target="_blank">Higher Education</a>
      </nav>

      <div className="container">
        <section id="apply-for-scholarship">
          <h2>Apply for Scholarship</h2>
          <p>Explore and apply for government scholarships to support your education. Click below to get started:</p>
          <button className="button" onClick={() => handleRedirect("https://scholarships.gov.in/")}>Apply for Scholarship</button>
        </section>

        <section id="school-section">
          <h2>School Section</h2>
          <p>Find information about schools and educational resources. Click below for more details:</p>
          <button className="button" onClick={() => handleRedirect("https://www.tn.gov.in/department/28")}>School Section</button>
        </section>

        <section id="college-and-higher-education">
          <h2>College and Higher Education</h2>
          <p>Discover opportunities for higher studies and career advancement. Click below for information:</p>
          <button className="button" onClick={() => handleRedirect("higher_education.html")}>Higher Education</button>
        </section>
      </div>
    </div>
  );
};

export default Education;
