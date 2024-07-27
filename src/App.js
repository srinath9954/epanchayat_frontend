import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Apply from './components/Apply';
import Education from './components/Education';
import Health from './components/Health';
import Hospital from './components/Hospital';
import Insurance from './components/Insurance';
import Login from './components/Login';
import Municipal from './components/Municipal';
import Police from './components/Police';
import Vaccine from './components/Vaccine';
import { AuthProvider, useAuth } from './AuthContext';
import './style.css';
import SignUp from './components/SignUp';

function PrivateRoute({ element: Component }) {
  const { currentUser } = useAuth();
  return currentUser ? <Component /> : <Navigate to="/login" />;
}

function App() {
  const { currentUser } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={currentUser ? <Navigate to="/main" /> : <Navigate to="/login" />} />
          <Route path="/main" element={<PrivateRoute element={Main} />} />
          <Route path="/apply" element={<PrivateRoute element={Apply} />} />
          <Route path="/education" element={<PrivateRoute element={Education} />} />
          <Route path="/health" element={<PrivateRoute element={Health} />} />
          <Route path="/hospital" element={<PrivateRoute element={Hospital} />} />
          <Route path="/insurance" element={<PrivateRoute element={Insurance} />} />
          <Route path="/municipal" element={<PrivateRoute element={Municipal} />} />
          <Route path="/police" element={<PrivateRoute element={Police} />} />
          <Route path="/vaccine" element={<PrivateRoute element={Vaccine} />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
