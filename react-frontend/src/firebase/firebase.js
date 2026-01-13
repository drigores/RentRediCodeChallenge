// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Import Realtime Database module

const firebaseConfig = {
  authDomain: "https://accounts.google.com/o/oauth2/auth",
  projectId: "rentredi-57402",
  appId: "rentredi-57402",
  databaseURL: "https://rentredi-57402-default-rtdb.firebaseio.com", // Make sure this is included for non us-central1 locations
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

