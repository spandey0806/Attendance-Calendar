// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeU46JhXf888NEonMZTAu_3fMblaFpLNQ",
  authDomain: "attendancecalendar.firebaseapp.com",
  projectId: "attendancecalendar",
  storageBucket: "attendancecalendar.appspot.com",
  messagingSenderId: "696337289418",
  appId: "1:696337289418:web:e2d3aca884a184513a2433",
  measurementId: "G-PKHBHBK7T0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
