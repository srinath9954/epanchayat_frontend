import React from 'react';
import './Apply.css';

const Apply = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <header>
        <h1>Exam & Service Application Portal</h1>
      </header>

      <div className="container">
        <div className="service-item-container">
          <div className="service-item" id="upsc" onClick={() => handleRedirect("https://upsc.gov.in/apply-online")}>
            <h2>UPSC Exam</h2>
            <p>Last Date to Apply: DD/MM/YYYY</p>
          </div>

          <div className="service-item" id="tnpsc">
            <h2>TNPSC Exam</h2>
            <p>Last Date to Apply: DD/MM/YYYY</p>
          </div>

          <div className="service-item" id="jee">
            <h2>JEE Exam</h2>
            <p>Last Date to Apply: DD/MM/YYYY</p>
          </div>

          <div className="service-item" id="neet">
            <h2>NEET Exam</h2>
            <p>Last Date to Apply: DD/MM/YYYY</p>
          </div>

          <div className="service-item" id="cat">
            <h2>CAT Exam</h2>
            <p>Last Date to Apply: DD/MM/YYYY</p>
          </div>

          <div className="service-item" id="gate">
            <h2>GATE Exam</h2>
            <p>Last Date to Apply: DD/MM/YYYY</p>
          </div>

          <div className="service-item" id="passport">
            <h2>Passport Application</h2>
            <p>Last Date to Apply: No Deadline</p>
          </div>

          <div className="service-item" id="pan">
            <h2>PAN Card Application</h2>
            <p>Last Date to Apply: No Deadline</p>
          </div>

          <div className="service-item" id="aadhaar">
            <h2>Aadhaar Card Application</h2>
            <p>Last Date to Apply: No Deadline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
