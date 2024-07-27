// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBwhGpCfJ2LqJfGf_jLkme-2h6_HydjMxk",
  authDomain: "e-panchayat-a4e99.firebaseapp.com",
  projectId: "e-panchayat-a4e99",
  storageBucket: "e-panchayat-a4e99.appspot.com",
  messagingSenderId: "595097784710",
  appId: "1:595097784710:web:8c109fd0bbf746da361c07",
  measurementId: "G-7TWCHL6BTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
