import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust the import path as necessary
import './Main.css';

function Main() {
  const { currentUser } = useAuth();

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <h1>e-Panchayat</h1>
        </div>
        <div className="navbar-right">
          {currentUser ? (
            <p className="user-email">{currentUser.email}</p>
          ) : (
            <button className="login-signup-btn">
              <Link to="/login">Login / Signup</Link>
            </button>
          )}
        </div>
      </nav>
      <div className="state-content">
        <Link to="/municipal" className="state-box" id="municipal">
          <div className="pic">
            <img src="/image/TN.png" className="state-img" alt="Municipal Corporation" />
          </div>
          <h2 className="state-title">Municipal Corporation</h2>
        </Link>

        <Link to="/police" className="state-box" id="police">
          <div className="pic">
            <img src="/image/tnpolice.png" className="state-img" alt="Police Department" />
          </div>
          <h2 className="state-title">Police Department</h2>
        </Link>

        <Link to="/health" className="state-box" id="health">
          <div className="pic">
            <img src="/image/health.jpg" className="state-img" alt="Health Care" />
          </div>
          <h2 className="state-title">Health Care</h2>
        </Link>

        <Link to="/education" className="state-box" id="education">
          <div className="pic">
            <img src="/image/education.jpg" className="state-img" alt="Education" />
          </div>
          <h2 className="state-title">Education</h2>
        </Link>

        <Link to="/apply" className="state-box" id="apply">
          <div className="pic">
            <img src="/image/apply.jpg" className="state-img" alt="Apply Online" />
          </div>
          <h2 className="state-title">Apply Online</h2>
        </Link>
      </div>
    </div>
  );
}

export default Main;
