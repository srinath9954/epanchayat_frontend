import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Health.css';

const Health = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Government Healthcare Portal</h1>
      </header>

      <nav>
        <Link to="/insurance">Apply for Health Insurance</Link>
        <Link to="/vaccine">Vaccine Details</Link>
        <Link to="/hospital">Raise Queries About Hospitals</Link>
      </nav>

      <div className="container">
        <section id="apply-for-health-insurance">
          <h2>Apply for Health Insurance</h2>
          <p>Secure your health with government-backed insurance. Click below to start your application:</p>
          <button className="button" onClick={() => navigate("/insurance")}>Apply for Health Insurance</button>
        </section>

        <section id="vaccine-details">
          <h2>Vaccine Details</h2>
          <p>Stay up-to-date on the latest vaccine information and availability. Click below for details:</p>
          <button className="button" onClick={() => navigate("/vaccine")}>Vaccine Details</button>
        </section>

        <section id="raise-queries-about-hospitals">
          <h2>Raise Queries About Hospitals</h2>
          <p>Have questions about hospitals? Need assistance? Click below to raise your queries:</p>
          <button className="button" onClick={() => navigate("/hospital")}>Raise Hospital Queries</button>
        </section>
      </div>
    </div>
  );
};

export default Health;
