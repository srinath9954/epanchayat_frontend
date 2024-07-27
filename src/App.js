import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Apply from './components/Apply';
import Education from './components/Education';
import Health from './components/Health';
import Hospital from './components/Hospital';
import Insurance from './components/Insurance';
import Login from './components/Login';
import SignUp from './components/SignUp'; // Import the SignUp component
import Municipal from './components/Municipal';
import Police from './components/Police';
import Vaccine from './components/Vaccine';
import './style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> {/* Add route for SignUp */}
        <Route path="/municipal" element={<Municipal />} />
        <Route path="/police" element={<Police />} />
        <Route path="/vaccine" element={<Vaccine />} />
      </Routes>
    </Router>
  );
}

export default App;
