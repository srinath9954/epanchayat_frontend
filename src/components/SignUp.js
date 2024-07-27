// src/components/SignUp.js
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import auth from the firebase.js file

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      navigate('/'); // Redirect to home or login page after successful signup
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <div class="center-wrapper">
    <div className="form-container">
      <p className="title">Create an Account</p>
      <form className="form" onSubmit={handleSubmit}>
        <input type="email" className="input" placeholder="Email" ref={emailRef} required />
        <input type="password" className="input" placeholder="Password" ref={passwordRef} required />
        <button className="form-btn" type="submit">Sign Up</button>
      </form>
      <p className="sign-up-label">
        Already have an account?<span className="sign-up-link" onClick={() => navigate('/login')}>Log in</span>
      </p>
    </div>
    </div>
  );
}
